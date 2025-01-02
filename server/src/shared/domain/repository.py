import abc
from typing import Generic, TypeVar

from shared.domain.entity import Entity as DomainEntity
from shared.domain.value_objects import GenericUUID

TDomainEntity = TypeVar("TDomainEntity", bound=DomainEntity)


class GenericRepository(Generic[TDomainEntity]):
    @abc.abstractmethod
    def get(self, id: GenericUUID) -> TDomainEntity:
        raise NotImplementedError("Method not implemented")

    @abc.abstractmethod
    def add(self, entity: TDomainEntity) -> None:
        raise NotImplementedError("Method not implemented")

    def __getitem__(self, index) -> TDomainEntity:
        return self.get_by_id(index)
