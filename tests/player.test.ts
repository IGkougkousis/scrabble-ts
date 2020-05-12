import { Player } from "../src/models/player";

describe("Player", function () {
  it("score should be 0 after initial create", function () {
    let player = new Player("test");
    expect(player.score).toBe(0);
  });
});
