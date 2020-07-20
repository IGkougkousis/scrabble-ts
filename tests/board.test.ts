import { Board } from "../src/model/board";
import { PlaceCoordinates, Place } from "../src/model/place";

describe("Board", function () {
  it("should be created", function () {
    let board = new Board();
    expect(board).toBeTruthy();
  });

  it("should have 225 places", function () {
    let board = new Board();
    let size = board.getSize();
    expect(size).toBe(225);
  });

  it("should be able to get its places by coordinates", function () {
    let board = new Board();
    let coords: PlaceCoordinates = { x: 0, y: 0 };
    let place = board.getPlace(coords);
    expect(place).not.toBeNull();
    expect(place).toBeInstanceOf(Place);
  });

  it("should be able to print itself to console", function () {
    expect(function () {
      let board = new Board();
      board.print();
    }).not.toThrow();
  });
});
