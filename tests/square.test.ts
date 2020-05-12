import { Square } from "../src/models/square";
import { Multiplier } from "../src/enums/multiplier";
import { multiplierLocations as mlocs } from "../src/constants/multiplierlocations";
import { ScrabbleGame } from "../src/models/scrabblegame";

describe("Square", function () {
  let game = new ScrabbleGame();
  it("should have correct multiplier", function () {
    for (let col = 0; col < 15; col++) {
      for (let row = 0; row < 15; row++) {
        const sq = game.board.getSquare(row, col);
        if (mlocs["2L"].some((ml) => ml.row === row && ml.col === col)) {
          expect(sq.multiplier).toBe(Multiplier.Letter2x);
        } else if (mlocs["3L"].some((ml) => ml.row === row && ml.col === col)) {
          expect(sq.multiplier).toBe(Multiplier.Letter3x);
        } else if (mlocs["2W"].some((ml) => ml.row === row && ml.col === col)) {
          expect(sq.multiplier).toBe(Multiplier.Word2x);
        } else if (mlocs["3W"].some((ml) => ml.row === row && ml.col === col)) {
          expect(sq.multiplier).toBe(Multiplier.Word3x);
        } else {
          expect(sq.multiplier).toBe(Multiplier.Normal);
        }
      }
    }
  });
});
