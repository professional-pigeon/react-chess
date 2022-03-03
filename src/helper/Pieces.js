import { rookMoves } from "./Rook";
import { bishopMoves } from "./Bishop";
import knightMoves from "./Knight";
import queenMoves from "./Queen";
import { pawnMoves } from "./pawn";
function kingPlaceholder(str, thing, thing2) {
  console.log(str, thing, thing2)
  return str
}

const pieceMoves = {
  Bishop: bishopMoves,
  King: kingPlaceholder,
  Knight: knightMoves,
  Pawn: pawnMoves,
  Queen: queenMoves,
  Rook: rookMoves,
}

export default pieceMoves