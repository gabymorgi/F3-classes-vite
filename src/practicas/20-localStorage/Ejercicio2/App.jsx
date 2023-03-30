import { useState } from 'react'
import data from '../../../fakeApi/data.json'
import GameList from './Components/GameList'

const App = () => {
  const [favs, setFavs] = useState(
    JSON.parse(localStorage.getItem('gameFavs') || '[]')
  )

  const addToFavs = (game) => {
    let newFavs
    if (favs.some((fav) => fav.id === game.id)) {
      newFavs = favs.filter((fav) => fav.id !== game.id)
    } else {
      newFavs = [...favs, game]
    }
    setFavs(newFavs)
    localStorage.setItem('gameFavs', JSON.stringify(newFavs))
  }

  return (
    <>
      <h1>Fav games</h1>
      {favs.length > 0 ? <GameList games={favs} /> : undefined}
      <hr />
      <h1>All games</h1>
      <GameList games={data} onClick={addToFavs} />
    </>
  )
}

export default App
