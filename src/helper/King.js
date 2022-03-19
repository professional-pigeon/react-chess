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

const knightKey = {
  1: [2, -1],
  2: [2, 1],
  3: [-2, -1],
  4: [-2, 1],
  5: [1, -2],
  6: [-1, 2],
  7: [1, -2],
  8: [-1, -2]
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

function kingCheckDiagonals(moves, color, board) {
  let cuts = []
  moves.forEach(function(move) {
    let coordinates = move.split("")
    let x = Number(coordinates[0]);
    let y = Number(coordinates[1]);
    for (let i = 1; i < 8; i++) {
      let tile = (x + i).toString() + (y + i).toString()
      if (board[tile] !== 'empty' && board[tile] !== undefined) {
        if (board[tile].includes('Bishop') || board[tile].includes('Queen')) {
          if (board[tile].includes(color) === false) {
            cuts.push(move)
            break
          }
        } else {
          break
        }
      }
    }
    for (let i = 1; i < 8; i++) {
      let tile2 = (x - i).toString() + (y + i).toString()
      if (board[tile2] !== 'empty' && board[tile2] !== undefined) {
        if (board[tile2].includes('Bishop') || board[tile2].includes('Queen')) {
          if (board[tile2].includes(color) === false) {
            cuts.push(move)
            break
          }
        } else {
          break
        }
      }
    }
    for (let i = 1; i < 8; i++) {
      let tile3 = (x - i).toString() + (y - i).toString()
      if (board[tile3] !== 'empty' && board[tile3] !== undefined) {
        if (board[tile3].includes('Bishop') || board[tile3].includes('Queen')) {
          if (board[tile3].includes(color) === false) {
            cuts.push(move)
            break
          }
        } else {
          break
        }
      }
    }
    for (let i = 1; i < 8; i++) {
      let tile4 = (x + i).toString() + (y - i).toString()
      if (board[tile4] !== 'empty' && board[tile4] !== undefined) {
        if (board[tile4].includes('Bishop') || board[tile4].includes('Queen')) {
          if (board[tile4].includes(color) === false) {
            cuts.push(move)
            break
          }
        } else {
          break
        }
      }
    }
  })
  let filteredMoves = moves.filter(function(move, index) {
    if(cuts.includes(move) === false) {
      return move
    }
  })
  return filteredMoves
}

function kingCheckOrthogonal(moves, color, board) {
  let cuts = [];
  moves.forEach(function(move) {
    let coordinates = move.split("")
    let x = Number(coordinates[0])
    let y = Number(coordinates[1])
    for (let i = 1; i <= 8; i++) {
      let tile = (x + i).toString() + y.toString()
      if (board[tile] !== "empty" && board[tile] !== undefined) {
        if (board[tile].includes("Rook") || board[tile].includes('Queen')) {
          if(board[tile].includes(color) === false) {
            cuts.push(move)
            break
          }
        } else {
          break
        }
      }
    }
    for (let i = 1; i <= 8; i++) {
      let tile = (x - i).toString() + y.toString()
      if (board[tile] !== "empty" && board[tile] !== undefined) {
        if (board[tile].includes("Rook") || board[tile].includes('Queen'))  {
          if (board[tile].includes(color) === false) {
            cuts.push(move)
            break
          } 
        } else {
          break
        }
      }
    }
    for (let i = 1; i <= 8; i++) {
      let tile = x.toString() + (y + i).toString()
      if (board[tile] !== "empty" && board[tile] !== undefined) {
        if (board[tile].includes("Rook") || board[tile].includes("Queen")) {
          if (board[tile].includes(color) === false) {
            cuts.push(move)
            break
          } 
        } else {
          break
        }
      }
    }
    for (let i = 1; i <= 8; i++) {
      let tile = x.toString() + (y - i).toString()
      if (board[tile] !== "empty" && board[tile] !== undefined) {
        if (board[tile].includes("Rook") || board[tile].includes('Queen')) {
          if (board[tile].includes(color) === false) {
            cuts.push(move)
            break
          } 
        } else {
          break
        }
      }
    }
  })
  let filteredMoves = moves.filter(function(move, index) {
    if(cuts.includes(move) === false) {
      return move
    }
  })
  return filteredMoves
}

function kingCheckKnight(moves, color, board) {
  let cuts = [];
  moves.forEach(function(move) {
    let coordinates = move.split("")
    let x = Number(coordinates[0])
    let y = Number(coordinates[1])
    for (let i = 1; i <= 8; i++) {
      let tile = (x + knightKey[i][0]).toString() + (y + knightKey[i][1]).toString()
      if (board[tile] !== "empty" && board[tile] !== undefined) {
        if (board[tile].includes("Knight") && board[tile].includes(color) === false) {
          cuts.push(move)
          break
        }
      }
    }
  })
  let filteredMoves = moves.filter(function(move, index) {
    if(cuts.includes(move) === false) {
      return move
    }
  })
  return filteredMoves
}

function kingCheckPawn(moves, color, board) {
  let cuts = [];
  moves.forEach(function(move) {
    let coordinates = move.split("")
    let x = Number(coordinates[0])
    let y = Number(coordinates[1])
    if (color === "White") {
      let left = (x + 1).toString() + (y - 1).toString()
      let right = (x + 1).toString() + (y + 1).toString()
      if (board[left] !== undefined) { 
        if (board[left].includes("Pawn")) {
          if (board[left].includes(color) === false) {
            cuts.push(move)
          }
        } 
      }
      if (board[right] !== undefined) {
        if (board[right].includes("Pawn")) {
          if (board[right].includes(color) === false) {
            cuts.push(move)
          }
        }
      }
    }
    if (color === "Black") {
      let left2 = (x - 1).toString() + (y - 1).toString()
      let right2 = (x - 1).toString() + (y + 1).toString()
      if (board[left2] !== undefined || board[right2] !== undefined) {
        if (board[left2].includes("Pawn") || board[right2].includes("Pawn")) {
          if (board[left2].includes(color) === false || board[right2].includes(color === false)) {
            cuts.push(move)
          }
        } 
      }
    }
  })
  let filteredMoves = moves.filter(function(move, index) {
    if(cuts.includes(move) === false) {
      return move
    }
  })
  return filteredMoves
}

function kingMoves(moves, color, board) {
  return "nothing"
}

export {
  kingOne,
  kingCheckDiagonals,
  kingCheckOrthogonal,
  kingCheckKnight,
  kingCheckPawn,
  kingMoves
}