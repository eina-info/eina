from sqlalchemy.ext.asyncio import AsyncSession, async_sessionmaker


class BaseUnitOfWork:
    def __init__(self, session_maker=async_sessionmaker):
        self.session_maker = session_maker

    async def commit(self):
        self.session.commit()

    async def rollback(self):
        self.session.rollback()

    async def close(self):
        self.session.close()

    async def __enter__(self):
        self.session: AsyncSession = await self.session_maker()

    async def __exit__(self, exc_type, exc_val, exc_tb):
        if exc_type:
            await self.rollback()
        else:
            await self.commit()
