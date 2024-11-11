import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { CqrsModule } from '@nestjs/cqrs';
import { EventResolver } from './gql/resolvers';
import { GetEventByIdQueryHandler } from './application/query/get-event-by-id.handler';
import { InMemoryEventRepository } from './infrastructure/repository';
import { IEventRepository } from './domain/repository.interface';


@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
        driver: ApolloDriver,
        autoSchemaFile: true, // In-memory schema generation
        playground: true,     // Enable Playground for testing
      }),
    CqrsModule
  ],
  providers: [
    EventResolver,
    GetEventByIdQueryHandler,
    {
      provide: IEventRepository,
      useClass: InMemoryEventRepository,
    },
  ],
  exports: [IEventRepository],
})
export class EventModule {}
