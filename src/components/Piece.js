import pieceMoves from "../helper/Pieces";
import piecePortraits from "../helper/PiecePortraits"
import PropTypes from "prop-types";

function Piece(props) {
  let piece = ""
  let color = ""
  let moveFunc = undefined
  let highlight = ""

  if (props.pieceType !== "empty") {
    let arr = props.pieceType.split(" ");
    piece = arr[0];
    color = arr[1];
    moveFunc = pieceMoves[piece];
  }

  function clickFunctions(pos, color, board) {
    console.log(pos, color, board)
    props.setMoves(moveFunc(pos, color, board))
    props.setPiece(pos)
  }

  return (
    <div className={piece + " " + color} id={"piece-size"} onClick={() => clickFunctions(props.position, color, props.boardState)}>
      {piecePortraits[props.pieceType]}
    </div>
  )
}

Piece.propTypes = {
  pieceType: PropTypes.string,
  chosenPiece: PropTypes.string,
  posMoves: PropTypes.array,
  position: PropTypes.string,
  setMoves: PropTypes.func,
  setPiece: PropTypes.func,
  boardState: PropTypes.object,
}

export default Piece