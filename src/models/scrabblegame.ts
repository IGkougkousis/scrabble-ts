import { IScrabbleGame } from "../interfaces/scrabblegame";
import { Board } from "./board";
import { Player } from "./player";
import { Tile } from "./tile";

import { characterScores } from "../constants/characterscores";

export class ScrabbleGame implements IScrabbleGame {
  public board: Board;
  public tiles: Array<Tile>;
  public player1: Player;
  public player2: Player;

  constructor() {
    this.player1 = new Player("Player 1");
    this.player2 = new Player("Player 2");
    this.board = new Board();
    this.initTiles();
  }

  private initTiles() {
    this.tiles = [];
    for (let cs of characterScores) {
      for (let i = 0; i < cs.count; i++) {
        this.tiles.push(new Tile(cs.character, cs.score));
      }
    }
  }
}
