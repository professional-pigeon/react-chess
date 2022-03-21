import './App.css';
import Board from './components/Board';
import db from './firebase';
import React, { useState, useEffect  } from "react";
import { v4 as uuidv4 } from 'uuid';



function App() {
  const [board, setBoard] = useState({})

  useEffect(() => {
    fetchGames();
    console.log("when am I being called")
  }, [])
  
  async function fetchGames() {
    const response = db.collection('boardStates').doc('test');
    const data = await response.get()
    setBoard(data.data())
  }

  function isEmpty(obj) {
    return Object.keys(obj).length === 0;
  }

  function changeData(current, movePos, pieceType, board) {
    board[current] = 'empty'
    board[movePos] = pieceType
    board.moveHistory.push({
      piece: pieceType,
      move: [movePos, current]
    })
    let data = board
    const res = db.collection('boardStates').doc('test')
    res.set(data)
  }

  async function newGame() {
    const initial = db.collection('boardStates').doc('initial')
    const data = await initial.get()
    let board = data.data()
    board["id"] = uuidv4()
    console.log(board)
    const res = db.collection('games').doc(board.id)
    await res.set(board)
  }

  if (isEmpty(board)) {
    return (
      <p>loading</p>
    )
  } else {
    return (
      <div className="App">
        <Board board={board} changeData={changeData} />
        <button onClick={() => newGame()}>Click me</button>
      </div>
    );
  }


}

export default App;
