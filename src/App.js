import './App.css';
import Board from './components/Board';
import db from './firebase';
import React, { useState, useEffect  } from "react";
import { v4 as uuidv4 } from 'uuid';
import Welcome from "./components/Welcome";


function App() {
  const [board, setBoard] = useState({})
  const [gameID, setGameID] = useState("")
  console.log(gameID)

  useEffect(() => {
    fetchGames();
  }, [gameID])
  
  async function fetchGames() {
    const response = db.collection('games').doc(gameID);
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
    const res = db.collection('games').doc(gameID)
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
    setGameID(board.id)
  }

  if (isEmpty(board)) {
    return (
      <div>
      <Welcome setGameID={setGameID} />
      <button onClick={() => newGame()}>Click me</button>
      </div>
    )
  } else {
    return (
      <div className="App">
        <Board board={board} changeData={changeData} />
      </div>
    );
  }


}

export default App;
