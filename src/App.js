import './App.css';
import Board from './components/Board';
import db from './firebase';
import React, { useState, useEffect  } from "react";


function App() {
  const [games, setGames] = useState({})

  useEffect(() => {
    fetchGames();
  }, [])
  
  async function fetchGames() {
    const response = db.collection('games').doc('gameState');
    const data = await response.get()
    setGames(data.data())
    // data.forEach((doc) => {
    //   let thing = (doc.id, '=>', doc.data())
    //   setGames(thing)
    //   console.log(thing)
    // });
  }

  function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}

  if (isEmpty(games)) {
    return (
      <p>loading</p>
    )
  } else {
    return (
      <div className="App">
        <Board games={games} />
      </div>
    );
  }


}

export default App;
