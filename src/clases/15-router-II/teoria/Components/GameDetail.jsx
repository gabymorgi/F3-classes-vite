import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fakeFetch } from '@/fakeApi/server'

const GameDetail = () => {
  // useParams nos permite acceder a los parametros de la url
  // sera un objeto con tantas propiedades como parametros haya en la url
  // en este caso, solo tenemos uno: id
  const params = useParams()
  const [game, setGame] = useState() 

  useEffect(() => {
    const getGame = async () => {
      const game = await (await fakeFetch(`/api/detailedGames/${params.id}`)).json()
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
          <p>{game.achievements?.filter((a) => a.unlocktime).length} - {game.achievements?.length}</p>
        </div>
      )}
    </div>
  )
}

export default GameDetail
