import './App.css';
import Board from './components/Board';
import db from './firebase';
import React, { useState, useEffect  } from "react";


function App() {
  const [board, setBoard] = useState({})

  useEffect(() => {
    fetchGames();
  }, [])
  
  async function fetchGames() {
    const response = db.collection('boardStates').doc('initial');
    const data = await response.get()
    setBoard(data.data())
  }

  function isEmpty(obj) {
    return Object.keys(obj).length === 0;
  }

  if (isEmpty(board)) {
    return (
      <p>loading</p>
    )
  } else {
    return (
      <div className="App">
        <Board board={board} />
      </div>
    );
  }


}

export default App;
