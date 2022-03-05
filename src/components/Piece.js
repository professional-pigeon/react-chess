import pieceMoves from "../helper/Pieces"
function Piece({ position, pieceType, boardState, posMoves, setMoves, setPiece, chosenPiece }) {
  let piece = ""
  let color = ""
  let moveFunc = undefined
  let highlight = ""

  if (pieceType !== "empty") {
    let arr = pieceType.split(" ");
    piece = arr[0];
    color = arr[1];
    moveFunc = pieceMoves[piece];
  }


  return (
    <div className={piece + " " + color} id={highlight} onClick={() => (setMoves(moveFunc(position, color, boardState)), setPiece(position))}>
      {position + " " +  piece + " " + color}
    </div>
  )
}

export default Piece