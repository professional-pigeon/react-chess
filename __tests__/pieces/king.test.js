import { kingOne, kingCheckDiagonals, kingCheckOrthogonal, kingCheckKnight, kingMoves } from '../../src/helper/King'


describe('kingOne', () => {
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
    81: "Queen White",
    82: "empty",
    83: "empty",
    84: "empty",
    85: "empty",
    86: "Bishop White",
    87: "empty",
    88: "empty",
  }
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
    expect(kingOne('87', 'Black', boardState)).toEqual(['86', '88', '76', '77', '78']);
  });

  test('will allow the king to take a piece of the opposing color. Test for White pieces on take', () => {
    expect(kingOne('12', 'White', boardState)).toEqual(['21', '22', '23', '11', '13']);
  });
});

describe('kingCheckDiagonals', () => {
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
    81: "Queen White",
    82: "empty",
    83: "empty",
    84: "empty",
    85: "empty",
    86: "Bishop White",
    87: "empty",
    88: "empty",
  }
  test('will check available moves to see if any moves will put the king into check by a bishop and remove that possible move', () => {
    let moves = kingOne('87', 'White', boardState);
    expect(kingCheckDiagonals(moves, 'White', boardState)).toEqual(['76', '78']);
  });

  test('will check available moves to see if any moves will put the king into check by a queen (diagonally) and remove that move', () => {
    let moves = kingOne('18', 'Black', boardState);
    expect(kingCheckDiagonals(moves, 'Black', boardState)).toEqual(['28', '17']);
  });

  test('will stop checking a diagonal if it encounters a piece blocking the diagonal', () => {
    let board = {
      11: "Bishop Black",
      12: "empty",
      13: "empty",
      14: "empty",
      15: "empty",
      16: "empty",
      17: "empty",
      18: "empty",
      21: "empty",
      22: "Pawn Black",
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
      81: "Queen White",
      82: "empty",
      83: "empty",
      84: "empty",
      85: "empty",
      86: "Bishop White",
      87: "empty",
      88: "empty",
    }
    let moves = kingOne('87', 'White', board);
    expect(kingCheckDiagonals(moves, 'White', board)).toEqual(['88', '76', '77', '78'])
  })
});

describe('kingCheckOrthogonal', () => {
  let boardState = {
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
    47: "Pawn Black",
    48: "empty",
    51: "empty",
    52: "Rook White",
    53: "Pawn White",
    54: "empty",
    55: "empty",
    56: "Pawn Black",
    57: "Rook Black",
    58: "empty",
    61: "empty",
    62: "Pawn White",
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
  test('will check in the positive x direction for a rook of the opposite color', () => {
    let moves = kingOne('11', 'Black', boardState)
    expect(kingCheckOrthogonal(moves, 'Black', boardState)).toEqual(['21'])
  });

  test('will check in the negative x direction for a rook of the opposite color', () => {
    let moves = kingOne('88', 'White', boardState)
    expect(kingCheckOrthogonal(moves, 'White', boardState)).toEqual(['78'])
  });

  test('will check in the positive y direction for a rook of the opposite color', () => {
    let moves = kingOne('61', "Black", boardState)
    expect(kingCheckOrthogonal(moves, 'Black', boardState)).toEqual(['71', '72', '52'])
  });

  test('will check in negative y direction for a rook of the opposite color', () => {
    let moves = kingOne('48', 'White', boardState)
    expect(kingCheckOrthogonal(moves, "White", boardState)).toEqual(['57', '37', '38'])
  });

  test('will check in the positive x direction for a non rook or queen piece and will return move', () => {
    let moves = kingOne('81', 'Black', boardState)
    expect(kingCheckOrthogonal(moves, 'Black', boardState)).toEqual(['82', '71', '72'])
  });

  test('will check in the negative x direction for a non rook or queen piece and will return move', () => {
    let moves = kingOne('18', 'White', boardState)
    expect(kingCheckOrthogonal(moves, 'White', boardState)).toEqual(['27', '28', '17'])
  });

  test('will check in the negative x direction for a non rook or queen piece and will return move will check for rooks', () => {
    let moves = kingOne('63', 'Black', boardState)
    expect(kingCheckOrthogonal(moves, 'Black', boardState)).toEqual(['72', '73', '74', '64', '52', '54'])
  });

  test('will check in the negative x direction for a non rook or queen piece and will return move will check for rooks', () => {
    let moves = kingOne('46', 'White', boardState)
    expect(kingCheckOrthogonal(moves, 'White', boardState)).toEqual(['55', '57', '45', '35', '36', '37'])
  });

  test('will check in the negative x direction for a non rook or queen piece and will return move will check for queens', () => {
    boardState["52"] = "Queen White"
    let moves = kingOne('63', 'Black', boardState)
    expect(kingCheckOrthogonal(moves, 'Black', boardState)).toEqual(['72', '73', '74', '64', '52', '54'])
  });

  test('will check in the negative x direction for a non rook or queen piece and will return move will check for queens', () => {
    boardState["57"] = "Queen Black"
    let moves = kingOne('46', 'White', boardState)
    expect(kingCheckOrthogonal(moves, 'White', boardState)).toEqual(['55', '57', '45', '35', '36', '37'])
  });
});

describe('kingCheckKnight', () => {
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
    47: "Knight Black",
    48: "empty",
    51: "empty",
    52: "King Black",
    53: "Knight White",
    54: "empty",
    55: "empty",
    56: "empty",
    57: "King White",
    58: "empty",
    61: "empty",
    62: "Knight White",
    63: "empty",
    64: "empty",
    65: "empty",
    66: "Knight Black",
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
    83: "Knight White",
    84: "empty",
    85: "empty",
    86: "empty",
    87: "empty",
    88: "empty",
    moveHistory: [["yada"]]
  };
  const whiteMoves = kingOne("57", "White", boardState);
  const blackMoves = kingOne("52", "Black", boardState);
  test('will check moves to be sure knights can not take that square', () => {
    expect(kingCheckKnight(whiteMoves, "White", boardState)).toEqual(['67', '56', '46', '48'])
  });
})