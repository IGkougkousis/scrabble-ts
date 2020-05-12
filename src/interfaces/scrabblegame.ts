import { IBoard } from "./board";
import { IPlayer } from "./player";
import { ITile } from "./tile";

export interface IScrabbleGame {
  board: IBoard;
  tiles: Array<ITile>;
  player1: IPlayer;
  player2: IPlayer;
}
