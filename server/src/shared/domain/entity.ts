export class DomainEntity {
  public id: number;

  constructor(id: number) {
    this.id = id;
  }

  public equals(entity: DomainEntity): boolean {
    return this.id === entity.id;
  }
}
