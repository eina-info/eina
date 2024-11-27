from dataclasses import dataclass, fields
from typing import Generic, Optional, TypeVar

from shared.domain.value_objects import GenericUUID

TEntityId = TypeVar("EntityId", bound=GenericUUID)


@dataclass(kw_only=True)
class Entity(Generic[TEntityId]):
    id: Optional[TEntityId] = None

    def __eq__(self, other):
        return self.id == other.id

    def __hash__(self):
        return hash(self.id)

    def __repr__(self):
        return f"{self.__class__.__name__}(id={self.id})"

    def to_dict(self):
        return {field.name: getattr(self, field.name) for field in fields(self)}
