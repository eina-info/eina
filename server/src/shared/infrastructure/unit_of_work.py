from sqlalchemy.ext.asyncio import AsyncSession, async_sessionmaker


class BaseUnitOfWork:
    def __init__(self, session_maker=async_sessionmaker):
        self.session_maker = session_maker

    async def commit(self):
        await self.session.commit()

    async def rollback(self):
        await self.session.rollback()

    async def __aenter__(self):
        self.session: AsyncSession = self.session_maker()

    async def __aexit__(self, exc_type, exc_val, exc_tb):
        if exc_type:
            await self.rollback()
        else:
            await self.commit()
        await self.session.close()
