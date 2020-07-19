import { Tile } from "../src/model/tile";

describe("Tile", function () {
  it("must be created with an empty constructor", function () {
    const tile = new Tile();
    expect(tile).toBeTruthy();
  });

  it("must have the score that is provided to its constructor", function () {
    const example = 10;
    const tile = new Tile({ score: example });
    expect(tile.score).toBe(example);
  });

  it("must have the letter that is provided to its constructor", function () {
    const example = "p";
    const tile = new Tile({ letter: example });
    expect(tile.letter).toBe(example);
  });
});
