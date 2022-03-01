import pieceMoves from "../helper/Pieces"
function Piece({ position, pieceType, boardState, posMoves, setMoves, setPiece, chosenPiece }) {
  let piece = ""
  let color = ""
  let moveFunc = ""
  let highlight = ""
  if (pieceType !== "empty") {
    let arr = pieceType.split(" ")
    piece = arr[0]
    color = arr[1]
    moveFunc = pieceMoves[piece]
  }
  if (posMoves.includes(position) && pieceType !== "empty") {
    highlight = "takes"
  } else if (posMoves.includes(position)) {
    highlight = "highlight"
  } else {
  }
  if(chosenPiece === position) {
    highlight = "chosen"
  }

  return (
    <div className="tile" id={highlight} onClick={() => (setMoves(moveFunc(position, color, boardState)), setPiece(position))}>
      {position + " " +  piece + " " + color}
    </div>
  )
}

export default Piece