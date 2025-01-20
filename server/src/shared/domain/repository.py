import abc
from typing import Generic, List, TypeVar

from shared.domain.entity import Entity as DomainEntity

T_Entity = TypeVar("T_Entity", bound=DomainEntity)
T_ID = TypeVar("T_ID")


class GenericRepository(abc.ABC, Generic[T_Entity, T_ID]):
    @abc.abstractmethod
    def get(self, idx: T_ID) -> T_Entity:
        raise NotImplementedError("Method not implemented")

    @abc.abstractmethod
    def upsert(self, entity: T_Entity) -> T_Entity:
        raise NotImplementedError("Method not implemented")

    @abc.abstractmethod
    def delete(self, idx: T_ID, soft=True) -> None:
        raise NotImplementedError("Method not implemented")

    @abc.abstractmethod
    def get_by_filters(self, **kwargs) -> List[T_Entity]:
        raise NotImplementedError("Method not implemented")

    def __getitem__(self, idx: T_ID) -> T_Entity:
        return self.get(idx)
