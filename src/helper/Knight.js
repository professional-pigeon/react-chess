function knightMoves(pos, color, board) {
  let coordinates = pos.split('')
  let x = Number(coordinates[0])
  let y = Number(coordinates[1])
  let arr = []
  let posArr = [[2, -1], [2, 1], [-2, -1], [-2, 1], [1, 2], [-1, 2], [1, -2], [-1, -2]]
  posArr.forEach(function(coord) {
    let tile = (x + coord[0]).toString() + (y + coord[1]).toString()
    arr.push(tile)
  })
  // board[(x + 2).toString() + (y + 1).toString()]
  // board[(x + 2).toString() + (y - 1).toString()]
  // board[(x - 2).toString() + (y + 1).toString()]
  // board[(x - 2).toString() + (y - 1).toString()]
  // board[(x + 1).toString() + (y + 2).toString()]
  // board[(x - 1).toString() + (y + 2).toString()]
  // board[(x + 1).toString() + (y - 2).toString()]
  // board[(x - 1).toString() + (y - 2).toString()]
  console.log(arr)
  return arr
}

export { knightMoves }