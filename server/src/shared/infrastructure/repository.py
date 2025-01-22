import uuid
from typing import Generic, List, Type, TypeVar

from shared.domain.entity import Entity
from shared.domain.exceptions import EntityNotFoundError
from shared.domain.repository import GenericRepository
from shared.infrastructure.exceptions import (
    DataToORMSerializationException,
    ORMToEntitySerializationError,
)
from shared.infrastructure.orm import BaseModel
from sqlalchemy.exc import NoResultFound
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select

T_Entity = TypeVar("T_Entity", bound=Entity)
T_ID = TypeVar("T_ID", int, str, uuid.UUID)
T_ORM = TypeVar("T_ORM", bound=BaseModel)


class SQLAlchemyAsyncRepository(GenericRepository[T_Entity, T_ID], Generic[T_Entity, T_ID, T_ORM]):
    _entity_type: Type[T_Entity]
    _orm_model: Type[T_ORM]

    def __init__(self, session: AsyncSession):
        """
        :param session: An instance of AsyncSession for database interactions.
        """
        self._session = session

    async def get(self, idx: T_ID) -> T_Entity:
        """Retrieve an entity by its ID."""
        try:
            if hasattr(self._orm_model, "is_deleted"):
                result = await self._session.execute(
                    select(self._orm_model).where(
                        (self._orm_model.id == idx) & (self._orm_model.is_deleted != True)  # noqa
                    )
                )
            else:
                result = await self._session.execute(select(self._orm_model).where(self._orm_model.id == idx))
            return self._orm_to_entity(result.scalar_one())
        except NoResultFound as e:
            raise EntityNotFoundError(f"Entity with id {idx} not found") from e

    async def get_by_filters(self, **kwargs) -> List[T_Entity]:
        """Retrieve entities by filters, represented as keyword args."""

        result = await self._session.execute(select(self._orm_model).filter_by(**kwargs))
        return [self._orm_to_entity(r) for r in result.scalars().all()]

    async def upsert(self, entity: T_Entity) -> T_Entity:
        """Adds or updates a new entity to the database."""
        orm_obj = await self._session.merge(self._entity_to_orm(entity))
        await self._session.flush()
        return self._orm_to_entity(orm_obj)

    async def delete(self, id: T_ID, soft=True) -> None:
        """Delete an entity by its ID."""
        entity = await self.get(id)
        if soft:
            entity.is_deleted = True
            await self.upsert(entity)
        else:
            await self._session.delete(self._entity_to_orm(entity))
        await self._session.flush()

    @classmethod
    def _orm_to_entity(cls, model: T_ORM) -> T_Entity:
        try:
            entity = cls._entity_type.model_validate(model, from_attributes=True)
        except ValueError as e:
            raise ORMToEntitySerializationError(f"Unable to serialize {model=} to {cls._entity_type}") from e
        return entity

    @classmethod
    def _entity_to_orm(cls, entity: T_Entity) -> T_ORM:
        try:
            model_data = cls._orm_model(**entity.model_dump())
        except ValueError as e:
            raise DataToORMSerializationException(f"Unable to serialize {entity=} to {cls._orm_model}") from e
        return model_data
