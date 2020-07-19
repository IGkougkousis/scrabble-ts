import { Tile, TileOptions } from "../src/model/tile";

describe("Tile", function () {
  it("must correctly assign constructor parameters to class properties", function () {
    const options: TileOptions = { score: 10, letter: "A" };
    const tile = new Tile(options);
    expect(tile.score).toBe(options.score);
    expect(tile.letter).toBe(options.letter);
  });

  it("must throw error if score isn't between 0 and 10 (inclusive)", function () {
    expect(function () {
      const options: TileOptions = { score: 8, letter: "B" };
      const tile = new Tile(options);
    }).not.toThrow();

    expect(function () {
      const options: TileOptions = { score: 12, letter: "T" };
      const tile = new Tile(options);
    }).toThrow();

    expect(function () {
      const options: TileOptions = { score: -4, letter: "T" };
      const tile = new Tile(options);
    }).toThrow();
  });
});
