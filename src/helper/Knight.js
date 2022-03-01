function knightMoves(pos, color, board) {
  let coordinates = pos.split('')
  let x = Number(coordinates[0])
  let y = Number(coordinates[1])
  let arr = []
  let posArr = [[2, -1], [2, 1], [-2, -1], [-2, 1], [1, 2], [-1, 2], [1, -2], [-1, -2]]
  posArr.forEach(function(coord) {
    let tile = (x + coord[0]).toString() + (y + coord[1]).toString()
    if (board[tile] !== undefined) {
      if (board[tile].includes(color) === false) {
        arr.push(tile)
      }
    }
  })
  console.log(arr)
  return arr
}

export { knightMoves }