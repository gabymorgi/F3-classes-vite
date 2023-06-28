import Game from './Game'
import { useFetch } from './hooks/useFetch'

const App = () => {
  // ya no me tengo que preocupar por la logica de fetch y declarar los 3 estados
  // compara esto con la clase 14
  const { data, loading, error } = useFetch(`/api/games`)

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
