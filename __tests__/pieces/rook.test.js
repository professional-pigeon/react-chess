import { right, left, down, up, rookMoves } from "../../src/helper/Rook";

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


describe('up', () => {
  test('up will move up row positions if empty and stop at a piece of the same color', () => {
    expect(up("11", "White", boardState)).toEqual(["21", "31", "41", "51", "61", "71"]);
  });

  test('up will move up row positions and stop at and return a piece if it a different color', () => {
    expect(up("17", "White", boardState)).toEqual(["27", "37", "47"]);
  });

  test('confirm up will work for black pieces same as above', () => {
    expect(up("14", "Black", boardState)).toEqual(["24", "34"]);
  });

  test('confirm up will return an empty array if piece is starting in the 8th row', () => {
    expect(up("84", "Black", boardState)).toEqual([]);
  });
});

describe('down', () => {
  test('down will move down row positions if empty and stop at a piece of the same color', () => {
    expect(down("71", "White", boardState)).toEqual(["61", "51", "41", "31", "21"]);
  });

  test('down will move down row positions if empty and stop after seeing a piece of the opposite color', () => {
    expect(down("34", "White", boardState)).toEqual(["24", "14"]);
  });

  test('confirm down will work for both colors', () => {
    expect(down("47", "Black", boardState)).toEqual(["37", "27", "17"]);
  });

  test('confirm down will return an empty array if already starting at the lowest row (1st)', () => {
    expect(down("11", "Black", boardState)).toEqual([]);
  });
});

describe('right', () => {
  test('right will move in a positive direction until encountering a piece of the same color', () => {
    expect(right("31", "White", boardState)).toEqual(["32", "33"]);
  });

  test('right will move through empty spaces and stop after encountering a piece of the opposing color', ()=> {
    expect(right("85", "Black", boardState)).toEqual(["86", "87"]);
  });

  test('right will return an empty array if it starts on the furthest right position (8th)', () => {
    expect(right("18", "Black", boardState)).toEqual([]);
  });
});

describe('left', () => {
  test('left will move in a negative direction until encountering a piece of the same color', () => {
    expect(left("17", "Black", boardState)).toEqual(["16", "15"]);
  });

  test('left will move in a negative direction and stop after encountering a piece of an opposing color', () => {
    expect(left("17", "White", boardState)).toEqual(["16", "15", "14"]);
  });

  test('left will return an empty array if starting at furthest left column (1st)', () => {
    expect(left('11', "White", boardState)).toEqual([]);
  });
});

describe('rookMoves', () => {
  test('rookMoves shoud return all moves in all directions in one array, combination of previous 4 functions', () => {
    expect(rookMoves("45", "Black", boardState)).toEqual(["55", "65", "75", "85", "44", "43", "42", "41", "46", "35", "25", "15"]);
  });
});