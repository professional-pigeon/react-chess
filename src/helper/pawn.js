export function pawnMovesWhite(pos, tile) {
  let bool = false
  if (tile.piece === "empty" && (tile.position[0] - pos[0]) === 1) {
    bool = true
  }
  if ((tile.position[0] - pos[0]) === 2 && pos[0] === 2 && tile.piece === "empty") {
    bool = true
  }
  return bool
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