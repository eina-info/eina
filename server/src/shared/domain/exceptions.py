class DomainException(Exception):
    def __init__(self, message: str):
        self.message = message
        super().__init__(message)

    def __str__(self):
        return self.message

    def __repr__(self):
        return self.message


class EntityNotFoundError(DomainException):
    def __init__(self, entity: any):
        self.entity = entity
        self.message = f"Entity {entity} not found"
        super().__init__(self.message)
