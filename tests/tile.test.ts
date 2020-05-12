import { Tile } from "../src/models/tile";
import { characterScores } from "../src/constants/characterscores";

describe("Tile", function () {
  for (let cs of characterScores) {
    let tile = new Tile(cs.character, cs.score);
    it(`${cs.character} should have a score of ${cs.score} `, function () {
      expect(tile.character).toBe(cs.character);
      expect(tile.score).toBe(cs.score);
    });
  }
});
