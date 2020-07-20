export class Place {
  public readonly x: number;
  public readonly y: number;
  public readonly letterMultiplier: number;
  public readonly wordMultiplier: number;

  constructor({ x, y }: PlaceOptions) {
    if (this.coordinateOutOfBounds(x)) throw "x should be in [0,14]";
    if (this.coordinateOutOfBounds(y)) throw "y should be in [0,14]";

    this.x = x;
    this.y = y;
    this.letterMultiplier = this.getLetterMultiplier(x, y);
    this.wordMultiplier = this.getWordMultiplier(x, y);
  }

  private coordinateOutOfBounds(num: number): boolean {
    return num < 0 || num > 14;
  }

  private getWordMultiplier(x: number, y: number): number {
    return 1;
  }

  private getLetterMultiplier(x: number, y: number): number {
    return 1;
  }
}

export interface PlaceOptions {
  x: number;
  y: number;
}
