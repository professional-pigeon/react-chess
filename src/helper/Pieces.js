import { rookMoves } from "./Rook";
import { bishopMoves } from "./Bishop";
import knightMoves from "./Knight";

const pieceMoves = {
  Bishop: bishopMoves,
  Knight: knightMoves,
  Rook: rookMoves,
}

export default pieceMoves