export function pawnMovesWhite(pos, tile) {
  console.log(tile.position[0] - pos[0])
  if (tile.piece != "empty") {
    return false
  }
  if ((tile.position[0] - pos[0]) < 1 || (tile.position[0] - pos[0]) > 2) {
    console.log((tile.position[0] - pos[0]) == 1) //evals to true...
    return false
  }
  return true
}

const tileEmpty = {
  piece: "empty",
  position: [1, 0]
}

const tileEmptyTwo = {
  piece: "empty",
  position: [2, 0]
}

const tileBlocked = {
  piece: "piece",
  position: [1, 0]
}

const canTakeTile = {
  piece: "piece",
  position: [1, 1]
}