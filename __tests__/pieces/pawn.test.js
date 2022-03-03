import { pawnForward, pawnTakes, enPassant, switchPiece, pawnMoves } from "../../src/helper/pawn";


const boardState = {
  11: "empty",
  12: "empty",
  13: "empty",
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
  51: "Pawn White",
  52: "empty",
  53: "Pawn White",
  54: "empty",
  55: "Pawn Black",
  56: "empty",
  57: "Pawn Black",
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
  moveHistory: [ { piece: "Pawn Black", move: [[7, 5], [5, 5]] }]
}


describe("pawnForward", () => {
  test('pawnForward will return the space ahead of it if it is empty and can be moved into', () => {
    expect(pawnForward('51', 'White', boardState)).toEqual(['61']);
  });

  test('pawnForward will return the space ahead of it if it is empty and can be moved into for Black', () => {
    expect(pawnForward('51', 'Black', boardState)).toEqual(['41']);
  });

  test('pawnForward will not let a piece move into an occupied space of either color', () => {
    expect(pawnForward('41', 'White', boardState)).toEqual([]);
    expect(pawnForward('61', 'Black', boardState)).toEqual([]);
  });

  test('pawnForward will let a white piece move two squares forward if it is on its starting position and the spaces ahead of it are empty', () => {
    expect(pawnForward('21', 'White', boardState)).toEqual(['31', '41']);
  });

  test('pawnForward will let black pieces move two spaces forward if on starting position and spaces are empty', () => {
    expect(pawnForward('72', 'Black', boardState)).toEqual(['62', '52']);
  });
});

describe('pawnTakes', () => {
  test('pawnTakes will allow a white piece to take a piece (+, -) or (+, +) ahead of it in the opposing color', () => {
    expect(pawnTakes('46', 'White', boardState)).toEqual(['55', '57']);
  });

  test('pawnTakes will allow a black piece to take a piece (+, -) or (+, +) ahead of it in the opposing color', () => {
    expect(pawnTakes('62', 'Black', boardState)).toEqual(['51', '53']);
  });
});

describe('enPassant', () => {
  test('enPassant will allow you take an pawn that has moved adjacent to you after moving twice', () => {
    expect(enPassant("56", "White", boardState)).toEqual(["65"])
  })
})

describe('switchPiece', () => {
  test('switchPiece will change a pawn on the board into a new piece', () => {
    switchPiece("81", "White", boardState, "Queen")
    expect(board[pos]).toEqual("Queen White")
  })
})