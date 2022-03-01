import { knightMoves } from "../../src/helper/Knight"

const boardState = {
  11: "empty",
  12: "empty",
  13: "Knight Black",
  14: "empty",
  15: "empty",
  16: "empty",
  17: "empty",
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
  34: "Knight Black",
  35: "empty",
  36: "empty",
  37: "empty",
  38: "empty",
  41: "empty",
  42: "Knight White",
  43: "empty",
  44: "empty",
  45: "empty",
  46: "empty",
  47: "empty",
  48: "empty",
  51: "empty",
  52: "empty",
  53: "Knight Black",
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
  81: "empty",
  82: "empty",
  83: "empty",
  84: "empty",
  85: "empty",
  86: "empty",
  87: "empty",
  88: "empty",
}

describe('knightMoves', () => {
  test('knightMoves will return spaces around itself', () => {
    expect(knightMoves("33", "Black", boardState)).toEqual(["52", "54", "12", "14", "45", "25", "41", "21"])
  })

  test('knightMoves will not return spaces that have pieces of the same color', () => {
    expect(knightMoves("34", "Black", boardState)).toEqual(["55", "15", "46", "26", "42", "22"])
  })

  test('knightMoves will return spaces that contain an opponents piece', () => {
    expect(knightMoves("34", "White", boardState)).toEqual(["53", "55", "13", "15", "46", "26", "22"])
  })

  test('knightMoves will not return illegal coordinates', () => {
    expect(knightMoves("14", "Black", boardState)).toEqual(["33", "35", "26", "22"])
  })
})