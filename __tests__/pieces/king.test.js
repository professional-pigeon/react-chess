import { kingOne, kingCheck, kingMoves } from '../../src/helper/King'

const boardState = {
  11: "Bishop Black",
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
  81: "empty",
  82: "empty",
  83: "empty",
  84: "empty",
  85: "empty",
  86: "Bishop White",
  87: "empty",
  88: "empty",
}
describe('kingOne', () => {
  test('will allow the king to move one into one unoccupied space in any direction', () => {
    expect(kingOne('43', 'Black', boardState)).toEqual(['52', '53', '54', '42', '44', '32', '33', '34'])
  });

  test('will not allow the king to move past the boundaries of the board check lows', () => {
    expect(kingOne('11', 'White', boardState)).toEqual(['21', '22', '12'])
  })

  test('will not allow the king to move past the boundaries of the board check highs', () => {
    expect(kingOne('88', 'White', boardState)).toEqual(['87', '77', '78'])
  })

  test('will let the king take a piece of the opposing color. Test for Black pieces on take', () => {
    expect(kingOne('87', 'Black', boardState)).toEqual(['86', '88', '76', '77', '78'])
  })

  test('will allow the king to take a piece of the opposing color. Test for White pieces on take', () => {
    expect(kingOne('12', 'White', boardState)).toEqual(['21', '22', '23', '11', '13'])
  })
})

describe('kingCheck', () => {
  test('will check available moves to see if any moves will put the king into check by a bishop and remove that possible move', () => {
    expect(kingCheck(kingOne('87', 'White', boardState))).toEqual(['76', '78'])
  })
})