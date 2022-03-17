import { bishopMoves } from './Bishop'

const key = {
  1: [1, -1],
  2: [1, 0],
  3: [1, 1],
  4: [0, -1],
  5: [0, 1],
  6: [-1, -1],
  7: [-1, 0],
  8:  [-1, 1]
}

function kingOne(pos, color, board) {
  let moves = []
  let coordinates = pos.split("")
  let x = Number(coordinates[0])
  let y = Number(coordinates[1])
  for (let i = 1; i <= 8; i++) {
    let checkX = x + key[i][0]
    let checkY = y + key[i][1]
    if (board[checkX.toString() + checkY.toString()] === "empty") {
      moves.push(checkX.toString() + checkY.toString())
    }
    if (board[checkX.toString() + checkY.toString()] !== undefined) {
      if (color === 'Black' && (board[checkX.toString() + checkY.toString()].includes('White'))) {
        moves.push(checkX.toString() + checkY.toString())
      }
      if (color === 'White' && (board[checkX.toString() + checkY.toString()].includes('Black'))) {
        moves.push(checkX.toString() + checkY.toString())
      }
    }
  }
  return moves
}

function kingCheckBishop(moves, color, board) {
  moves.each(function(move) {
    bishopMoves(move, '')
  })
  return moves
}

function kingMoves() {
  return "not working"
}

export {
  kingOne,
  kingCheckBishop,
  kingMoves
}