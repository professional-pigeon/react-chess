What needs to be stored in the database?

Game state: {
  id: gameID
  whitePlayer: userId
  blackPLayer: userId
  boardState: {all positions}
  // or maybe that can just be piece positions? but I think everything is set to read empty spaces right now.
  moveHistory: [{piece: "", move: [[][]]}, {}]
  check: (should check when you make the move, but if you put your opponent in check should tell you on your opponent on their turn)
}

it'll know turn based on the length of the movehistory

