import { Player } from "../src/model/player";

describe("Player", function () {
  it("should be created", function () {
    let player = new Player({ name: "Peter" });
    expect(player).toBeTruthy();
  });

  it("should receive a name when it is created", function () {
    let player = new Player({ name: "Harry" });
    expect(player.name).toBe("Harry");
  });
});
