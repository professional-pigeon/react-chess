import './App.css';
import Board from './components/Board';
import db from './firebase';
import React, { useState, useEffect  } from "react";


function App() {
  const [board, setBoard] = useState({})

  useEffect(() => {
    fetchGames();
  }, [board])
  
  async function fetchGames() {
    const response = db.collection('boardStates').doc('test');
    const data = await response.get()
    setBoard(data.data())
  }

  function isEmpty(obj) {
    return Object.keys(obj).length === 0;
  }

  function changeData(board) {
    board['24'] = 'empty'
    board['44'] = 'Pawn White'
    let data = board
    const res = db.collection('boardStates').doc('test')
    res.set(data)
  }

  if (isEmpty(board)) {
    return (
      <p>loading</p>
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
