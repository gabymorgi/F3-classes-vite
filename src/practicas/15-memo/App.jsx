import { useMemo, useState } from 'react'
import data from '../../fakeApi/data.json'

const App = () => {
  const [isTrue, setIsTrue] = useState(false)
  const [selectedTag, setSelectedTag] = useState("")

  const filteredGames = useMemo(() => {
    return data.filter((game) => game.tags.includes(selectedTag))
  }, [selectedTag])

  const goodGames = useMemo(() => {
    return data.filter((game) => game.score >= 9)
  }, [])

  return (
    <>
      <button onClick={() => setIsTrue(!isTrue)}>{isTrue ? 'yes' : 'no'}</button>
      <select onChange={(e) => setSelectedTag(e.target.value)}>
        <option value="Roguelike">Roguelike</option>
        <option value="Platformer">Platformer</option>
        <option value="Metroidvania">Metroidvania</option>
      </select>
      <h1>Good Games</h1>
      <div className='flex'>
        {goodGames.map((game) => (
          <div className='card' key={game.id}>
            {game.name}
          </div>
        ))}
      </div>
      <h1>Filtered Games</h1>
      <div className='flex'>
        {filteredGames.map((game) => (
          <div className='card' key={game.id}>
            {game.name}
          </div>
        ))}
      </div>
    </>
  )
}

export default App
