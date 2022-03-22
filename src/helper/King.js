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
      if (board[left2] !== undefined) {
        if (board[left2].includes("Pawn")) {
          if (board[left2].includes(color) === false) {
            cuts.push(move)
          }
        } 
      }
      if (board[right2] !== undefined) {
        if (board[right2].includes("Pawn")) {
          if (board[right2].includes(color) === false) {
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

function kingCheckKing(moves, color, board) {
  let cuts = []
  moves.forEach(function(move) {
    let coordinates = move.split("")
    let x = Number(coordinates[0])
    let y = Number(coordinates[1])
    for (let i = 1; i <= 8; i++) {
      let checkX = x + key[i][0]
      let checkY = y + key[i][1]
      if (board[checkX.toString() + checkY.toString()] !== undefined) {
        if (board[checkX.toString() + checkY.toString()].includes('King') && board[checkX.toString() + checkY.toString()].includes(color) === false) {
        cuts.push(move)
      
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

function kingCastle(position, color, board) {
  // Should tell you if king has moved: board.moveHistory.forEach((obj) => { if obj.piece includes (King Color) break})
  // should tell you if rook has moved: if board.moveHistory.forEach(obj) => { if obj.piece includes (Rook Color) && obj.move.includes(start position of rook your checking)}
  // needs to check every other tile in between to see if it is under attack by another piece... so like all these king check functions.
  // then returns the moves of both King and the Rook
  return "nothing"
}

function hasKingMoved(position, color, board) {
  let bool = false
  if (color === "White" && position === "15") {
    bool = true
    board.moveHistory.forEach((data) => {
      if (data.piece.includes("King White")) {
        bool = false
      }
    })
  }
  if (color === "Black" && position === "84") {
    bool = true
    board.moveHistory.forEach((data) => {
      if (data.piece.includes("King Black")) {
        bool = false
      }
    })
  }
  if (bool === true) {
    board.moveHistory
  }
  return bool
}

function hasRookMoved(position, color, board) {
  let bool = ""
  if (color === "White") {
    if (position === "11") {
      bool = true
    }
    if (position === "18") {
      bool = true
    }
  }
  if (color === "Black") {
    if (position === "81") {
      bool = true
    }
    if (position === "88") {
      bool = true
    }
  }
  return bool
}

function castle(position, color, board) {
  let bool = hasKingMoved(position, color, board)
  let rookMoved = false
  if (bool && color === "White") {
    rookMoved = hasRookMoved("11", "White", board)
    rookMoved = hasRookMoved("18", "White", board)
  }
  if (bool && color === "Black") {
    rookMoved = hasRookMoved("81", "Black", board)
    rookMoved = hasRookMoved("88", "Black", board)
  }
  return ""
}

function kingMoves(position, color, board) {
  let moves = kingOne(position, color, board)
  if (moves.length > 0) {
    moves = kingCheckDiagonals(moves, color, board)
  }
  if (moves.length > 0) {
    moves = kingCheckOrthogonal(moves, color, board)
  }
  if (moves.length > 0) {
    moves = kingCheckKnight(moves, color, board)
  }
  if (moves.length > 0) {
    moves = kingCheckPawn(moves, color, board)
  }
  if (moves.length > 0) {
    moves = kingCheckKing(moves, color, board)
  }
  return moves
}

export {
  kingOne,
  hasKingMoved,
  hasRookMoved,
  castle,
  kingCastle,
  kingCheckDiagonals,
  kingCheckOrthogonal,
  kingCheckKnight,
  kingCheckPawn,
  kingCheckKing,
  kingMoves
}