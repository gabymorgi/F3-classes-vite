import movies from '@/fakeApi/movies.json'
import Header from './components/Header'

function Practica02() {
  function piratear(edad) {
    console.log(`Asegurate de tener ${edad} años`)
  }
  return (
    <div>
      <Header />
      <h1>{movies[0].name}</h1>
      <p>
        {movies[0].genre}
      </p>
      <button
        onClick={() => piratear(movies[0].edad_minima)}
      >
        Ver pirata
      </button>
    </div>
  )
}

export default Practica02
