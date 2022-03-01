function Piece({ position, pieceType, color }) {

  return (
    <div>
      {position + " " +  pieceType + " " + color}
    </div>
  )

}

export default Piece