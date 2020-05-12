import { ITile } from "./tile";
import { Multiplier } from "../enums/multiplier";

export interface ISquare {
  row: number;
  col: number;
  multiplier: Multiplier;
  tile: ITile | null;
}
