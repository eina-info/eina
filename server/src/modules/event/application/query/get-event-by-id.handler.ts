import { IEventRepository } from '../../domain/repository.interface';
import { Event } from '../../domain/entity';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetEventByIdQuery } from './get-event-by-id.query';
import { EntityNotFoundError } from '../../../../shared/domain/error';

@QueryHandler(GetEventByIdQuery)
export class GetEventByIdQueryHandler
  implements IQueryHandler<GetEventByIdQuery>
{
  constructor(private readonly repository: IEventRepository) {}

  async execute(query: GetEventByIdQuery): Promise<Event> {
    const { id } = query;

    const event = await this.repository.get(id);

    if (!event) {
      throw new EntityNotFoundError(`Event not found`, id);
    }

    return event;
  }
}
