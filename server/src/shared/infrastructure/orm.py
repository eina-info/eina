from datetime import datetime

from sqlalchemy import Boolean, Column, DateTime, Integer
from sqlalchemy.orm import DeclarativeBase, Mapped, declared_attr


class Base(DeclarativeBase):
    """
    Base class for SQLAlchemy models.
    """

    @declared_attr
    def __tablename__(cls) -> str:
        return cls.__name__.lower()


class CreatedUpdatedMixin:
    """
    Mixin for adding created_at and updated_at fields to a SQLAlchemy model.
    """

    created_at: Mapped[datetime] = Column(DateTime, default=datetime.now)
    updated_at: Mapped[datetime] = Column(DateTime, default=None, onupdate=datetime.now, nullable=True)


class DeletedMixin:
    """
    Mixin for adding a is_deleted field to a SQLAlchemy model.
    """

    is_deleted: Mapped[bool] = Column(Boolean, default=False)


class IDIntMixin:
    """
    Mixin for adding an ID field to a SQLAlchemy model.
    """

    id: Mapped[int] = Column(Integer, primary_key=True, autoincrement=True)


class BaseModel(Base, CreatedUpdatedMixin, DeletedMixin, IDIntMixin):
    __abstract__ = True

    def __repr__(self):
        return f"<{self.__class__.__name__}(id={self.id})>"

    def __eq__(self, other):
        return isinstance(other, self.__class__) and self
