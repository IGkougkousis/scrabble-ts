export class Player {
  public readonly name: string;
  constructor({ name }: PlayerOptions) {
    this.name = name;
  }
}

export interface PlayerOptions {
  name: string;
}
