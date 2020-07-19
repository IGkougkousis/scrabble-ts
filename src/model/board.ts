import { Place } from "./place";

export class Board {
  public readonly places: Place[];

  constructor() {
    this.places = [];
    this.initliazePlaces();
  }

  private initliazePlaces() {
    for (let i = 0; i < 15; i++)
      for (let j = 0; j < 15; j++) {
        let place = new Place({ x: i, y: j });
        this.places.push(place);
      }
  }
}
