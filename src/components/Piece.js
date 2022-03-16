import pieceMoves from "../helper/Pieces"
import { propTypes } from "react-bootstrap/esm/Image"

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

  function highlightSquare(moves, pos, color) {
    if (moves.includes(pos)) {
      console.log("yea")
    }
  }

  function clickFunctions(pos, color, board) {
    console.log(pos, color, board)
    props.setMoves(moveFunc(pos, color, board))
    props.setPiece(pos)
  }

  return (
    <div className={piece + " " + color} id={highlight} onClick={() => clickFunctions(props.position, color, props.boardState)}>
      {props.position + " " +  piece + " " + color }
    </div>
  )
}

export default Piece