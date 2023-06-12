import { useEffect, useState } from 'react'
import GameDetail from './Components/GameDetail'
import data from '@/fakeApi/games.json'
import { fakeFetch } from '@/fakeApi/server'

//`/api/games`

const App = () => {
  const [isTrue, setIsTrue] = useState(false)

  return (
    <>
      <button onClick={() => setIsTrue(!isTrue)}>
        Tema: {isTrue ? 'claro' : 'oscuro'}
      </button>
      {/* <GameDetail gameId={selectedId} /> */}
      <div className='flex-column'>
        {/* {games.map((game) => (
          <div className='card' key={game.id} onClick={() => setSelectedId(game.id)}>
            {game.name}
          </div>
        ))} */}
      </div>
    </>
  )
}

export default App
