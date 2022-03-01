function plusPlus(pos, color, board) {
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

function minusMinus(pos, color, board) {
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

function plusMinus(pos, color, board) {
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

function minusPlus(pos, color, board) {
  let coordinates = pos.split("")
  let x = Number(coordinates[0])
  let y = Number(coordinates[1])
  let moves = []
  let loopN = (8 - y) >= (x - 1) ? (x - 1) : (8 - y)
  for (let i = 1; i <= loopN; i++) {
    let tile = (x - i).toString() + (y + i).toString()
    if (board[tile].includes(color)) {
      break
    }
    if (board[tile].includes("Black") && color === "White" || board[tile].includes("White") && color === "Black") {
      moves.push(tile)
      break
    }
    moves.push(tile)
  }
  return moves
}

function right(pos, color, board) {
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

function left(pos, color, board) {
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

function down(pos, color, board) {
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

function up(pos, color, board) {
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

function queenMoves(pos, color, board) {
  let arr = []
  arr.push(up(pos, color, board))
  arr.push(down(pos, color, board))
  arr.push(right(pos, color, board))
  arr.push(left(pos, color, board))
  arr.push(plusPlus(pos, color, board))
  arr.push(minusPlus(pos, color, board))
  arr.push(minusMinus(pos, color, board))
  arr.push(plusMinus(pos, color, board))
  return arr.flat()
}

export default queenMoves