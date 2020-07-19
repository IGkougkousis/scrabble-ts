import { Board } from "../src/model/board";

describe("Board", function () {
  it("should be created", function () {
    let board = new Board();
    expect(board).toBeTruthy();
  });

  it("should have a collection of places", function () {
    let board = new Board();
    expect(board.places).not.toBeNull();
    expect(board.places.length).not.toBeNull();
  });

  it("should have 225 places", function () {
    let board = new Board();
    expect(board.places.length).toBe(225);
  });
});
