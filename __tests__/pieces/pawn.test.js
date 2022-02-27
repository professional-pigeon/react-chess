import { pawnMovesWhite } from "../../src/helper/pawn";

describe('pawnMoves', () => {
  const tileEmpty = {
    piece: "empty",
    position: [1, 0]
  }

  const tileEmptyTwo = {
    piece: "empty",
    position: [2, 0]
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
    expect(pawnMovesWhite([0, 0], tileEmpty)).toEqual(true)
  })
  test('pawn can move two spaces forward if position is empty and on starting position', () => {
    expect(pawnMovesWhite([0, 0], tileEmptyTwo)).toEqual(true)
  })

})