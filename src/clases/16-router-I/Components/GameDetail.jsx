import { useEffect, useState } from 'react'
import { fakeFetch } from '@/fakeApi/server'

const GameDetail = () => {
  const [game, setGame] = useState()

  useEffect(() => {
    const getGame = async () => {
      const game = await (
        await fakeFetch(`/api/games/eObG8qSEgz1MuPPxG34X`)
      ).json()
      setGame(game)
    }
    getGame()
  }, [])

  return (
    <div>
      <h1>Game Detail</h1>
      {game && (
        <div>
          <h2>{game.name}</h2>
          <p>
            {game.achievements?.filter((a) => a.unlocktime).length} -{' '}
            {game.achievements?.length}
          </p>
        </div>
      )}
    </div>
  )
}

export default GameDetail
