import { bishopMinPos, bishopMinMin, bishopPosPos, bishopPosMin } from "../../src/helper/Bishop"

const boardState = {
  11: "Bishop Black",
  12: "empty",
  13: "empty",
  14: "empty",
  15: "empty",
  16: "empty",
  17: "Bishop White",
  18: "empty",
  21: "empty",
  22: "empty",
  23: "empty",
  24: "empty",
  25: "empty",
  26: "empty",
  27: "empty",
  28: "empty",
  31: "empty",
  32: "empty",
  33: "empty",
  34: "empty",
  35: "empty",
  36: "empty",
  37: "empty",
  38: "empty",
  41: "empty",
  42: "empty",
  43: "empty",
  44: "empty",
  45: "empty",
  46: "empty",
  47: "empty",
  48: "empty",
  51: "empty",
  52: "empty",
  53: "empty",
  54: "empty",
  55: "empty",
  56: "Bishop Black",
  57: "empty",
  58: "empty",
  61: "empty",
  62: "empty",
  63: "empty",
  64: "empty",
  65: "empty",
  66: "empty",
  67: "empty",
  68: "empty",
  71: "empty",
  72: "empty",
  73: "empty",
  74: "empty",
  75: "empty",
  76: "empty",
  77: "empty",
  78: "empty",
  81: "Bishop White",
  82: "empty",
  83: "empty",
  84: "empty",
  85: "empty",
  86: "empty",
  87: "empty",
  88: "Bishop Black",
}

describe('bishopPosPos', () => {
  test('bishopPosPos should move in through rows and columns as long as the space is empty', () => {
    expect(bishopPosPos("16", "Black", boardState)).toEqual(["27", "38"])
  })

  test('bishopPosPos should stop at a piece of the same color', () => {
    expect(bishopPosPos("55", "Black", boardState)).toEqual(["66", "77"])
  })

  test('bishopPosPos should stop after a piece of the opposing color', () => {
    expect(bishopPosPos("34", "White", boardState)).toEqual(["45", "56"])
  })

  test('bishopPosPos should return an empty array if already at an 8th positiong in col', () => {
    expect(bishopPosPos("18", "White", boardState)).toEqual([])
  })

  test('bishopPosPos should return an empty array if already at an 8th positiong in row', () => {
    expect(bishopPosPos("81", "White", boardState)).toEqual([])
  })
})

describe('bishopMinMin', () => {
  test('bishopMinMin should return all empty spaces while moving in a (-, -) direction', () => {
    expect(bishopMinMin("37", "Black", boardState)).toEqual(["26", "15"])
  })

  test('bishopMinMin should stop when it encounters a piece of the same color', () => {
    expect(bishopMinMin("78", "Black", boardState)).toEqual(["67"])
  })

  test('bishopMinMin should stop after it encounters a piece of an opposing color', () => {
    expect(bishopMinMin("78", "White", boardState)).toEqual(["67", "56"])
  })

  test('bishopMinMin should return an empty array if the starting row is already at the lowest value', () => {
    expect(bishopMinMin("18", "Black", boardState)).toEqual([])
  })

  test('bishopMinMin should return an empty array if the starting row is already at the lowest value', () => {
    expect(bishopMinMin("81", "Black", boardState)).toEqual([])
  })
})

describe('bishopPosMin', () => {
  test('bishopPosMin should return empty positions in a (+, -) direction', () => {
    expect(bishopPosMin("55", "White", boardState)).toEqual(["64", "73", "82"])
  })

  test('bishopPosMin should stop when encountering a piece of the same color', () => {
    expect(bishopPosMin("38", "Black", boardState)).toEqual(["47"])
  })

  test('bishopPosMin should stop after encountering a piece of the opposing color', () => {
    expect(bishopPosMin("38", "White", boardState)).toEqual(["47", "56"])
  })

  test('bishopPosMin should return an empty array if row is starting at 8th pos', () => {
    expect(bishopPosMin("85", "White", boardState)).toEqual([])
  })

  test('bishopPosMin should return an empty array if col is starting at 1st pos', () => {
    expect(bishopPosMin("51", "White", boardState)).toEqual([])
  })
})

describe('bishopMinPos', () => {
  test('bishopMinPos should return empty positions in a (-, +) direction', () => {
    expect(bishopMinPos("54", "White", boardState)).toEqual(["45", "36", "27", "18"])
  })

  test('bishopMinPos should stop when hitting a piece of the same color', () => {
    expect(bishopMinPos("53", "White", boardState)).toEqual(["44", "35", "26"])
  })
})