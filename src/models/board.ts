import { IBoard } from "../interfaces/board";
import { Square } from "./square";
import { Multiplier } from "../enums/multiplier";

export class Board implements IBoard {
  public squares: Array<Square>;

  constructor() {
    this.initSquares();
    //this.print();
  }

  public getSquare(row: number, col: number): Square {
    let sq = this.squares.find((s) => s.row === row && s.col === col);
    if (sq === null || sq === undefined)
      throw `Square not found for row ${row} and col ${col}`;

    return sq;
  }

  private initSquares() {
    this.squares = [];
    for (let col = 0; col < 15; col++) {
      for (let row = 0; row < 15; row++) {
        this.squares.push(new Square(row, col, null));
      }
    }
  }

  private print(): void {
    let text = [];
    for (let col = 0; col < 15; col++) {
      for (let row = 0; row < 15; row++) {
        let sq = this.getSquare(row, col);
        text.push(sq.multiplier.toString() + "\t");
      }
      text.push("\n");
    }
    console.log(text.join(""));
  }
}
