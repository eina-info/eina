import re as regex
import uuid


class GenericUUID(uuid.UUID):
    @classmethod
    def next_id(cls):
        return cls(int=uuid.uuid4().int)


class ValueObject:
    """
    Base class for value objects
    """


class Email(str):
    def __new__(cls, email):
        if not email:
            raise ValueError("Email cannot be empty")
        # regex to validate email format
        if regex.compile(r"[^@]+@[^@]+\.[^@]+").match(email) is None:
            raise ValueError("Invalid email format")
        return super().__new__(cls, email)
