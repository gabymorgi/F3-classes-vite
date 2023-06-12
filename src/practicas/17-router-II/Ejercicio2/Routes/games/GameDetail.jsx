import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import gamesDetailData from "@/fakeApi/detailedGames.json"

function PostDetail() {
  const [game, setGame] = useState()
  const params = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    async function fetchData() {
      const foundGame = gamesDetailData.find((game) => {
        return game.id === params.id
      })
      console.log(foundGame)
      setGame(foundGame)
    }
    fetchData()
  }, [])

  function handleGoBack() {
    navigate(-1)
  }

  if (!game) {
    return <div>Loading...</div>
  }
  return (
    <div className="card">
      <h2>{game.name}</h2>
      <button onClick={handleGoBack}>Volver</button>
    </div>
  )
}

export default PostDetail
