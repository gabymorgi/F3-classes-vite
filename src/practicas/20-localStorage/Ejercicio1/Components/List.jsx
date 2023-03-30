const peliculas = [
  { nombre: 'Avengers: Endgame', genero: 'Acción', edad_minima: 13 },
  {
    nombre: 'The Shawshank Redemption',
    genero: 'Drama',
    edad_minima: 16,
  },
  { nombre: 'The Dark Knight', genero: 'Acción', edad_minima: 14 },
  { nombre: 'Inception', genero: 'Ciencia ficción', edad_minima: 12 },
  { nombre: 'Pulp Fiction', genero: 'Crimen', edad_minima: 18 },
  {
    nombre: 'Forrest Gump',
    genero: 'Comedia dramática',
    edad_minima: 10,
  },
  { nombre: 'The Godfather', genero: 'Crimen', edad_minima: 18 },
  {
    nombre: 'The Matrix',
    genero: 'Ciencia ficción',
    edad_minima: 13,
  },
  { nombre: 'Joker', genero: 'Drama', edad_minima: 16 },
  {
    nombre: "Schindler's List",
    genero: 'Drama histórico',
    edad_minima: 16,
  },
  {
    nombre: 'The Silence of the Lambs',
    genero: 'Crimen',
    edad_minima: 18,
  },
  {
    nombre: 'The Lord of the Rings: The Fellowship of the Ring',
    genero: 'Fantasía',
    edad_minima: 12,
  },
  { nombre: 'Goodfellas', genero: 'Crimen', edad_minima: 18 },
  { nombre: 'The Lion King', genero: 'Animación', edad_minima: 0 },
  { nombre: 'Titanic', genero: 'Drama romántico', edad_minima: 12 },
]

function List() {
  const handleVerPeliculaClick = (pelicula) => {
    const yearOfBirth = localStorage.getItem('yearOfBirth')
    const edad = new Date().getFullYear() - parseInt(yearOfBirth)
    if (edad >= pelicula.edad_minima) {
      console.log('¡Éxito! Puedes ver la película.')
    } else {
      console.log(
        `Lo siento, no puedes ver la película. La edad mínima recomendada es ${pelicula.edad_minima}.`
      )
    }
  }

  return (
    <ul className="height-limited">
      {peliculas.map((pelicula) => (
        <li key={pelicula.nombre}>
          <div className="flex">
            <h3>{pelicula.nombre}</h3>
            <span>Género: {pelicula.genero}</span>
            <button onClick={() => handleVerPeliculaClick(pelicula)}>
              Ver película
            </button>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default List
