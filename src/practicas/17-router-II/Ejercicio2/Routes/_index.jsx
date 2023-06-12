import { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import gamesData from '@/fakeApi/games.json'
import Form from '../components/Form'

function Index() {
  const [games, setGames] = useState([])
  const [searchParams] = useSearchParams()

  async function fetchData(filters) {
    let filteredGames = [ ...gamesData ]
    console.log(filters, filteredGames)
    if (filters.genre) {
      filteredGames = filteredGames.filter(
        (game) => game.tags.includes(filters.genre)
      )
    }
    if (filters.minPlayedTime) {
      filteredGames = filteredGames.filter(
        (game) => game.playedTime >= filters.minPlayedTime
      )
    }
    setGames(filteredGames)
  }

  useEffect(() => {
    const params = {}
    console.log("aqui")
    searchParams.forEach((value, key) => {
      params[key] = value
    })
    fetchData(params)
  }, [searchParams])

  return (
    <div className='flex-column'>
      <Form />
      <hr />
      {games.map((game) => (
        <div className='card' key={game.id}>
          <h2>{game.name}</h2>
          <li className='flex'>
            {game.tags.map((tag) => (
              <ul key={tag}>{tag}</ul>
            ))}
          </li>
          <p>{game.playedTime}</p>
          <Link to={`./games/${game.id}`}>Ver game</Link>
        </div>
      ))}
    </div>
  )
}

export default Index
