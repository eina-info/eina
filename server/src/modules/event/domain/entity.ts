import { Field, ObjectType } from '@nestjs/graphql';
import { DomainEntity } from '../../../shared/domain/entity';

@ObjectType()
export class Event extends DomainEntity {
  @Field()
  public name: string;

  @Field<String>({ nullable: true })
  public description?: string;

  constructor(id: number, name: string, description: string | undefined) {
    super(id);
    this.name = name;
    this.description = description;
  }
}
