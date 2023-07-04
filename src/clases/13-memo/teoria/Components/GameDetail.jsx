import { useEffect, useMemo, useState } from 'react'
import { fakeFetch } from '@/fakeApi/server'

const GameDetail = (props) => {
  const [game, setGame] = useState() 

  useEffect(() => {
    if (!props.gameId) return
    const getGame = async () => {
      const game = await (await fakeFetch(`/api/detailedGames/${props.gameId}`)).json()
      setGame(game)
    }
    getGame()
  }, [props.gameId])

  const achievementsUnlocked = useMemo(() => {
    return game?.achievements?.filter((a) => a.unlocktime).length
  }, [game])

  return (
    <div>
      <h1>Game Detail</h1>
      {game && (
        <div>
          <h2>{game.name}</h2>
          <p>{achievementsUnlocked} - {game.achievements?.length}</p>
        </div>
      )}
    </div>
  )
}

export default GameDetail
