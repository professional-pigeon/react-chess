import { pawnMovesWhite } from "../../src/helper/pawn";

describe('pawnMoves', () => {
  const tileEmpty = {
    piece: "empty",
    position: [3, 0]
  }

  const tileEmptyTwo = {
    piece: "empty",
    position: [4, 0]
  }

  const tileBlocked = {
    piece: "piece",
    position: [3, 0]
  }

  const canTakeTile = {
    piece: "piece",
    position: [3, 1]
  }

  test('pawn can move one space forward if position is empty', () => {
    expect(pawnMovesWhite([2, 0], tileEmpty)).toEqual(true)
  })
  test('pawn will return false if it cannot move one space ahead', () => {
    expect(pawnMovesWhite([2, 0], tileEmpty)).toEqual(false)
  })
  test('pawn can move two spaces forward if position is empty and on starting position', () => {
    expect(pawnMovesWhite([2, 1], tileEmptyTwo)).toEqual(true)
  })

})