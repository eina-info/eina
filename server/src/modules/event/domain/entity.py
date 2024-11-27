from dataclasses import dataclass
from datetime import datetime
from typing import Optional

from shared.domain.entity import Entity
from shared.domain.value_objects import GenericUUID


@dataclass
class Event(Entity[Optional[GenericUUID]]):
    display_name: str
    description: str
    start_timestamp: datetime
    end_timestamp: datetime
    location: str
