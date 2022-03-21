import pieceMoves from "../helper/Pieces";
import piecePortraits from "../helper/PiecePortraits"
import PropTypes from "prop-types";

function Piece(props) {
  let piece = ""
  let color = ""
  let moveFunc = undefined
  // changeData(chosenPiece, this.tile.movePos, board[chosenPiece], board)
  // pieceType = "yada color"

  if (props.pieceType !== "empty") {
    let arr = props.pieceType.split(" ");
    piece = arr[0];
    color = arr[1];
    moveFunc = pieceMoves[piece];
  }

  function clickFunctions(pos, color, board) {
    props.setMoves(moveFunc(pos, color, board))
    props.setPiece(pos)
  }
  if(props.posMoves.includes(props.position)) {
    console.log("i exist")
    return (
      <div className={piece + " " + color} id={"piece-size"} onClick={() => console.log("you clicked me")}>
        {piecePortraits[props.pieceType]}
      </div>
    )
  } else {
    return (
      <div className={piece + " " + color} id={"piece-size"} onClick={() => clickFunctions(props.position, color, props.boardState)}>
        {piecePortraits[props.pieceType]}
      </div>
    )
  }
}

Piece.propTypes = {
  pieceType: PropTypes.string,
  chosenPiece: PropTypes.string,
  posMoves: PropTypes.array,
  position: PropTypes.string,
  setMoves: PropTypes.func,
  setPiece: PropTypes.func,
  boardState: PropTypes.object,
  changeData: PropTypes.func
}

export default Piece