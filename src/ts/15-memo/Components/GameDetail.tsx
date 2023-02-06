import { useEffect, useMemo, useState } from 'react'
import { GameI } from '../../../fakeApi/types'

interface GameDetailProps {
  gameId: string
}

const GameDetail = (props: GameDetailProps) => {
  const [game, setGame] = useState<GameI>() 

  useEffect(() => {
    if (!props.gameId) return
    const getGame = async () => {
      const game = await (await fetch(`/api/games/${props.gameId}`)).json()
      setGame(game.game)
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
