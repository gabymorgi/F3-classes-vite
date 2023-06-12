import { useState } from 'react'
import GameDetail from './Components/GameDetail'
import data from '@/fakeApi/games.json'

const App = () => {
  const [isTrue, setIsTrue] = useState(false)
  const [selectedId, setSelectedId] = useState('')
  return (
    <>
      <button onClick={() => setIsTrue(!isTrue)}>{isTrue ? 'yes' : 'no'}</button>
      <GameDetail gameId={selectedId} />
      <div className='flex-column'>
        {data.map((game) => (
          <div className='card' key={game.id} onClick={() => setSelectedId(game.id)}>
            {game.name}
          </div>
        ))}
      </div>
    </>
  )
}

export default App
