import { IPlayer } from "../interfaces/player";

export class Player implements IPlayer {
  public readonly name: string;
  public score: number;

  constructor(name: string) {
    this.name = name;
    this.score = 0;
  }
}
