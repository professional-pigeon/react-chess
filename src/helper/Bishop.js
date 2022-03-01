const boardState = {
  11: "Bishop Black",
  12: "empty",
  13: "empty",
  14: "empty",
  15: "empty",
  16: "empty",
  17: "Bishop White",
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
  81: "Bishop White",
  82: "empty",
  83: "empty",
  84: "empty",
  85: "empty",
  86: "empty",
  87: "empty",
  88: "Bishop Black",
}

function bishopPosPos(pos, color, board) {
  let coordinates = pos.split("")
  let x = Number(coordinates[0])
  let y = Number(coordinates[1])
  let moves = []
  let high = x >= y ? x : y
  for (let i = 1; high < 8; i++) {
    let tile = (x + i).toString() + (y + i).toString()
    if (board[tile].includes("White") && color === "White" || board[tile].includes("Black") && color === "Black") {
      break
    }
    if (board[tile].includes("White") && color === "Black" || board[tile].includes("Black") && color === "White") {
      moves.push(tile)
      break
    }
    moves.push(tile)
    high++ 
  }
  return moves
}

function bishopMinMin(pos, color, board) {
  let coordinates = pos.split("")
  let x = Number(coordinates[0])
  let y = Number(coordinates[1])
  let moves = []
  let low = x <= y ? x : y
  for (let i = 1; i < low; i++) {
    let tile = (x - i).toString() + (y - i).toString()
    if (board[tile].includes("White") && color === "White" || board[tile].includes("Black") && color === "Black") {
      break
    }
    if (board[tile].includes("White") && color === "Black" || board[tile].includes("Black") && color === "White") {
      moves.push(tile)
      break
    }
    moves.push(tile)
  }
  return moves
}

function bishopPosMin(pos, color, board) {
  let coordinates = pos.split("")
  let x = Number(coordinates[0])
  let y = Number(coordinates[1])
  let moves = []
  let loopN = (8 - x) <= (y -1) ? (8 - x) : (y -1)
  for(let i = 1; i <= loopN; i++) {
    let tile = (x + i).toString() + (y - i).toString()
    if (board[tile].includes(color)) {
      break
    }
    if (board[tile].includes("White") && color === "Black" || board[tile].includes("Black") && color === "White") {
      moves.push(tile)
      break
    }
    moves.push(tile)
  }
  return moves
}

function bishopMinPos(pos, color, board) {
  let coordinates = pos.split("")
  let x = Number(coordinates[0])
  let y = Number(coordinates[1])
  let moves = []
  let loopN = (8 - y) >= (x - 1) ? (x - 1) : (8 - y)
  for (let i = 1; i <= loopN; i++) {
    let tile = (x - i).toString() + (y + i).toString()
    moves.push(tile)
  }
  return moves
}

export { bishopPosPos, bishopMinMin, bishopPosMin, bishopMinPos }