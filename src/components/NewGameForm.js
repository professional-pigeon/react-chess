function NewGameForm({ setGameID, newGame }) {

  return (
  <form onSubmit={newGame}>
    <label>Name new game:
      <input type="text" name="name" defaultValue={"enter new"}/>
    </label>
    <button type="sumbit" value="Submit">Create New</button>
  </form>
  )
}

export default NewGameForm