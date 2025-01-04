import logging

from dependency_injector import containers, providers
from modules.event.infrastructure.repository import EventInMemoryRepository


class InfrastructureContainer(containers.DeclarativeContainer):
    event_repository = providers.Singleton[EventInMemoryRepository](EventInMemoryRepository)
    logger = providers.Singleton[logging.Logger](logging.getLogger, "root")
