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
});
