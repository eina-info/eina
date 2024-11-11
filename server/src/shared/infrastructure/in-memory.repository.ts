import { EntityNotFoundError } from 'typeorm';
import { DomainEntity } from '../domain/entity';

export class InMemoryRepository<T extends DomainEntity> {
  entities: T[] = [];

  async get(id: number): Promise<T> {
    const event = this.entities.find((entity) => entity.id === id);

    if (event === undefined) {
      throw new EntityNotFoundError(DomainEntity, id);
    }

    return event;
  }
}
