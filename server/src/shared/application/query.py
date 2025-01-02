import typing as t
from abc import ABC, abstractmethod

from pydantic import BaseModel

TQuery = t.TypeVar("TQuery", bound="Query")
TQueryResult = t.TypeVar("TQueryResult")


class Query(BaseModel): ...


class QueryHandler(ABC, t.Generic[TQuery, TQueryResult]):
    @abstractmethod
    def handle(self, query: TQuery) -> TQueryResult:
        pass
