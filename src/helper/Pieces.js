import { rookMoves } from "./Rook";
import { bishopMoves } from "./Bishop";
import knightMoves from "./Knight";
import queenMoves from "./Queen";
import { pawnMoves } from "./Pawn";
import { kingMoves } from './King';

const pieceMoves = {
  Bishop: bishopMoves,
  King: kingMoves,
  Knight: knightMoves,
  Pawn: pawnMoves,
  Queen: queenMoves,
  Rook: rookMoves,
}

export default pieceMoves