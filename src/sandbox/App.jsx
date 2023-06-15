import { useEffect, useState } from 'react'
import GameDetail from './Components/GameDetail'
import data from '@/fakeApi/games.json'
import { fakeFetch } from '@/fakeApi/server'

//`/api/games`

const App = () => {
  const [isTrue, setIsTrue] = useState(false)
  const [games, setGames] = useState([])
  // const [visible, setVisible] = useState(false)
  const [selectedId, setSelectedId] = useState()

  async function getGames() {
    const response = await fakeFetch('/api/games')
    const data = await response.json()

    setGames(data)
  }

  useEffect(() => {
    getGames()
  }, [])

  return (
    <>
      <button onClick={() => setIsTrue(!isTrue)}>
        Tema: {isTrue ? 'claro' : 'oscuro'}
      </button>
      {selectedId ? <GameDetail gameId={selectedId} /> : undefined}
      <div className='flex-column'>
        {games.map((game) => (
          <div
            title="asdfasdfa"
            className='card'
            key={game.id}
            onClick={() => setSelectedId(game.id)}
          >
            {game.name}
          </div>
        ))}
      </div>
    </>
  )
}

export default App
