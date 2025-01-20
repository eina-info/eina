import typing as t

from modules.event.domain.entity import Event
from shared.domain.repository import GenericRepository


class EventRepository(GenericRepository[Event, int]):
    def get_by_location(self, location: str) -> t.List[Event]:
        raise NotImplementedError("Method not implemented")
