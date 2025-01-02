from typing import Generic, Optional, TypeVar

from pydantic import BaseModel

TEntityId = TypeVar("EntityId")


class Entity(BaseModel, Generic[TEntityId]):
    id: Optional[TEntityId] = None

    def __eq__(self, other):
        return self.id == other.id

    def __hash__(self):
        return hash(self.id)
