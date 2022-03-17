import React, { useState, useEffect  } from "react";
import Piece from "./Piece";
import db from '../firebase';
import { async } from "@firebase/util";
import { v4 as uuidv4 } from 'uuid';

function Board({ games }) {
  const [moves, setMoves] = useState([]);
  const [chosenPiece, setPiece] = useState("empty");
  // useEffect(() => {
  //   fetchGames();
  // }, [])
  
  // async function fetchGames() {
  //   const response = db.collection('games');
  //   const data = await response.where('id', '==', 199).get()
  //   data.forEach((doc) => {
  //     let thing = (doc.id, '=>', doc.data())
  //     setGames(thing)
  //     console.log(thing)
  //   });
  // }
  console.log(games)

  let boardState = {
    11: "Rook White",
    12: "Knight White",
    13: "Bishop White",
    14: "Queen White",
    15: "King White",
    16: "Bishop White",
    17: "Knight White",
    18: "Rook White",
    21: "Pawn White",
    22: "Pawn White",
    23: "Pawn White",
    24: "Pawn White",
    25: "Pawn White",
    26: "Pawn White",
    27: "Pawn White",
    28: "Pawn White",
    31: "empty",
    32: "empty",
    33: "empty",
    34: "empty",
    35: "empty",
    36: "empty",
    37: "empty",
    38: "empty",
    41: "empty",
    42: "empty",
    43: "empty",
    44: "empty",
    45: "empty",
    46: "empty",
    47: "empty",
    48: "empty",
    51: "empty",
    52: "empty",
    53: "empty",
    54: "empty",
    55: "empty",
    56: "empty",
    57: "empty",
    58: "empty",
    61: "empty",
    62: "empty",
    63: "empty",
    64: "empty",
    65: "empty",
    66: "empty",
    67: "empty",
    68: "empty",
    71: "Pawn Black",
    72: "Pawn Black",
    73: "Pawn Black",
    74: "Pawn Black",
    75: "Pawn Black",
    76: "Pawn Black",
    77: "Pawn Black",
    78: "Pawn Black",
    81: "Rook Black",
    82: "Knight Black",
    83: "Bishop Black",
    84: "King Black",
    85: "Queen Black",
    86: "Bishop Black",
    87: "Knight Black",
    88: "Rook Black",
    moveHistory: []
  };

  
  let grid = [];

  // function moveTake(position, chosenPiece, boardState) {
  //   let movePiece = boardState[chosenPiece]
  //   boardState[position] = movePiece
  //   boardState[chosenPiece] = "empty"
  // }

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
        <div className="tile" id={highlight} key={boardKey}><Piece posMoves={moves} chosenPiece={chosenPiece} boardState={boardState} position={boardKey} pieceType={boardState[boardKey]} setMoves={setMoves} setPiece={setPiece}/></div>
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
    <div className="board">
      {print(grid)}
    </div>
  )
}

export default Board