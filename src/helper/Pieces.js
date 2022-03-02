import { rookMoves } from "./Rook";
import { bishopMoves } from "./Bishop";
import knightMoves from "./Knight";
import queenMoves from "./Queen";

const pieceMoves = {
  Bishop: bishopMoves,
  Knight: knightMoves,
  Queen: queenMoves,
  Rook: rookMoves,
}

export default pieceMoves