import React, { useState, useEffect  } from "react";
import Piece from "./Piece";

function Board({ board, changeData, doubleCall }) {
  const [moves, setMoves] = useState(["enPassant"]);
  const [chosenPiece, setPiece] = useState("empty");

  let boardState = board
  let grid = [];
  let turn = ""
  if ((board.moveHistory.length + 2) % 2 === 0) {
    turn = "White"
  } else {
    turn = "Black"
  }
  for (let i = 1; i < 9; i ++) {
    grid.push([]);
    for (let j = 1; j < 9; j ++) {
      let boardKey = i.toString() + j.toString()
      grid[i - 1].push(
        <Piece key={boardKey} doubleCall={doubleCall} turn={turn} changeData={changeData} moves={moves} chosenPiece={chosenPiece} boardState={boardState} position={boardKey} pieceType={boardState[boardKey]} setMoves={setMoves} setPiece={setPiece} />
      )
    }
  }

  function print(grid) {
    let retArr = [];
    grid.forEach(function(arr, key) {
      retArr.push(<div key={key} className="boardRow">{arr}</div>);
    });
    return retArr
  }

  
  return (
    <div className="board-white">
      {print(grid)}
    </div>
  )
}

export default Board

// if a pawn is on the 8th square change it's piece