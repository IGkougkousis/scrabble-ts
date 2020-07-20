import { Place, PlaceCoordinates } from "./place";

export class Board {
  private readonly places: Place[];

  constructor() {
    this.places = [];
    for (let i = 0; i < 15; i++)
      for (let j = 0; j < 15; j++) {
        let place = new Place({ x: i, y: j });
        this.places.push(place);
      }
  }

  public print(): void {
    let text: string[] = [];
    for (let y = 0; y < 15; y++) {
      for (let x = 0; x < 15; x++) {
        let place = this.getPlace({ x: x, y: y });
        if (place.wordMultiplier === 3) text.push("3W");
        if (place.wordMultiplier === 2) text.push("2W");
        if (place.letterMultiplier === 3) text.push("3L");
        if (place.letterMultiplier === 2) text.push("2L");
        if (place.letterMultiplier === 1 && place.wordMultiplier === 1)
          text.push("--");
        text.push("  ");
      }
      text.push("\n");
    }
    console.log(text.join(""));
  }

  public getSize(): number {
    return this.places.length;
  }

  public getPlace({ x, y }: PlaceCoordinates): Place {
    let place = this.places.find((p) => p.x === x && p.y === y);
    if (place == null)
      throw `Cannot find place with specified coordinates: x = ${x}, y = ${y}`;

    return place;
  }
}
