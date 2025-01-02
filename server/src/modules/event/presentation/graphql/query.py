import typing as t

import strawberry
from dependency_injector.wiring import Provide, inject
from modules.event.application.container import ApplicationContainer as EventContainer
from modules.event.application.service import EventService
from modules.event.domain.entity import Event as DEvent
from modules.event.presentation.graphql.ext import DependencyExtension


@strawberry.type
class Event:
    name: str
    location: str
    date: str

    @classmethod
    def from_domain(cls, event: DEvent) -> "Event":
        return cls(
            name=event.display_name,
            location=event.location,
            date=event.start_timestamp.strftime("%Y-%m-%d"),
        )


@strawberry.input
class EventInput:
    name: str = None
    location: str
    date: str = None


@strawberry.type
class Query:
    @strawberry.field(extensions=[DependencyExtension()])
    @inject
    def events(
        self,
        event_query: EventInput,
        event_service: strawberry.Private[EventService] = Provide[EventContainer.event_service],
    ) -> t.List[Event]:
        return [Event.from_domain(event) for event in event_service.get_all_events_by_location(event_query.location)]
