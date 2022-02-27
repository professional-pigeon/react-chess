import { pawnMoves } from "../../src/helper/pawn";

describe('pawnMoves', () => {
  test('pawn can move one space forward', () => {
    expect(pawnMoves([0, 0], [1, 0])).toEqual(true)
  })

})