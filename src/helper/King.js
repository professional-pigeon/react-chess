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
  let bool = hasKingMoved(position, color, board)
  let passingCastleRooks = []
  if (bool === false) {
    let rooks = rooksToCheck(color, board)
    let unmovedRooks = hasRookMoved(rooks, color, board)
    unmovedRooks.forEach((rook) => {
      if (castleTileCheck(rook, color, board)) {
        passingCastleRooks.push(rook)
      }
    })
  }
  return passingCastleRooks
}

function hasKingMoved(position, color, board) {
  let bool = false
  if (color === "White" && position === "15") {
    board.moveHistory.forEach((data) => {
      if (data.piece.includes("King White")) {
        bool = true
      }
    })
  }
  if (color === "Black" && position === "84") {
    board.moveHistory.forEach((data) => {
      if (data.piece.includes("King Black")) {
        bool = true
      }
    })
  }
  if (position !== "15" && color === "White") {
    console.log("I think it's getting here")
    bool = true
  }
  if (position !== "84" && color === "Black") {
    console.log("I think it's getting here")
    bool = true
  }
  return bool
}

function hasRookMoved(positions, color, board) {
  let acceptableRooks = []
  positions.forEach((position) => {
    if (color === "White") {
      let bool = true
      if (position === "11") {
        board.moveHistory.forEach((info) => {
          if (info.move.includes("11")) {
            bool = false
          }
        })
        if (bool) {
          acceptableRooks.push("11")
        }
      }
      if (position === "18") {
        board.moveHistory.forEach((info) => {
          if (info.move.includes("18")) {
            bool = false
          }
        })
        if (bool) {
          acceptableRooks.push("18")
        }
      }
    }
    if (color === "Black") {
      let bool = true
      if (position === "81") {
        board.moveHistory.forEach((info) => {
          if (info.move.includes("81")) {
            bool = false
          }
        })
        if (bool) {
          acceptableRooks.push("81")
        }
      }
      if (position === "88") {
        board.moveHistory.forEach((info) => {
          if (info.move.includes("88")) {
            bool = false
          }
        })
        if (bool) {
          acceptableRooks.push("88")
        }
      }
    }
  })
  return acceptableRooks

}

function rooksToCheck(color, board) {
  let validRooks = []
  if (color === "White") {
    if (board["14"] === 'empty' && board["13"] === 'empty' && board["12"] === 'empty') {
      if (board["11"] === "Rook White") {
        validRooks.push("11")
      }
    }
    if (board["16"] === 'empty' && board["17"] === 'empty') {
      if (board["18"] === "Rook White")
      validRooks.push("18")
    }
  }
  if (color === "Black") {
    if (board["82"] === 'empty' && board["83"] === 'empty') {
      if (board["81"] === "Rook Black") {
        validRooks.push("81")
      }
    }
    if (board["85"] === 'empty' && board["86"] === 'empty' && board["87"] === 'empty') {
      if (board["88"] === "Rook Black") {
        validRooks.push("88")
      }
    }
  }
  return validRooks
}

function castleTileCheck(position, color, board) {
  let bool = false
  let coordinates = position.split("")
  let y = position[0]
  let moves = []
  if (color === "White") {
    if (y < 5) {
      moves = ["12", "13", "14"]
      let check = tileCheckerKingMoves(moves, "White", board)
      if (moves.length === check.length) {
        bool = true
      }
    }
    if (y > 5) {
      moves = ["16", "17"]
      let check = tileCheckerKingMoves(moves, "White", board)
      if (moves.length === check.length) {
        bool = true
      }
    }
  }
  if (color === "Black") {
    if (y < 5) {
      moves = ["82", "83", "84"]
      let check = tileCheckerKingMoves(moves, "Black", board)
      if (moves.length === check.length) {
        bool = true
      }
    }
    if (y > 5) {
      moves = ["86", "87"]
      let check = tileCheckerKingMoves(moves, "Black", board)
      if (moves.length === check.length) {
        bool = true
      }
    }
  }
  return bool
}

function castle(position, color, board) {
  let bool = hasKingMoved(position, color, board)
  let rookMoved = false
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

function tileCheckerKingMoves(tiles, color, board) {
  let moves = tiles
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
  rooksToCheck,
  castle,
  castleTileCheck,
  kingCastle,
  kingCheckDiagonals,
  kingCheckOrthogonal,
  kingCheckKnight,
  kingCheckPawn,
  kingCheckKing,
  kingMoves
}