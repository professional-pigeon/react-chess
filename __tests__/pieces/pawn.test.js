import { pawnForward, pawnTakes, enPassant, switchPiece, pawnMoves } from "../../src/helper/pawn";

describe("pawnForward", () => {
  test('pawnForward will return the space ahead of it if it is empty and can be moved into', () => {
    expect(pawnForward('51', 'White', board)).toEqual(['61'])
  })
})