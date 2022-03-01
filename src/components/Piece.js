import pieceMoves from "../helper/Pieces"
function Piece({ position, pieceType, boardState, posMoves, setMoves, setPiece }) {
  let piece = ""
  let color = ""
  let moveFunc = ""
  let highlight = ""
  if (pieceType !== "empty") {
    let arr = pieceType.split(" ")
    piece = arr[0]
    color = arr[1]
    console.log(piece, color, "these are split")
    moveFunc = pieceMoves[piece]
  }
  if (posMoves.includes(position)) {
  highlight = "highlight"
  }

  function bigClick(position, color, board) {
    setMoves(moveFunc(position, color, boardState))
  }

  return (
    <div className="tile" id={highlight} onClick={() => setMoves(moveFunc(position, color, boardState))}>
      {position + " " +  piece + " " + color}
    </div>
  )
}

export default Piece