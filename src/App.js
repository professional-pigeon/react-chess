import './App.css';
import Board from './components/Board';
import db from './firebase';
import React, { useState, useEffect  } from "react";
import { v4 as uuidv4 } from 'uuid';
import Welcome from './components/Welcome';


function App() {
  const [board, setBoard] = useState({})
  const [gameID, setGameID] = useState("")

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
  
  function doubleCall(currentPosArr, moveArr, piecesArr, board) {
    board[currentPosArr[0]] = 'empty'
    board[moveArr[0]] = piecesArr[0]
    board[currentPosArr[1]] = 'empty'
    board[moveArr[1]] = piecesArr[1]
    board.moveHistory.push({
      piece: piecesArr[0],
      move: [moveArr[0], currentPosArr[0]],
      piece2: piecesArr[1],
      move2: [moveArr[1], currentPosArr[1]]
    })
    let data = board
    const res = db.collection('games').doc(gameID)
    res.set(data)

  }

  async function newGame(event) {
    event.preventDefault()
    let name = event.target.name.value
    const initial = db.collection('boardStates').doc('initial')
    const data = await initial.get()
    let board = data.data()
    board["id"] = uuidv4()
    board["name"] = name
    board["time"] = Date.now()
    const res = db.collection('games').doc(board.id)
    await res.set(board)
    setGameID(board.id)
  }

  if (isEmpty(board)) {
    return (
      <div>
        <Welcome setGameID={setGameID} newGame={newGame}/>
      </div>
    )
  } else {
    return (
      <div className="App">
        <Board board={board} changeData={changeData} doubleCall={doubleCall} />
      </div>
    );
  }


}

export default App;
