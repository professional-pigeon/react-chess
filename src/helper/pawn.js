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
      if(x === 7 && board[(x - 2).toString() + coordinates[1]] === "empty") {
        moves.push((x - 2).toString() + coordinates[1])
      }
    }
  }
  return moves
}

function pawnTakes(pos, color, board) {
  let coordinates = pos.split("")
  let x = Number(coordinates[0])
  let y = Number(coordinates[1])
  let moves = []
  if (color === "White") {
    if (board[(x + 1).toString() + (y - 1).toString()].includes("Black")) {
      moves.push((x + 1).toString() + (y - 1).toString())
    }
    if (board[(x + 1).toString() + (y + 1).toString()].includes("Black")) {
      moves.push((x + 1).toString() + (y + 1).toString())
    }
  } else {
    if (board[(x - 1).toString() + (y - 1).toString()].includes("White")) {
      moves.push((x - 1).toString() + (y - 1).toString())
    }
    if (board[(x - 1).toString() + (y + 1).toString()].includes("White")) {
      moves.push((x - 1).toString() + (y + 1).toString())
    }
  }
  return moves
}

function enPassant(pos, color, board) {
  // only if opposing pawn has moved two spaces in the last turn"
  // will need move history
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