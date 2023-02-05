import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { GameI } from '../../../fakeApi/types'

const GameDetail = () => {
  const params = useParams()
  const [game, setGame] = useState<GameI>() 

  useEffect(() => {
    const getGame = async () => {
      const game = await (await fetch(`/api/games/${params.id}`)).json()
      console.log(game)
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
