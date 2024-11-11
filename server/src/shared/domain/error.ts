// eslint-disable-next-line @typescript-eslint/no-explicit-anys
export abstract class DomainError extends Error {
  constructor(message: string) {
    super(message);
    this.name = this.constructor.name;
  }
}

export class EntityNotFoundError extends DomainError {
  constructor(entityName: string, id: number) {
    super(`${entityName} with id ${id} not found`);
  }
}
