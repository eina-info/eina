from typing import List

from modules.event.domain.entity import Event
from modules.event.domain.repository import EventRepository
from modules.event.infrastructure.orm import Event as ORMEvent
from shared.infrastructure.repository import SQLAlchemyAsyncRepository


class EventSqlAlchemyRepository(EventRepository, SQLAlchemyAsyncRepository[ORMEvent]):
    def get_by_location(self, location: str) -> List[Event]:
        return self.get_by_filters(location=location)
