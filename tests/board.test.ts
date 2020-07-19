import { Board } from "../src/model/board";

describe("Board", function () {
  it("should compile", function () {
    let board = new Board();
    expect(board).toBeTruthy();
  });
});
