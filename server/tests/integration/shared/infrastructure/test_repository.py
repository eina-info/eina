import asyncio

import pytest
import pytest_asyncio
from shared.domain.entity import Entity
from shared.domain.exceptions import EntityNotFoundError
from shared.infrastructure.orm import CreatedUpdatedMixin, DeletedMixin, IDIntMixin
from shared.infrastructure.repository import SQLAlchemyAsyncRepository
from sqlalchemy import Column, Integer, String, select
from sqlalchemy.ext.asyncio import AsyncSession, async_sessionmaker, create_async_engine
from sqlalchemy.orm import as_declarative, declared_attr
from testcontainers.postgres import PostgresContainer


class Foo(Entity[int]):
    name: str
    city: str
    country: str = "USA"
    population: int = 0


@as_declarative()
class Base:
    @declared_attr
    def __tablename__(cls) -> str:
        return cls.__name__.lower()


class ORMFoo(
    IDIntMixin,
    CreatedUpdatedMixin,
    DeletedMixin,
    Base,
):
    name: str = Column(String)
    city: str = Column(String)
    country: str = Column(String)
    population: int = Column(Integer)

    @declared_attr
    def __tablename__(cls) -> str:
        return "foo"


class FooRepository(SQLAlchemyAsyncRepository[Foo, int, ORMFoo]):
    _entity_type = Foo
    _orm_model = ORMFoo


@pytest.fixture(scope="module")
def event_loop():
    loop = asyncio.get_event_loop_policy().new_event_loop()
    yield loop
    loop.close()


@pytest_asyncio.fixture(scope="module")
async def postgres_container():
    """Set up a PostgreSQL container for testing."""
    with PostgresContainer("postgres:16-alpine") as postgres:
        postgres.get_connection_url()
        yield postgres


@pytest_asyncio.fixture()
async def test_db_session(postgres_container, event_loop):
    """Set up the database and return an async session."""
    engine = create_async_engine(postgres_container.get_connection_url(driver="asyncpg"), future=True, echo=True)
    SessionLocal = async_sessionmaker(bind=engine, expire_on_commit=False, autoflush=False, class_=AsyncSession)

    # Create the database schema
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)

    async with SessionLocal() as session:
        yield session

    await session.close()

    # Drop the database schema
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.drop_all)


@pytest_asyncio.fixture
async def add_existing_entity(test_db_session):
    model = ORMFoo(name="Test Entity", city="foo")
    test_db_session.add(model)
    await test_db_session.commit()


@pytest.mark.asyncio
async def test_upsert_entity(test_db_session):
    repo = FooRepository(test_db_session)
    new_entity = Foo(name="Test Entity", city="foo")
    entity = await repo.upsert(new_entity)

    await test_db_session.commit()

    entries = await test_db_session.execute(select(ORMFoo))

    all_entries = entries.scalars().all()

    assert len(all_entries) == 1
    assert all_entries[0].name == "Test Entity"
    assert all_entries[0].city == "foo"
    assert all_entries[0].id == 1

    assert entity.id == 1


@pytest.mark.asyncio
async def test_upsert_existing(test_db_session):
    test_db_session.add(ORMFoo(name="Test Entity", city="foo"))
    await test_db_session.commit()

    repo = FooRepository(test_db_session)
    entity = await repo.upsert(Foo(id=1, name="Test Entity Updated", city="foo"))

    await test_db_session.commit()

    entries = await test_db_session.execute(select(ORMFoo))

    all_entries = entries.scalars().all()

    assert len(all_entries) == 1
    assert all_entries[0].name == "Test Entity Updated"
    assert all_entries[0].city == "foo"
    assert all_entries[0].id == 1

    assert entity.id == 1
    assert entity.name == "Test Entity Updated"


@pytest.mark.asyncio
@pytest.mark.parametrize(
    "expected_count, country, city",
    [
        (2, "USA", None),
        (1, "ESP", None),
        (1, None, "foo"),
        (1, "USA", "foo"),
        (0, "USA", "bar"),
    ],
)
async def test_get_by_filters(test_db_session, expected_count, country, city):
    repository = FooRepository(test_db_session)
    model1 = ORMFoo(name="Test Entity 1", city="foo", country="USA", population=100)
    model2 = ORMFoo(name="Test Entity 2", city="bar", country="ESP", population=10)
    model3 = ORMFoo(name="Test Entity 3", city="baz", country="USA", population=1)

    test_db_session.add_all([model1, model2, model3])

    await test_db_session.commit()

    params = {}
    if country:
        params["country"] = country
    if city:
        params["city"] = city

    entities = await repository.get_by_filters(**params)

    assert len(entities) == expected_count


@pytest.mark.asyncio
async def test_get_nonexistent_entity(test_db_session):
    repo = FooRepository(test_db_session)

    with pytest.raises(EntityNotFoundError):
        await repo[101]


@pytest.mark.asyncio
async def test_delete_entity(test_db_session):
    test_db_session.add(ORMFoo(name="Test Entity", city="foo", country="USA", population=1))
    await test_db_session.commit()
    repo = FooRepository(test_db_session)

    await repo.delete(1)
    await test_db_session.commit()

    with pytest.raises(EntityNotFoundError):
        await repo.get(1)
