export class Place {
  public readonly x: number;
  public readonly y: number;

  constructor({ x, y }: PlaceOptions) {
    if (coordinateOutOfBounds(x)) throw "x should be in [0,14]";
    if (coordinateOutOfBounds(y)) throw "y should be in [0,14]";

    this.x = x;
    this.y = y;
  }
}

export interface PlaceOptions {
  x: number;
  y: number;
}

function coordinateOutOfBounds(num: number): boolean {
  return num < 0 || num > 14;
}
