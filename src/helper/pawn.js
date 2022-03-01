function pawnForward(pos, color, board) {
  let coordinates = pos.split("")
  let x = Number(coordinates[0])
  let moves = []
  if (color === "White") {
    if (board[(x + 1).toString() + coordinates[1]] === "empty") {
      moves.push((x + 1).toString() + coordinates[1])
      if(x === 2 && board[(x + 2).toString() + coordinates[1]] === "empty") {
        moves.push((x + 2).toString() + coordinates[1])
      }
    }
  } else {
    if (board[(x - 1).toString() + coordinates[1]] === "empty") {
      moves.push((x - 1).toString() + coordinates[1])
    }
  }
  return moves
}

function pawnTakes(pos, color, board) {
  let moves = []
  return moves
}

function enPassant(pos, color, board) {
  let moves = []
  return moves
}

function switchPiece(pos, color, board) {
  let thing = ""
  return thing
}

function pawnMoves(pos, color, board) {
  let arr = []
  return arr
}

export { pawnForward, pawnTakes, enPassant, switchPiece, pawnMoves }