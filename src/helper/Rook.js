function rookRight(pos, color, board) {
  let coordinates = pos.split("")
  let moves = []
  for (let i = Number(coordinates[1]) + 1; i <= 8; i++) {
    let piece = board[coordinates[0].toString() + i.toString()]
    if (piece === "empty") {
      moves.push(coordinates[0].toString() + i.toString())
    }
    if (piece.includes("Black") && color === "White" || piece.includes("White") && color === "Black") {
      moves.push(coordinates[0].toString() + i.toString())
      break
    }
    if (piece.includes("White") && color === "White" || piece.includes("Black") && color === "Black") {
      break
    }
  }
  return moves
}

function rookLeft(pos, color, board) {
  let coordinates = pos.split("")
  let moves = []
  for (let i = Number(coordinates[1]) - 1; i >= 1; i--) {
    let piece = board[coordinates[0].toString() + i.toString()]
    if (piece === "empty") {
      moves.push(coordinates[0].toString() + i.toString())
    }
    if (piece.includes("Black") && color === "White" || piece.includes("White") && color === "Black") {
      moves.push(coordinates[0].toString() + i.toString())
      break
    }
    if (piece.includes("White") && color === "White" || piece.includes("Black") && color === "Black") {
      break
    }
  }
  return moves

}

function rookDown(pos, color, board) {
  let coordinates = pos.split("")
  let moves = []
  for (let i = Number(coordinates[0]) - 1; i >= 1; i--) {
    let piece = board[i.toString() + coordinates[1].toString()]
    if (piece === "empty") {
      moves.push(i.toString() + coordinates[1].toString())
    }
    if (piece.includes("Black") && color === "White" || piece.includes("White") && color === "Black") {
      moves.push(i.toString() + coordinates[1].toString())
      break
    }
    if (piece.includes("White") && color === "White" || piece.includes("Black") && color === "Black") {
      break
    }
  }
  return moves
}

function rookUp(pos, color, board) {
  let coordinates = pos.split("")
  let moves = []
  for (let i = Number(coordinates[0]) + 1; i <= 8; i++) {
    let piece = board[i.toString() + coordinates[1].toString()]
    if (piece === "empty") {
      moves.push(i.toString() + coordinates[1].toString())
    }
    if (piece.includes("Black") && color === "White" || piece.includes("White") && color === "Black") {
      moves.push(i.toString() + coordinates[1].toString())
      break
    }
    if (piece.includes("White") && color === "White" || piece.includes("Black") && color === "Black") {
      break
    }
  }
  return moves
}

function rookMoves(pos, color, board) {
  let arr = []
  arr.push(rookUp(pos, color, board))
  arr.push(rookLeft(pos, color, board))
  arr.push(rookRight(pos, color, board))
  arr.push(rookDown(pos, color, board))
  return arr.flat()
}

export {
  rookMoves,
  rookDown,
  rookLeft,
  rookRight,
  rookUp
}