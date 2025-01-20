import typing as t
from logging import Logger

from modules.event.domain.entity import Event
from modules.event.domain.repository import EventRepository


class EventService:
    def __init__(self, logger: Logger, event_repository: EventRepository):
        self._logger = logger
        self._event_repo = event_repository

    def get_all_events_by_location(self, location: str) -> t.List[Event]:
        return self._event_repo.get_by_location(location)
