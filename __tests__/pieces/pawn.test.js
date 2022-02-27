import { pawnMoves } from "../../src/helper/pawn";

describe('pawnMoves', () => {
  const tileEmpty = {
    piece: "empty",
    position: [1, 0]
  }

  const tileBlocked = {
    piece: "piece",
    position: [1, 0]
  }

  const canTakeTile = {
    piece: "piece",
    position: [1, 1]
  }

  test('pawn can move one space forward if position is empty', () => {

    expect(pawnMoves([0, 0], tile)).toEqual(true)
  })

})