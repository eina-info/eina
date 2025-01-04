from datetime import datetime
from typing import List

from modules.event.domain.entity import Event
from modules.event.domain.repository import EventRepository
from shared.domain.entity import TEntityId


class EventInMemoryRepository(EventRepository):
    __data = [
        Event(
            display_name="foo",
            location="berlin",
            description="foo",
            start_timestamp=datetime.now(),
            end_timestamp=datetime.now(),
        ),
    ]

    def get(self, id: TEntityId) -> Event:
        return next((entity for entity in self.__data if entity.id == id), None)

    def add(self, entity: Event) -> None:
        return self.__data.append(entity)

    def get_by_location(self, location: str) -> List[Event]:
        return [entity for entity in self.__data if entity.location == location]
