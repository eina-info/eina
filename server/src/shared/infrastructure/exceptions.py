class UnretryableError(Exception):
    def __init__(self, message: str = "An error occurred."):
        self.message = message

    def __str__(self):
        return self.message

    def __repr__(self):
        return self.message


class RetryableError(Exception):
    def __init__(self, message: str = "An unexpected error occurred."):
        self.message = message

    def __str__(self):
        return self.message

    def __repr__(self):
        return self.message


class ORMToEntitySerializationError(UnretryableError):
    def __init__(self, model: any, data: any):
        self.model = model
        self.data = data
        self.message = f"Unable to serialize {model=} from {data=}"

    def __str__(self):
        return self.message

    def __repr__(self):
        return self.message


class DataToORMSerializationException(UnretryableError):
    def __init__(self, entity: any, model: any):
        self.entity = entity
        self.model = model
        self.message = f"Unable to serialize {entity=} to {model=}"

    def __str__(self):
        return self.message

    def __repr__(self):
        return self.message


class DatabaseError(UnretryableError):
    def __init__(self, message: str = "Database error"):
        self.message = message

    def __str__(self):
        return self.message

    def __repr__(self):
        return self.message
