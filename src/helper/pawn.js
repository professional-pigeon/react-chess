export function pawnMovesWhite(pos, tile) {
  let bool = false
  let shiftRow = tile.position[0] - pos[0]
  let shiftLeft = tile.position[1] - pos[1]
  if (tile.piece === "empty" && shiftRow === 1) {
    bool = true
  }
  if (shiftRow === 2 && pos[0] === 2 && tile.piece === "empty") {
    bool = true
  }
  if (shiftRow === 1 && tile.piece != "empty" && shiftLeft === 1) {
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