import db from './../firebase';
import React, { useState, useEffect  } from "react";
import NewGameForm from './NewGameForm';

function Welcome({ setGameID, newGame }) {
  const [games, setGames] = useState([])
  useEffect(() => {
    getAllGames()
  }, [])

  async function getAllGames() {
    let all = []
    const games = await db.collection('games').get()
    games.forEach((game) => {
      all.push(game.id)
    })
    setGames(all)
  }

  if(games.length > 0) {
    console.log(games)
    return (
    <div>
      <p>list of games to go here it has loaded</p>
      <ul>
      {games.map(game => <li key={game}><button onClick={() => setGameID(game)}>{game}</button></li>)}
      </ul>
      <NewGameForm setGameID={setGameID} newGame={newGame}/>
    </div>
  )
    } else {
      return (
        <div>
          <p>list of games to go here</p>
        </div>
      )
    }

}

export default Welcome