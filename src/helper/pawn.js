export function pawnMoves(pos, tile) {
  if (tile.piece != "empty") {
    return false
  }
  if(tile.position[0] - pos[0] > 1) {
    return false
  }
  return true
}

// a piece needs to know if a tile is empty, has a piece, color of the piece and size of the board