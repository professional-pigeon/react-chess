import pieceMoves from "../helper/Pieces"
function Piece({ position, pieceType, boardState }) {
  let piece = ""
  let color = ""
  let moves = ""
  if (pieceType !== "empty") {
    let arr = pieceType.split(" ")
    piece = arr[0]
    color = arr[1]
    console.log(piece, color, "these are split")
    moves = pieceMoves[piece]
  }

  console.log(moves)

  return (
    <div id="tile" onClick={() => console.log(moves(position, color, boardState))}>
      {position + " " +  piece + " " + color}
    </div>
  )
}

export default Piece