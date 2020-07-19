export class Tile {
  public readonly score: number;
  public readonly letter: string;

  constructor({ score, letter }: TileOptions) {
    if (score < 0 || score > 10)
      throw "Score must be between 0 and 10 (inclusive)";

    this.score = score;
    this.letter = letter;
  }
}

export interface TileOptions {
  score: number;
  letter: string;
}
