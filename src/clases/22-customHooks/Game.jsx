import { useLazyFetch } from './hooks/useFetch'

const Game = (props) => {
  const { data, loading, error, getData } = useLazyFetch(
    `/api/games/${props.game.id}`
  )

  const handleClick = () => {
    getData()
  }

  if (loading) return <div>Loading...</div>
  if (error) return <div>{error}</div>

  return (
    <div>
      <h1>{props.game.name}</h1>
      {!data ? (
        <button onClick={handleClick} disabled={loading}>
          show details
        </button>
      ) : (
        data.playedTime
      )}
    </div>
  )
}

export default Game
