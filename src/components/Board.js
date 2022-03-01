import React from "react";
import Piece from "./Piece"

function Board() {
  const boardState = {
    11: "empty",
    12: "empty",
    13: "empty",
    14: "empty",
    15: "empty",
    16: "empty",
    17: "empty",
    18: "empty",
    21: "empty",
    22: "empty",
    23: "empty",
    24: "empty",
    25: "empty",
    26: "empty",
    27: "empty",
    28: "empty",
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
    71: "empty",
    72: "empty",
    73: "empty",
    74: "empty",
    75: "empty",
    76: "empty",
    77: "empty",
    78: "empty",
    81: "empty",
    82: "empty",
    83: "empty",
    84: "empty",
    85: "empty",
    86: "empty",
    87: "empty",
    88: "empty",
  }


  let grid = []
  for (let i = 1; i < 9; i ++) {
    grid.push([])
    for (let j = 1; j < 9; j ++) {
      let boardKey = i.toString() + j.toString()
      console.log(boardKey, boardState[boardKey])
      grid[i - 1].push(
        <div key={boardKey} id={boardKey}><Piece position={i.toString() + j.toString()} pieceType={boardState[boardKey]} color="unknown" /></div>
      )
    }
  }

  function print(grid) {
    let retArr = []
    grid.forEach(function(arr, key) {
    retArr.push(<div key={key} className="boardRow">{arr}</div>)
    })
    return retArr
  }
  
  console.log(grid)
  return (
    <div>
      {print(grid)}
    </div>
  )
}

export default Board