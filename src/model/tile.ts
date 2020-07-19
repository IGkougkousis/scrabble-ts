export class Tile {
  public score: number;
  public letter: string;

  constructor({ score, letter }: ConstructorArguments = {}) {
    this.score = score || -1;
    this.letter = letter || "?";
  }
}

interface ConstructorArguments {
  score?: number;
  letter?: string;
}
