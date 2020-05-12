import { ISquare } from "../interfaces/square";
import { Tile } from "./tile";
import { Multiplier } from "../enums/multiplier";
import { multiplierLocations as mlocs } from "../constants/multiplierlocations";

export class Square implements ISquare {
  public readonly row: number;
  public readonly col: number;
  public multiplier: Multiplier;
  public tile: Tile | null;

  constructor(row: number, col: number, tile: Tile | null) {
    this.row = row;
    this.col = col;
    this.tile = tile;
    this.multiplier = this.calcMultiplier(row, col);
  }

  private calcMultiplier(row: number, col: number): Multiplier {
    const multipliers = [
      Multiplier.Letter2x.toString(),
      Multiplier.Letter3x.toString(),
      Multiplier.Word2x.toString(),
      Multiplier.Word3x.toString(),
    ];
    // TO BE CONTINUED
    return Multiplier.Normal;
  }
}
