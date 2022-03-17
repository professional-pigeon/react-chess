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

Non state things to do:

Make board look more like a chess board
add piece shapes to board
css cleanup and style choices

ADD DATA: 
const aTuringRef = db.collection('users').doc('aturing');

await aTuringRef.set({
  'first': 'Alan',
  'middle': 'Mathison',
  'last': 'Turing',
  'born': 1912
});

READ DATA

const snapshot = await db.collection('users').get();
snapshot.forEach((doc) => {
  console.log(doc.id, '=>', doc.data());
});

BLANK BOARD

  // let boardState = {
  //   11: "Rook White",
  //   12: "Knight White",
  //   13: "Bishop White",
  //   14: "Queen White",
  //   15: "King White",
  //   16: "Bishop White",
  //   17: "Knight White",
  //   18: "Rook White",
  //   21: "Pawn White",
  //   22: "Pawn White",
  //   23: "Pawn White",
  //   24: "Pawn White",
  //   25: "Pawn White",
  //   26: "Pawn White",
  //   27: "Pawn White",
  //   28: "Pawn White",
  //   31: "empty",
  //   32: "empty",
  //   33: "empty",
  //   34: "empty",
  //   35: "empty",
  //   36: "empty",
  //   37: "empty",
  //   38: "empty",
  //   41: "empty",
  //   42: "empty",
  //   43: "empty",
  //   44: "empty",
  //   45: "empty",
  //   46: "empty",
  //   47: "empty",
  //   48: "empty",
  //   51: "empty",
  //   52: "empty",
  //   53: "empty",
  //   54: "empty",
  //   55: "empty",
  //   56: "empty",
  //   57: "empty",
  //   58: "empty",
  //   61: "empty",
  //   62: "empty",
  //   63: "empty",
  //   64: "empty",
  //   65: "empty",
  //   66: "empty",
  //   67: "empty",
  //   68: "empty",
  //   71: "Pawn Black",
  //   72: "Pawn Black",
  //   73: "Pawn Black",
  //   74: "Pawn Black",
  //   75: "Pawn Black",
  //   76: "Pawn Black",
  //   77: "Pawn Black",
  //   78: "Pawn Black",
  //   81: "Rook Black",
  //   82: "Knight Black",
  //   83: "Bishop Black",
  //   84: "King Black",
  //   85: "Queen Black",
  //   86: "Bishop Black",
  //   87: "Knight Black",
  //   88: "Rook Black",
  //   moveHistory: []
  // };