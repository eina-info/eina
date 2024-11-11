import { Resolver, Query, Args } from '@nestjs/graphql';
import { QueryBus } from '@nestjs/cqrs';
import { GetEventByIdQuery } from '../application/query/get-event-by-id.query';
import { Event } from '../domain/entity';

@Resolver(() => Event)
export class EventResolver {
  constructor(private readonly queryBus: QueryBus) {}

  @Query(() => Event, { nullable: true })
  async eventById(@Args('id') id: number): Promise<Event> {
    try {
      const query = new GetEventByIdQuery(id);
      const event = await this.queryBus.execute(query);
      return event;
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }
}
