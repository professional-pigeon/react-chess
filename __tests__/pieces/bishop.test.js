import { bishopMoves, plusPlus, minusMinus, plusMinus, minusPlus } from "../../src/helper/Bishop";

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

describe('plusPlus', () => {
  test('plusPlus should move in through rows and columns as long as the space is empty', () => {
    expect(plusPlus("16", "Black", boardState)).toEqual(["27", "38"]);
  });

  test('plusPlus should stop at a piece of the same color', () => {
    expect(plusPlus("55", "Black", boardState)).toEqual(["66", "77"]);
  });

  test('plusPlus should stop after a piece of the opposing color', () => {
    expect(plusPlus("34", "White", boardState)).toEqual(["45", "56"]);
  });

  test('plusPlus should return an empty array if already at an 8th positiong in col', () => {
    expect(plusPlus("18", "White", boardState)).toEqual([]);
  });

  test('plusPlus should return an empty array if already at an 8th positiong in row', () => {
    expect(plusPlus("81", "White", boardState)).toEqual([]);
  });
});

describe('minusMinus', () => {
  test('minusMinus should return all empty spaces while moving in a (-, -) direction', () => {
    expect(minusMinus("37", "Black", boardState)).toEqual(["26", "15"]);
  });

  test('minusMinus should stop when it encounters a piece of the same color', () => {
    expect(minusMinus("78", "Black", boardState)).toEqual(["67"]);
  });

  test('minusMinus should stop after it encounters a piece of an opposing color', () => {
    expect(minusMinus("78", "White", boardState)).toEqual(["67", "56"]);
  });

  test('minusMinus should return an empty array if the starting row is already at the lowest value', () => {
    expect(minusMinus("18", "Black", boardState)).toEqual([]);
  });

  test('minusMinus should return an empty array if the starting row is already at the lowest value', () => {
    expect(minusMinus("81", "Black", boardState)).toEqual([]);
  });
});

describe('plusMinus', () => {
  test('plusMinus should return empty positions in a (+, -) direction', () => {
    expect(plusMinus("55", "White", boardState)).toEqual(["64", "73", "82"]);
  });

  test('plusMinus should stop when encountering a piece of the same color', () => {
    expect(plusMinus("38", "Black", boardState)).toEqual(["47"]);
  });

  test('plusMinus should stop after encountering a piece of the opposing color', () => {
    expect(plusMinus("38", "White", boardState)).toEqual(["47", "56"]);
  });

  test('plusMinus should return an empty array if row is starting at 8th pos', () => {
    expect(plusMinus("85", "White", boardState)).toEqual([]);
  });

  test('plusMinus should return an empty array if col is starting at 1st pos', () => {
    expect(plusMinus("51", "White", boardState)).toEqual([]);
  });
});

describe('minusPlus', () => {
  test('minusPlus should return empty positions in a (-, +) direction', () => {
    expect(minusPlus("54", "White", boardState)).toEqual(["45", "36", "27", "18"]);
  });

  test('minusPlus should stop when hitting a piece of the same color', () => {
    expect(minusPlus("53", "White", boardState)).toEqual(["44", "35", "26"]);
  });

  test('minusPlus should stop after hitting a piece of the same color', () => {
    expect(minusPlus("53", "Black", boardState)).toEqual(["44", "35", "26", "17"]);
  });

  test('minusPlus should return an empty array if starting at the lowest row number (1)', () => {
    expect(minusPlus("15", "Black", boardState)).toEqual([]);
  });

  test('minusPlus should return an empty array if starting at the highest col number', () => {
    expect(minusPlus("58", "Black", boardState)).toEqual([]);
  });
});

describe('bishopMoves', () => {
  test('bishopMoves should return all moves in each 4 direction, combines 4 above functions', () => { 
    expect(bishopMoves("53", "White", boardState)).toEqual(["64", "75", "86", "44", "35", "26", "62", "71", "42", "31"]);
  });
});