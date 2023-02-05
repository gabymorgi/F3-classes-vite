import { GameI } from '../../fakeApi/types'
import Game from './Game'
import { useFetch } from './hooks/useFetch'

const App = () => {
  const { data, loading, error } = useFetch<GameI[]>(`/api/games`)

  if (loading) return <div>Loading...</div>
  if (error) return <div>{error}</div>

  return (
    <div className='flex-column'>
      {data?.map((game) => (
        <Game key={game.id} game={game} />
      ))}
    </div>
  )
}

export default App
