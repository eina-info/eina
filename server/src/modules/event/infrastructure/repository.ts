import { IEventRepository } from '../domain/repository.interface';
import { Event } from '../domain/entity';
import { InMemoryRepository } from '../../../shared/infrastructure/in-memory.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class InMemoryEventRepository
  extends InMemoryRepository<Event>
  implements IEventRepository
{
  entities: Event[] = [
    new Event(1, 'Event 1', 'Description 1'),
    new Event(2, 'Event 2', 'Description 2'),
    new Event(3, 'Event 3', 'Description 3'),
    new Event(4, 'Event 4', 'Description 4'),
  ];
}
