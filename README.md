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