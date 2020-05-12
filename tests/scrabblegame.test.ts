import { ScrabbleGame } from "../src/models/scrabblegame";
import { characterScores } from "../src/constants/characterscores";

describe("ScrabbleGame", function () {
  let game = new ScrabbleGame();
  it("should have 100 tiles", function () {
    expect(game.tiles.length).toBe(100);
  });

  for (let cs of characterScores) {
    it(`should have ${cs.count} '${cs.character}' tiles`, function () {
      expect(
        game.tiles.filter((t) => t.character === cs.character).length
      ).toBe(cs.count);
    });
  }
});
