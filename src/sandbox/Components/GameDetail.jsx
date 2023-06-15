import { useEffect, useMemo, useState } from 'react'
import { fakeFetch } from '@/fakeApi/server'

//`/api/detailedGames/:gameId`

/**
 * @param {*} props  gameId: es el id del juego que se selecciona
 * @returns Muestra el nombre y los achievements de un juego
 */
const GameDetail = (props) => {
  const [gameDetail, setGameDetail] = useState()

  async function getGameDetail() {
    const response = await fakeFetch(`/api/detailedGames/${props.gameId}`)
    const data = await response.json()
    console.log(data)
    setGameDetail(data)
  }

  useEffect(() => {
    getGameDetail()
  }, [props.gameId])

  const meoizedTotalAchievements = useMemo(() => {
    if (!gameDetail) return

    // gameDetail existe

    const filteredAch = gameDetail.achievements.filter((achievement) => {
      return achievement.unlocktime
    })
  
    const totalAchievements = filteredAch.length
  
    for(let i = 0; i < 1000000000; i++) {
      // console.log(i)
      2 + 2
    }
    return totalAchievements
  }, [gameDetail])

  if (!gameDetail) {
    return <div>Cargando...</div>
  }

  console.log("render game detail")

  return (
    <div>
      <h1>Game Detail</h1>
      <p>{meoizedTotalAchievements} / {gameDetail.achievements.length}</p>
    </div>
  )
}

export default GameDetail
