const boardState = {
  11: "Rook White",
  12: "empty",
  13: "empty",
  14: "empty",
  15: "empty",
  16: "empty",
  17: "Rook White",
  18: "empty",
  21: "empty",
  22: "empty",
  23: "empty",
  24: "empty",
  25: "empty",
  26: "empty",
  27: "empty",
  28: "empty",
  31: "empty",
  32: "empty",
  33: "empty",
  34: "empty",
  35: "empty",
  36: "empty",
  37: "empty",
  38: "empty",
  41: "empty",
  42: "empty",
  43: "empty",
  44: "empty",
  45: "empty",
  46: "empty",
  47: "empty",
  48: "empty",
  51: "empty",
  52: "empty",
  53: "empty",
  54: "empty",
  55: "empty",
  56: "empty",
  57: "empty",
  58: "empty",
  61: "empty",
  62: "empty",
  63: "empty",
  64: "empty",
  65: "empty",
  66: "empty",
  67: "empty",
  68: "empty",
  71: "empty",
  72: "empty",
  73: "empty",
  74: "empty",
  75: "empty",
  76: "empty",
  77: "empty",
  78: "empty",
  81: "Pawn White",
  82: "empty",
  83: "empty",
  84: "empty",
  85: "empty",
  86: "empty",
  87: "empty",
  88: "empty",
}

function rookWhiteRight(pos, color, board) {
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

function rookWhiteLeft(pos, color, board) {
  let coordinates = pos.split("")
  let moves = []
  for (let i = Number(coordinates[1]) - 1; i >= 1; i--) {
    console.log(i)
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

function rookWhiteDown(pos, color, board) {
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

function rookWhiteUp(pos, color, board) {
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
  arr.push(rookWhitelUp(pos, color, board))
  arr.push(rookWhiteLeft(pos, color, board))
  arr.push(rookWhiteRight(pos, color, board))
  arr.push(rookWhiteDown(pos, color, board))
  return arr
}