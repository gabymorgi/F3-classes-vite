import { useEffect, useState } from 'react'
import { fakeFetch } from '@/fakeApi/server'

const GameDetail = () => {
  const [game, setGame] = useState() 
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState()

  useEffect(() => {
    const getGame = async () => {
      setLoading(true)
      try {
        const game = await (await fakeFetch('/api/games/eObG8qSEgz1MuPPxG34X')).json()
        setGame(game)
      } catch (error) {
        setError(error.message)
      }
      console.log(game)
      setLoading(false)
    }
    getGame()
  }, [])

  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>{error}</p>
  }

  return (
    <div>
      <h1>Game Detail</h1>
      {game && (
        <div>
          <h2>{game.name}</h2>
          <p>{game.achievements?.filter((a) => a.unlocktime).length} - {game.achievements?.length}</p>
        </div>
      )}
    </div>
  )
}

export default GameDetail
