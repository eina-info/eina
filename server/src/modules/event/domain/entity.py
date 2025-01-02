from datetime import datetime

from shared.domain.entity import Entity


class Event(Entity[int]):
    display_name: str
    description: str
    start_timestamp: datetime
    end_timestamp: datetime
    location: str
