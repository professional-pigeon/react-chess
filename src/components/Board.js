import React, { useState, useEffect  } from "react";
import Piece from "./Piece";
import db from '../firebase';
import { v4 as uuidv4 } from 'uuid';

function Board({ board, changeData }) {
  const [moves, setMoves] = useState([]);
  const [chosenPiece, setPiece] = useState("empty");
  let boardState = board
  console.log(chosenPiece, moves)

  let grid = [];
  for (let i = 1; i < 9; i ++) {
    grid.push([]);
    for (let j = 1; j < 9; j ++) {
      let boardKey = i.toString() + j.toString()
      let highlight = 'none'
      if (moves.includes(boardKey) && boardState[boardKey] !== "empty") {
        highlight = "takes";
      } else if (moves.includes(boardKey)) {
        highlight = "highlight";
      } else if (chosenPiece === boardKey) {
        highlight = "chosen";
      } else {
      }
      grid[i - 1].push(
        <div className="tile" id={highlight} key={boardKey}><Piece changeData={changeData} posMoves={moves} chosenPiece={chosenPiece} boardState={boardState} position={boardKey} pieceType={boardState[boardKey]} setMoves={setMoves} setPiece={setPiece} /></div>
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