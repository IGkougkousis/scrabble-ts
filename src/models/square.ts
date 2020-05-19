import { ISquare } from "../interfaces/square";
import { Tile } from "./tile";
import { Multiplier } from "../enums/multiplier";

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
    if (
      ([0, 7, 14].includes(row) && col == 0) ||
      ([0, 7, 14].includes(col) && row == 0) ||
      ([0, 7, 14].includes(row) && col == 14) ||
      ([0, 7, 14].includes(col) && row == 14)
    )
      return Multiplier.Word3x;

    return Multiplier.Normal;
  }
}
