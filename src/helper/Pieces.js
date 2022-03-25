import { rookMoves } from "./Rook";
import { bishopMoves } from "./Bishop";
import knightMoves from "./Knight";
import queenMoves from "./Queen";
import { pawnMoves } from "./Pawn";
import { castleReturn, kingMoves } from './King';

const pieceMoves = {
  Bishop: bishopMoves,
  King: kingMoves,
  Knight: knightMoves,
  Pawn: pawnMoves,
  Queen: queenMoves,
  Rook: rookMoves,
  Castle: castleReturn
}

export default pieceMoves