import db from './../firebase';
import React, { useState, useEffect  } from "react";

function Welcome({ setGameID }) {
  // useEffect(() => {
  //   getAllGames()
  // }, [])
  let all = getAllGames()

  async function getAllGames() {
    console.log("here")
    let all = []
    const games = await db.collection('games').get()
    games.forEach((game) => {
      all.push(game.id)
    })
    return all
  }
  if(all.length > 0) {
  return (
    <div>
      <p>list of games to go here</p>
      {all.forEach(function(id) {
        return <p>{id}</p>
      })}
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