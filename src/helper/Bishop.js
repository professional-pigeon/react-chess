function plusPlus(pos, color, board) {
  let coordinates = pos.split("");
  let x = Number(coordinates[0]);
  let y = Number(coordinates[1]);
  let moves = [];
  let high = x >= y ? x : y;
  for (let i = 1; high < 8; i++) {
    let tile = (x + i).toString() + (y + i).toString()
    if ((board[tile].includes("White") && color === "White") || (board[tile].includes("Black") && color === "Black")) {
      break;
    }
    if ((board[tile].includes("White") && color === "Black") || (board[tile].includes("Black") && color === "White")) {
      moves.push(tile);
      break;
    }
    moves.push(tile);
    high++ ;
  }
  return moves;
}

function minusMinus(pos, color, board) {
  let coordinates = pos.split("");
  let x = Number(coordinates[0]);
  let y = Number(coordinates[1]);
  let moves = [];
  let low = x <= y ? x : y;
  for (let i = 1; i < low; i++) {
    let tile = (x - i).toString() + (y - i).toString();
    if ((board[tile].includes("White") && color === "White") || (board[tile].includes("Black") && color === "Black")) {
      break;
    }
    if ((board[tile].includes("White") && color === "Black") || (board[tile].includes("Black") && color === "White")) {
      moves.push(tile);
      break;
    }
    moves.push(tile);
  }
  return moves;
}

function plusMinus(pos, color, board) {
  let coordinates = pos.split("");
  let x = Number(coordinates[0]);
  let y = Number(coordinates[1]);
  let moves = [];
  let loopN = (8 - x) <= (y -1) ? (8 - x) : (y -1);
  for(let i = 1; i <= loopN; i++) {
    let tile = (x + i).toString() + (y - i).toString();
    if (board[tile].includes(color)) {
      break;
    }
    if ((board[tile].includes("White") && color === "Black") || (board[tile].includes("Black") && color === "White")) {
      moves.push(tile);
      break;
    }
    moves.push(tile);
  }
  return moves;
}

function minusPlus(pos, color, board) {
  let coordinates = pos.split("");
  let x = Number(coordinates[0]);
  let y = Number(coordinates[1]);
  let moves = [];
  let loopN = (8 - y) >= (x - 1) ? (x - 1) : (8 - y);
  for (let i = 1; i <= loopN; i++) {
    let tile = (x - i).toString() + (y + i).toString();
    if (board[tile].includes(color)) {
      break;
    }
    if ((board[tile].includes("Black") && color === "White") || (board[tile].includes("White") && color === "Black")) {
      moves.push(tile);
      break;
    }
    moves.push(tile);
  }
  return moves;
}

function bishopMoves(pos, color, board) {
  let arr = [];
  arr.push(plusPlus(pos, color, board));
  arr.push(minusPlus(pos, color, board));
  arr.push(plusMinus(pos, color, board));
  arr.push(minusMinus(pos, color, board));
  return arr.flat();
}
export { bishopMoves, plusPlus, minusMinus, plusMinus, minusPlus }