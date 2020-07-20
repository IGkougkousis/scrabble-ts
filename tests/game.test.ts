import { Game } from "../src/model/game";

describe("Game", function () {
  it("should be created", function () {
    let game = new Game();
    expect(game).toBeTruthy();
  });
});
