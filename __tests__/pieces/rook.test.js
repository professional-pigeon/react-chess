import { rookRight, rookLeft, rookDown, rookUp, rookMoves } from "../../src/helper/Rook";

// use 11, 17, 81, 87 for rook white
// use 14, 47 for rook black

const boardState = {
  11: "Rook White",
  12: "empty",
  13: "empty",
  14: "Rook Black",
  15: "empty",
  16: "empty",
  17: "Rook White",
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
  34: "Rook White",
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
  47: "Rook Black",
  48: "empty",
  51: "empty",
  52: "empty",
  53: "empty",
  54: "empty",
  55: "empty",
  56: "empty",
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
  81: "Rook White",
  82: "empty",
  83: "empty",
  84: "empty",
  85: "empty",
  86: "empty",
  87: "Rook White",
  88: "empty",
}


describe('rookUp', () => {

  test('rookUp will move up row positions if empty and stop at a piece of the same color', () => {
    expect(rookUp("11", "White", boardState)).toEqual(["21", "31", "41", "51", "61", "71"])
  })

  test('rookUp will move up row positions and stop at and return a piece if it a different color', () => {
    expect(rookUp("17", "White", boardState)).toEqual(["27", "37", "47"])
  })

  test('confirm rookUp will work for black pieces same as above', () => {
    expect(rookUp("14", "Black", boardState)).toEqual(["24", "34"])
  })

  test('confirm rookUp will return an empty array if piece is starting in the 8th row', () => {
    expect(rookUp("84", "Black", boardState)).toEqual([])
  })

})

describe('rookDown', () => {
  test('rookDown will move down row positions if empty and stop at a piece of the same color', () => {
    expect(rookDown("71", "White", boardState)).toEqual(["61", "51", "41", "31", "21"])
  })

  test('rookDown will move down row positions if empty and stop after seeing a piece of the opposite color', () => {
    expect(rookDown("34", "White", boardState)).toEqual(["24", "14"])
  })

  test('confirm rookDown will work for both colors', () => {
    expect(rookDown("47", "Black", boardState)).toEqual(["37", "27", "17"])
  })

  test('confirm rookDown will return an empty array if already starting at the lowest row (1st)', () => {
    expect(rookDown("11", "Black", boardState)).toEqual([])
  })
})

describe('rookRight', () => {
  test('rookright will move in a positive direction until encountering a piece of the same color', () => {
    expect(rookRight("31", "White", boardState)).toEqual(["32", "33"])
  })

  test('rookRight will move through empty spaces and stop after encountering a piece of the opposing color', ()=> {
    expect(rookRight("85", "Black", boardState)).toEqual(["86", "87"])
  })
})