import { useMemo, useState } from 'react'
import data from '../../fakeApi/data.json'

const App = () => {
  const [number1, setNumber1] = useState(0)
  const [number2, setNumber2] = useState(0)
  const [number3, setNumber3] = useState(0)
  const [selectedTag, setSelectedTag] = useState("")

  const sum = useMemo(() => {
    console.log("recalculating sum...")
    return number1 + number2
  }, [number1, number2])

  const goodGames = useMemo(() => {
    console.log("recalculating good games...")
    return data.filter((game) => game.score >= 9)
  }, [])

  const filteredGames = useMemo(() => {
    console.log("recalculating filtered games...")
    return data.filter((game) => game.tags.includes(selectedTag))
  }, [selectedTag])

  return (
    <>
      <input type="number" value={number1} onChange={(e) => setNumber1(Number(e.target.value))} />
      <input type="number" value={number2} onChange={(e) => setNumber2(Number(e.target.value))} />
      <input type="number" value={number3} onChange={(e) => setNumber3(Number(e.target.value))} />
      <p>La suma es {sum}</p>
      <hr />
      <h1>Good Games</h1>
      <div className='flex height-limited'>
        {goodGames.map((game) => (
          <div className='card' key={game.id}>
            {game.name}
          </div>
        ))}
      </div>
      <select onChange={(e) => setSelectedTag(e.target.value)}>
        <option value="Roguelike">Roguelike</option>
        <option value="Platformer">Platformer</option>
        <option value="Metroidvania">Metroidvania</option>
      </select>
      
      <h1>Filtered Games</h1>
      <div className='flex height-limited'>
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
