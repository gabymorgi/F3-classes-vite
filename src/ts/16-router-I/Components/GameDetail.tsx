import { useEffect, useState } from 'react'
import { GameI } from '../../../fakeApi/types'

const GameDetail = () => {
  const [game, setGame] = useState<GameI>() 

  useEffect(() => {
    const getGame = async () => {
      const game = await (await fetch(`/api/games/eObG8qSEgz1MuPPxG34X`)).json()
      setGame(game.game)
    }
    getGame()
  }, [])

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
