import { kingOne, hasKingMoved, hasRookMoved, rooksToCheck, kingCastle, castleTileCheck, kingCheckDiagonals, kingCheckOrthogonal, kingCheckKnight, kingCheckPawn, kingCheckKing, kingMoves, castleMovePositions } from '../../src/helper/King'


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

  test('will confirm black king moves and confirm king will be able to take a knight of the opposite color', () => {
    expect(kingCheckKnight(blackMoves, "Black", boardState)).toEqual(['63', '51', '53', '42'])
  })
})

describe('kingCheckPawn', () => {
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
    42: "Pawn White",
    43: "empty",
    44: "empty",
    45: "empty",
    46: "empty",
    47: "empty",
    48: "empty",
    51: "Pawn White",
    52: "King Black",
    53: "empty",
    54: "Pawn White",
    55: "Pawn Black",
    56: "empty",
    57: "King White",
    58: "empty",
    61: "empty",
    62: "empty",
    63: "empty",
    64: "empty",
    65: "empty",
    66: "empty",
    67: "Pawn Black",
    68: "empty",
    71: "empty",
    72: "empty",
    73: "empty",
    74: "empty",
    75: "empty",
    76: "empty",
    77: "empty",
    78: "Pawn Black",
    81: "empty",
    82: "empty",
    83: "empty",
    84: "empty",
    85: "empty",
    86: "empty",
    87: "empty",
    88: "empty",
    moveHistory: [["yada"]]
  }
  let whiteMoves = kingOne('57', 'White', boardState)
  let blackMoves = kingOne('52', 'Black', boardState)
  test('kingCheckPawn will look for moves that are takeable by a pawn of the opposite color', () => {
    expect(kingCheckPawn(whiteMoves, "White", boardState)).toEqual(['66', '68', '47', '48'])
  });
  test('kingCheckPawn will look for moves that are takeable by a pawn of the opposite color check for black pieces', () => {
    expect(kingCheckPawn(blackMoves, "Black", boardState)).toEqual(['61', '41', '42', '43'])
  });
})

describe('kingCheckKing', () => {
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
    35: "King White",
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
    53: "King White",
    54: "empty",
    55: "King Black",
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
    73: "King Black",
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
    moveHistory: [["yada"]]
  }
  let whiteMoves = kingOne('53', "White", boardState)
  let blackMoves = kingOne('55', "Black", boardState)
  test('king should know when a move would put it into check by another king, test for black', () => {
    expect(kingCheckKing(blackMoves, "Black", boardState)).toEqual(['65', '66', '56'])
  });
  test('king should know when a move would put it into check by another king, test for black', () => {
    expect(kingCheckKing(whiteMoves, "White", boardState)).toEqual(['52', '42', '43'])
  });
})

describe('hasKingMoved', () => {
  let castleBoard = {
    11: "Rook White",
    12: "empty",
    13: "empty",
    14: "empty",
    15: "King White",
    16: "empty",
    17: "empty",
    18: "Rook White",
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
    81: "Rook Black",
    82: "empty",
    83: "empty",
    84: "empty",
    85: "empty",
    86: "empty",
    87: "empty",
    88: "Rook Black",
    moveHistory: [{ piece: "Rook White", move: [ "38", "18" ]}, { piece: "Rook White", move: [ "18", "38" ]}]
  }
  test('hasKingMoved will return false if king is on its starting location check for white', () => {
    expect(hasKingMoved("15", "White", castleBoard)).toEqual(false)
  });

  test('hasKingMoved will return falsenif king is on its starting location check for black', () => {
    expect(hasKingMoved("84", "Black", castleBoard)).toEqual(false)
  });

  test('hasKingMoved will return true if king is not on its starting location', () => {
    expect(hasKingMoved("16", "White", castleBoard)).toEqual(true)
  })

  test('hasKingMoved will return true if king has moved before', () => {
    castleBoard.moveHistory.push({ piece: "King Black", move: [ "83", "84" ]}, { piece: "King Black", move: [ "84", "83" ]})
    expect(hasKingMoved("84", "Black", castleBoard)).toEqual(true)
  })
});

describe('hasRookMoved', () => {
  let castleBoard = {
    11: "Rook White",
    12: "empty",
    13: "empty",
    14: "empty",
    15: "King White",
    16: "empty",
    17: "empty",
    18: "Rook White",
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
    81: "Rook Black",
    82: "empty",
    83: "empty",
    84: "empty",
    85: "empty",
    86: "empty",
    87: "empty",
    88: "Rook Black",
    moveHistory: []
  }
  test('hasRookMoved should return true if there is a rook at the starting rook position check White', () => {
    expect(hasRookMoved(["11", "18"], "White", castleBoard)).toEqual(["11", "18"])

  })

  test('hasRookMoved should return true if there is a rook at the starting rook position check Black', () => {
    expect(hasRookMoved(["81", "88"], "Black", castleBoard)).toEqual(["81", "88"])
  })


  test('hasRookMoved should return false if the rook has moved before', () => {
    castleBoard.moveHistory = [{ piece: "Rook White", move: ["38", "18"]}, { piece: "Rook White", move: ["18", "38"]}]
    expect(hasRookMoved(["11", "18"], "White", castleBoard)).toEqual(["11"])
  })    
});

