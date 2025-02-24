from unittest.mock import AsyncMock, MagicMock

import pytest
from shared.infrastructure.unit_of_work import BaseUnitOfWork


@pytest.mark.asyncio
async def test_base_unit_of_work_commit():
    """Test if commit is called when no exception occurs."""
    mock_session = AsyncMock()
    mock_session_maker = MagicMock(return_value=mock_session)

    async with BaseUnitOfWork(session_maker=mock_session_maker):
        pass  # Simulating successful transaction

    mock_session.commit.assert_awaited_once()
    mock_session.rollback.assert_not_awaited()


@pytest.mark.asyncio
async def test_base_unit_of_work_rollback():
    mock_session = AsyncMock()
    mock_session_maker = MagicMock(return_value=mock_session)

    with pytest.raises(ValueError):
        async with BaseUnitOfWork(session_maker=mock_session_maker):
            raise ValueError("Test Exception")

    mock_session.rollback.assert_awaited_once()
    mock_session.commit.assert_not_awaited()


@pytest.mark.asyncio
async def test_base_unit_of_work_close():
    mock_session = AsyncMock()
    mock_session_maker = MagicMock(return_value=mock_session)

    async with BaseUnitOfWork(session_maker=mock_session_maker):
        pass

    mock_session.close.assert_awaited_once()
