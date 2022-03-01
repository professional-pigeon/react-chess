import pieceMoves from "../helper/Pieces"
function Piece({ position, pieceType, boardState }) {
  let moves = pieceMoves.Rook
  console.log(moves("44", "White", boardState))
  return (
    <div>
      {position + " " +  pieceType + " " + color}
    </div>
  )

}

export default Piece