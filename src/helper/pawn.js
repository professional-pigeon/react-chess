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
    if (board[(x + 1).toString() + (y - 1).toString()].includes("Black")) {
      moves.push((x + 1).toString() + (y - 1).toString());
    }
    if (board[(x + 1).toString() + (y + 1).toString()].includes("Black")) {
      moves.push((x + 1).toString() + (y + 1).toString());
    }
  } else {
    if (board[(x - 1).toString() + (y - 1).toString()].includes("White")) {
      moves.push((x - 1).toString() + (y - 1).toString());
    }
    if (board[(x - 1).toString() + (y + 1).toString()].includes("White")) {
      moves.push((x - 1).toString() + (y + 1).toString());
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
    if (lastMove[0][1] === (y - 1)) {
      if (board[left].includes('Pawn') && board[left].includes(color) === false) {
        if ((lastMove[0][0] - lastMove[1][0]) === 2) {
          moves.push((x + 1).toString() + (y - 1).toString());
        }
        if ((lastMove[0][0] - lastMove[1][0]) === -2) {
          moves.push((x - 1).toString() + (y - 1).toString());
        }
      }
    }
    if (lastMove[0][1] === (y + 1)) {
      if (board[right].includes('Pawn') && board[right].includes(color) === false) {
        if ((lastMove[0][0] - lastMove[1][0]) === 2) {
          moves.push((x + 1).toString() + (y + 1).toString());
        }
        if ((lastMove[0][0] - lastMove[1][0]) === -2) {
          moves.push((x - 1).toString() + (y + 1).toString());
        }
      }
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

export { pawnForward, pawnTakes, enPassant, switchPiece, pawnMoves }