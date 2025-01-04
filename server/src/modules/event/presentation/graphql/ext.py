import typing as t

import strawberry
from dependency_injector.wiring import Provide
from strawberry.extensions import FieldExtension
from strawberry.types.field import StrawberryField


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
