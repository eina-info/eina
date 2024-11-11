import { Event } from './entity';

export abstract class IEventRepository {
  abstract get(id: number): Promise<Event>;
}
