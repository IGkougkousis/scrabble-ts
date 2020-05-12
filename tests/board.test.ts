import { Board } from "../src/models/board";

describe("Board", function () {
  it("should be 15x15", function () {
    let board = new Board();
    expect(board.squares.length).toBe(15 * 15);
    expect(board.squares.every((t) => t.row >= 0 && t.row < 15));
    expect(board.squares.every((t) => t.col >= 0 && t.col < 15));
  });
});
