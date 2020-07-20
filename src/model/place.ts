import { Tile } from "./tile";
import {
  word2xCoordinates,
  word3xCoordinates,
  letter2xCoordinates,
  letter3xCoordinates,
} from "../constants/multipliers";

export class Place {
  public readonly x: number;
  public readonly y: number;
  public readonly letterMultiplier: number;
  public readonly wordMultiplier: number;

  private tile: Tile | null;

  constructor({ x, y }: PlaceCoordinates) {
    if (this.coordinateOutOfBounds(x)) throw "x should be in [0,14]";
    if (this.coordinateOutOfBounds(y)) throw "y should be in [0,14]";

    this.x = x;
    this.y = y;
    this.letterMultiplier = this.getLetterMultiplier(x, y);
    this.wordMultiplier = this.getWordMultiplier(x, y);
    this.tile = null;
  }

  public setTile(tile: Tile): void {
    if (this.tile != null)
      throw "Cannot set new tile; place already has a tile";

    this.tile = tile;
  }

  public getTile(): Tile | null {
    return this.tile;
  }

  private coordinateOutOfBounds(num: number): boolean {
    return num < 0 || num > 14;
  }

  private getWordMultiplier(x: number, y: number): number {
    if (word2xCoordinates.some((c) => c.x === x && c.y === y)) return 2;
    if (word3xCoordinates.some((c) => c.x === x && c.y === y)) return 3;
    return 1;
  }

  private getLetterMultiplier(x: number, y: number): number {
    if (letter2xCoordinates.some((c) => c.x === x && c.y === y)) return 2;
    if (letter3xCoordinates.some((c) => c.x === x && c.y === y)) return 3;
    return 1;
  }
}

export interface PlaceCoordinates {
  x: number;
  y: number;
}
