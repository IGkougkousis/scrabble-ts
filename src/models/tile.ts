import { ITile } from "../interfaces/tile";
import { TileLocation } from "../enums/tilelocations";

export class Tile implements ITile {
  public readonly character: string;
  public readonly score: number;
  public location: TileLocation;

  constructor(character: string, score: number) {
    this.character = character;
    this.score = score;
    this.location = TileLocation.InBag;
  }
}
