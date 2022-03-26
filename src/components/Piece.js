import pieceMoves from "../helper/Pieces";
import piecePortraits from "../helper/PiecePortraits";
import PropTypes from "prop-types";

function Piece(props) {
  let moves = props.moves
  let boardKey = props.position
  let piece = ""
  let color = ""
  let moveFunc = undefined
  let highlight = 'none'

  if (moves.length > 0) {
    if (moves.includes(boardKey) && props.boardState[boardKey] !== "empty") {
      highlight = "takes";
    } else if (moves.includes(boardKey) || moves.includes("Castle " + boardKey) || moves.includes("Enpassant " + boardKey)) {
      highlight = "highlight";
    } else if (props.chosenPiece === boardKey) {
      highlight = "chosen";
    } else {
    }
  }

  if (props.pieceType !== "empty") {
    let arr = props.pieceType.split(" ");
    piece = arr[0];
    color = arr[1];
    moveFunc = pieceMoves[piece];
  }

  function clickFunctionsSet(pos, color, board) {
    if (props.turn === color) {
    props.setMoves(moveFunc(pos, color, board))
    props.setPiece(pos)
    }
  }

  function clickFunctionsChange(init, newPos, board) {
    // somewhere in here or in change data you need to check for enPassant 
    props.changeData(init, newPos, board[init], board)
    props.setMoves([])
    props.setPiece("empty")
  }

  function clickFunctionsCastle(init, rook, board) {
    let data = pieceMoves.Castle([rook])
    props.doubleCall([init, rook], [data.king, data.rook], [board[init], board[rook]], board)
    props.setMoves([])
    props.setPiece("empty")
  }

  if(props.moves.includes(props.position)) {
    return (
      <div className="tile" id={highlight} onClick={() => clickFunctionsChange(props.chosenPiece, boardKey, props.boardState)}>
        <div className={piece + " " + color} id={"piece-size"}>
          {piecePortraits[props.pieceType]}
        </div>
      </div>
    )
  } else if (props.moves.includes("Castle " + boardKey)) {
    return (
      <div className="tile" id={highlight} onClick={() => clickFunctionsCastle(props.chosenPiece, boardKey, props.boardState)}>
        <div className={piece + " " + color} id={"piece-size"}>
          {piecePortraits[props.pieceType]}
        </div>
      </div>
    )
  } else {
    return (
      <div className="tile" id={highlight} key={boardKey}>
        <div className={piece + " " + color} id={"piece-size"} onClick={() => clickFunctionsSet(props.position, color, props.boardState)}>
          {piecePortraits[props.pieceType]}
        </div>
      </div>
    )
  }
}

Piece.propTypes = {
  pieceType: PropTypes.string,
  chosenPiece: PropTypes.string,
  moves: PropTypes.array,
  position: PropTypes.string,
  setMoves: PropTypes.func,
  setPiece: PropTypes.func,
  boardState: PropTypes.object,
  changeData: PropTypes.func
}

export default Piece