import React from "react";

function Board() {

  let grid = []
  for (let i = 1; i < 9; i ++) {
    grid.push([])
    for (let j = 1; j < 9; j ++) {
      grid[i - 1].push([i, j])
    }
  }
  
  console.log(grid)
  return (
    <div>
      <p>Board to go here</p>
    </div>
  )
}

export default Board