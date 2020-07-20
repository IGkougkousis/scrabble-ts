import { Place, PlaceCoordinates } from "../src/model/place";
import { Tile } from "../src/model/tile";

describe("Place", function () {
  it("should be created", function () {
    let place = new Place({ x: 0, y: 0 });
    expect(place).toBeTruthy();
  });

  it("should have an x property in [0,14]", function () {
    expect(function () {
      let place = new Place({ x: -2, y: 12 });
    }).toThrow();

    expect(function () {
      let place = new Place({ x: 18, y: 11 });
    }).toThrow();
  });

  it("should have a y property in [0,14]", function () {
    expect(function () {
      let place = new Place({ x: 5, y: -3 });
    }).toThrow();

    expect(function () {
      let place = new Place({ x: 8, y: 15 });
    }).toThrow();
  });

  it("should have a letter multiplier", function () {
    let place = new Place({ x: 0, y: 0 });
    expect(place.letterMultiplier).not.toBeNull();
  });

  it("should have a word multiplier", function () {
    let place = new Place({ x: 0, y: 0 });
    expect(place.wordMultiplier).not.toBeNull();
  });

  it("'s letter multiplier must be 1, 2 or 3", function () {
    let place = new Place({ x: 0, y: 0 });
    expect(place.letterMultiplier).toBeGreaterThanOrEqual(1);
    expect(place.letterMultiplier).toBeLessThanOrEqual(3);
  });

  it("'s word multiplier must be 1, 2 or 3", function () {
    let place = new Place({ x: 0, y: 0 });
    expect(place.wordMultiplier).toBeGreaterThanOrEqual(1);
    expect(place.wordMultiplier).toBeLessThanOrEqual(3);
  });

  it("should have a null tile when it's first created", function () {
    let place = new Place({ x: 0, y: 0 });
    expect(place.getTile()).toBeNull();
  });

  it("should be possible to put a tile on a place", function () {
    let place = new Place({ x: 0, y: 0 });
    let tile = new Tile({ letter: "A", score: 1 });

    place.setTile(tile);
    let placedTile = place.getTile();
    expect(placedTile).toBeInstanceOf(Tile);
    expect(placedTile).toMatchObject(tile);
  });

  it("should throw if you try to put a tile on a place if the place already has a tile on it", function () {
    expect(function () {
      let place = new Place({ x: 0, y: 0 });
      let tile1 = new Tile({ letter: "T", score: 2 });
      let tile2 = new Tile({ letter: "A", score: 1 });

      place.setTile(tile1);
      place.setTile(tile2);
    }).toThrow();
  });

  it("should correctly set word multiplier based on coordinates", function () {
    const word2xCoordinates: PlaceCoordinates[] = [
      { x: 1, y: 1 },
      { x: 2, y: 2 },
      { x: 3, y: 3 },
      { x: 4, y: 4 },
      { x: 7, y: 7 },
      { x: 10, y: 10 },
      { x: 11, y: 11 },
      { x: 12, y: 12 },
      { x: 13, y: 13 },
      { x: 1, y: 13 },
      { x: 2, y: 12 },
      { x: 3, y: 11 },
      { x: 4, y: 10 },
      { x: 10, y: 4 },
      { x: 11, y: 3 },
      { x: 12, y: 2 },
      { x: 13, y: 1 },
    ];

    const word3xCoordinates: PlaceCoordinates[] = [
      { x: 0, y: 0 },
      { x: 7, y: 0 },
      { x: 14, y: 0 },
      { x: 0, y: 7 },
      { x: 14, y: 7 },
      { x: 0, y: 14 },
      { x: 7, y: 14 },
      { x: 14, y: 14 },
    ];

    for (let i = 0; i < 15; i++) {
      for (let j = 0; j < 15; j++) {
        let options: PlaceCoordinates = { x: i, y: j };
        let is2xWord = word2xCoordinates.some(
          (c) => c.x === options.x && c.y === options.y
        );
        let is3xWord = word3xCoordinates.some(
          (c) => c.x === options.x && c.y === options.y
        );

        let place = new Place(options);

        if (is2xWord) {
          expect(place.wordMultiplier).toBe(2);
        } else if (is3xWord) {
          expect(place.wordMultiplier).toBe(3);
        } else {
          expect(place.wordMultiplier).toBe(1);
        }
      }
    }
  });

  it("should correctly set letter multiplier based on coordinates", function () {
    const letter2xCoordinates: PlaceCoordinates[] = [
      { x: 3, y: 0 },
      { x: 11, y: 0 },
      { x: 6, y: 2 },
      { x: 8, y: 2 },
      { x: 0, y: 3 },
      { x: 7, y: 3 },
      { x: 14, y: 3 },
      { x: 2, y: 6 },
      { x: 6, y: 6 },
      { x: 8, y: 6 },
      { x: 12, y: 6 },
      { x: 3, y: 7 },
      { x: 11, y: 7 },
      { x: 2, y: 8 },
      { x: 6, y: 8 },
      { x: 8, y: 8 },
      { x: 12, y: 8 },
      { x: 0, y: 10 },
      { x: 7, y: 10 },
      { x: 14, y: 10 },
      { x: 6, y: 12 },
      { x: 8, y: 12 },
      { x: 3, y: 14 },
      { x: 11, y: 14 },
    ];

    const letter3xCoordinates: PlaceCoordinates[] = [
      { x: 5, y: 1 },
      { x: 9, y: 1 },
      { x: 1, y: 5 },
      { x: 5, y: 5 },
      { x: 9, y: 5 },
      { x: 13, y: 5 },
      { x: 1, y: 9 },
      { x: 5, y: 9 },
      { x: 9, y: 9 },
      { x: 13, y: 9 },
      { x: 5, y: 13 },
      { x: 9, y: 13 },
    ];

    for (let i = 0; i < 15; i++) {
      for (let j = 0; j < 15; j++) {
        let options: PlaceCoordinates = { x: i, y: j };
        let is2xLetter = letter2xCoordinates.some(
          (c) => c.x === options.x && c.y === options.y
        );
        let is3xLetter = letter3xCoordinates.some(
          (c) => c.x === options.x && c.y === options.y
        );

        let place = new Place(options);

        if (is2xLetter) {
          expect(place.letterMultiplier).toBe(2);
        } else if (is3xLetter) {
          expect(place.letterMultiplier).toBe(3);
        } else {
          expect(place.letterMultiplier).toBe(1);
        }
      }
    }
  });
});