describe('rooksToCheck', () => {
  let castleBoard = {
    11: "Rook White",
    12: "empty",
    13: "empty",
    14: "empty",
    15: "King White",
    16: "empty",
    17: "empty",
    18: "Rook White",
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
    81: "Rook Black",
    82: "empty",
    83: "empty",
    84: "King Black",
    85: "empty",
    86: "empty",
    87: "empty",
    88: "Rook Black",
    moveHistory: []
  }
  test('rooksToCheck should return both rook positions if the space between the rook and king is empty', () => {
    expect(rooksToCheck("White", castleBoard)).toEqual(["11", "18"])
    expect(rooksToCheck("Black", castleBoard)).toEqual(["81", "88"])
  })    
});

describe('castleTileCheck', () => {
  let castleBoard = {
    11: "Rook White",
    12: "empty",
    13: "empty",
    14: "empty",
    15: "King White",
    16: "empty",
    17: "empty",
    18: "Rook White",
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
    81: "Rook Black",
    82: "empty",
    83: "empty",
    84: "King Black",
    85: "empty",
    86: "empty",
    87: "empty",
    88: "Rook Black",
    moveHistory: []
  }
  test('castleTileCheck will need to check the tiles between the king and the rook to confirm they are not under attack by an opponents piece, should return true if able to move into them', () => {
    expect(castleTileCheck("11", "White", castleBoard)).toEqual(true)
    expect(castleTileCheck("18", "White", castleBoard)).toEqual(true)
    expect(castleTileCheck("81", "Black", castleBoard)).toEqual(true)
    expect(castleTileCheck("88", "Black", castleBoard)).toEqual(true)
  })
  test('kingCastle will return the Rooks available to move after checking kingmoves, rooksmoves, and tiles inbetween to confirm they are not in check', () => {
    castleBoard["22"] = "Bishop Black"
    expect(castleTileCheck("11", "White", castleBoard)).toEqual(false)
  })
  test('kingCastle will return the Rooks available to move after checking kingmoves, rooksmoves, and tiles inbetween to confirm they are not in check', () => {
    castleBoard["27"] = "Rook Black"
    expect(castleTileCheck("11", "White", castleBoard)).toEqual(false)
  })
});

describe("kingCastle", () => {
  let castleBoard = {
    11: "Rook White",
    12: "empty",
    13: "empty",
    14: "empty",
    15: "King White",
    16: "empty",
    17: "empty",
    18: "Rook White",
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
    81: "Rook Black",
    82: "empty",
    83: "empty",
    84: "King Black",
    85: "empty",
    86: "empty",
    87: "empty",
    88: "Rook Black",
    moveHistory: []
  }
  test('kingCastle will return the Rooks available to move after checking kingmoves, rooksmoves, and tiles inbetween to confirm they are not in check', () => {
    expect(kingCastle("15", "White", castleBoard)).toEqual(["11", "18"])
  })
  test('kingCastle will return the Rooks available to move after checking kingmoves, rooksmoves, and tiles inbetween to confirm they are not in check', () => {
    expect(kingCastle("84", "Black", castleBoard)).toEqual(["81", "88"])
  })
  test('kingCastle will return the Rooks available to move after checking kingmoves, rooksmoves, and tiles inbetween to confirm they are not in check', () => {
    castleBoard["22"] = "Bishop Black"
    expect(kingCastle("15", "White", castleBoard)).toEqual(["18"])
  })
  test('kingCastle will return the Rooks available to move after checking kingmoves, rooksmoves, and tiles inbetween to confirm they are not in check', () => {
    castleBoard["72"] = "Queen White"
    expect(kingCastle("84", "Black", castleBoard)).toEqual(["88"])
  })
  test('kingCastle will return the Rooks available to move after checking kingmoves, rooksmoves, and tiles inbetween to confirm they are not in check', () => {
    castleBoard["17"] = "Knight White"
    expect(kingCastle("15", "White", castleBoard)).toEqual([])
  })
  test('kingCastle will return the Rooks available to move after checking kingmoves, rooksmoves, and tiles inbetween to confirm they are not in check', () => {
    castleBoard["78"] = "Knight White"
    expect(kingCastle("84", "Black", castleBoard)).toEqual([])
  })
})

describe("castleMovePositions", () => {
  let castleBoard = {
    11: "Rook White",
    12: "empty",
    13: "empty",
    14: "empty",
    15: "King White",
    16: "empty",
    17: "empty",
    18: "Rook White",
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
    81: "Rook Black",
    82: "empty",
    83: "empty",
    84: "King Black",
    85: "empty",
    86: "empty",
    87: "empty",
    88: "Rook Black",
    moveHistory: []
  }
  test('castleMovePositions will take the valid moves from kings castle and translate them into readable moves for the board', () => {
    expect(castleMovePositions(["18"])).toEqual([{ move: "Castle", rook: "16", king: "17"}])
  })
  test('castleMovePositions will take the valid moves from kings castle and translate them into readable moves for the board', () => {
    expect(castleMovePositions(["11"])).toEqual([{ move: "Castle", rook: "14", king: "13"}])
  })
  test('castleMovePositions will take the valid moves from kings castle and translate them into readable moves for the board', () => {
    expect(castleMovePositions(["81"])).toEqual([{ move: "Castle", rook: "83", king: "82"}])
  })
})