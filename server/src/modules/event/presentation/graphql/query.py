import typing as t

import strawberry
from dependency_injector.wiring import Provide, inject
from modules.event.application.container import ApplicationContainer as EventContainer
from modules.event.domain.entity import Event as DEvent
from strawberry.extensions import FieldExtension
from strawberry.types.field import StrawberryField

# This part should be injected into the resolvers
# event_repo = EventInMemoryRepository()

# event_repo.add(
#     DEvent(
#         id=GenericUUID.next_id(),
#         display_name="foo",
#         location="berlin",
#         description="foo",
#         start_timestamp=datetime(2020, 1, 1),
#         end_timestamp=datetime(2020, 1, 1),
#     )
# )
# event_repo.add(
#     DEvent(
#         id=GenericUUID.next_id(),
#         display_name="bar",
#         location="berlin",
#         description="bar",
#         start_timestamp=datetime(2020, 1, 1),
#         end_timestamp=datetime(2020, 1, 1),
#     )
# )
# event_repo.add(
#     DEvent(
#         display_name="bar",
#         location="madrid",
#         description="bar",
#         start_timestamp=datetime(2020, 1, 1),
#         end_timestamp=datetime(2020, 1, 1),
#     )
# )

# event_service = EventService(logger=logging.getLogger(), event_repository=event_repo)


class DependencyExtension(FieldExtension):
    def __init__(self):
        self.dependency_args: list[t.Any] = []

    def apply(self, field: StrawberryField) -> None:
        # Remove dependency_injector provider arguments from the list that strawberry tries to resolve
        di_arguments = []
        keep_arguments = []
        for arg in field.arguments:
            if isinstance(arg.default, Provide):
                di_arguments.append(arg)
                continue
            keep_arguments.append(arg)
        field.arguments = keep_arguments
        self.dependency_args = di_arguments

    async def resolve_async(
        self,
        next_: t.Callable[..., t.Any],
        source: t.Any,
        info: strawberry,
        **kwargs,
    ) -> t.Any:
        res = await next_(source, info, **kwargs)
        return res


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
    def events(self, event_query: EventInput, event_service: Provide[EventContainer.event_service]) -> t.List[Event]:
        return [Event.from_domain(event) for event in event_service.get_all_events_by_location(event_query.location)]
