import { Place } from "../src/model/place";

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
});
