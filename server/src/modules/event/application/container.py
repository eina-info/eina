from dependency_injector import containers, providers
from modules.event.application.service import EventService
from modules.event.infrastructure.container import InfrastructureContainer


class ApplicationContainer(containers.DeclarativeContainer):
    infra = providers.Container[InfrastructureContainer](InfrastructureContainer)

    event_service = providers.Singleton[EventService](
        EventService,
        logger=infra.logger,
        event_repository=infra.event_repository,
    )
