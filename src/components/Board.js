import React from "react";

function Board() {

  let grid = []
  for (let i = 1; i < 9; i ++) {
    grid.push([])
    for (let j = 1; j < 9; j ++) {
      grid[i - 1].push(
        <div key={i.toString() + j.toString()} id="tile"><p>{i.toString() + j.toString()}</p></div>
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