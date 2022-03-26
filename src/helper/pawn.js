function pawnForward(pos, color, board) {
  let coordinates = pos.split("");
  let x = Number(coordinates[0]);
  let moves = [];
  if (color === "White") {
    if (board[(x + 1).toString() + coordinates[1]] === "empty") {
      moves.push((x + 1).toString() + coordinates[1]);
      if(x === 2 && board[(x + 2).toString() + coordinates[1]] === "empty") {
        moves.push((x + 2).toString() + coordinates[1]);
      }
    }
  } else {
    if (board[(x - 1).toString() + coordinates[1]] === "empty") {
      moves.push((x - 1).toString() + coordinates[1]);
      if(x === 7 && board[(x - 2).toString() + coordinates[1]] === "empty") {
        moves.push((x - 2).toString() + coordinates[1]);
      }
    }
  }
  return moves;
}

function pawnTakes(pos, color, board) {
  let coordinates = pos.split("");
  let x = Number(coordinates[0]);
  let y = Number(coordinates[1]);
  let moves = [];
  if (color === "White") {
    if ((y + 1) <= 8 && (y - 1) >= 1) {
      if (board[(x + 1).toString() + (y - 1).toString()].includes("Black")) {
        moves.push((x + 1).toString() + (y - 1).toString());
      }
      if (board[(x + 1).toString() + (y + 1).toString()].includes("Black")) {
        moves.push((x + 1).toString() + (y + 1).toString());
      }
    }
  } else {
    if ((y + 1) <= 8 && (y - 1) >= 1) {
      if (board[(x - 1).toString() + (y - 1).toString()].includes("White")) {
        moves.push((x - 1).toString() + (y - 1).toString());
      }
      if (board[(x - 1).toString() + (y + 1).toString()].includes("White")) {
        moves.push((x - 1).toString() + (y + 1).toString());
      }
    }
  }
  return moves;
}

function enPassant(pos, color, board) {
  let coordinates = pos.split("");
  let x = Number(coordinates[0]);
  let y = Number(coordinates[1]);
  let moves = [];
  let left = coordinates[0] + (y - 1).toString();
  let right = coordinates[0] + (y + 1).toString();
  if (board.moveHistory.length > 0) {
    let lastMove = board.moveHistory[board.moveHistory.length -1].move;
    let newPos = lastMove[0].split("")
    let newX = Number(newPos[0])
    let newY = Number(newPos[1])
    let prevPos = lastMove[1].split("")
    let prevX = Number(prevPos[0])
    if (newY === (y - 1)) {
      if (board[left].includes('Pawn') && board[left].includes(color) === false) {
        if ((newX - prevX) === -2) {
          moves.push("Enpassant " + (x + 1).toString() + (y - 1).toString());
        }
        if ((newX - prevX) === 2) { 
          moves.push("Enpassant " + (x - 1).toString() + (y - 1).toString());
        }
      }
    }
    if (newY === (y + 1)) {
      if (board[right].includes('Pawn') && board[right].includes(color) === false) {
        if ((newX - prevX) === -2) {
          moves.push("Enpassant " + (x + 1).toString() + (y + 1).toString());
        }
        if ((newX - prevX) === 2) {
          //works on board
          moves.push("Enpassant " + (x - 1).toString() + (y + 1).toString());
        }
      } // 4 - 2 === 2 and one other direction 5 - 7 === -2
    }
  }
  return moves;
}

function switchPiece(pos, color, board, newPiece) {
  board[pos] = newPiece + " " + color;
  return 
}

function pawnMoves(pos, color, board) {
  let arr = [];
  arr.push(pawnForward(pos, color, board));
  arr.push(pawnTakes(pos, color, board));
  arr.push(enPassant(pos, color, board));
  return arr.flat()
}

function enPassantTranslator(pos, color) {
  let coordinates = pos.split("")
  let x = Number(coordinates[0])
  if (color === "White") {
    let space = (x + 1).toString() + coordinates[1]
    return {piece: "empty", tile: space}
  }
  if (color === "Black") {
    let space = (x - 1).toString() + coordinates[1]
    return {piece: "empty", tile: space}
  }  
}

export { pawnForward, pawnTakes, enPassant, enPassantTranslator, switchPiece, pawnMoves }