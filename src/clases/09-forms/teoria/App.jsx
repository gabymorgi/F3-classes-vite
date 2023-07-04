import { useState } from 'react'

const App = () => {
  const [submitted, setSubmitted] = useState()
  const [error, setError] = useState('')
  
  const [name, setName] = useState('')
  const [imgUrl, setImgUrl] = useState('')
  const [score, setScore] = useState(0)
  const [color, setColor] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    if (!name || !imgUrl || !color) {
      console.error('Please fill out all fields')
      setError('Please fill out all fields')
      return
    }
    // regex no es un requerimiento para la cursada
    if (!color.match(/^#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/)) {
      console.error('Please set a valid color')
      setError('Please set a valid color')
      return
    }
    const game = {
      name,
      imgUrl,
      score,
      color,
    }
    console.log(game)
    setSubmitted(game)
    setName('')
    setImgUrl('')
    setScore(0)
    setColor('')
    setError('')
  }

  console.log(name, imgUrl, score)

  return (
    <>
      <h1>Add a new game</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            name='name'
            // cuando un input no tiene value, es un input no controlado
            // cuando un input tiene value, es un input controlado
            value={name}
            // para que el input sea controlado, tenemos que definir un handler
            // para el evento onChange
            // en este caso solo reflejamos el valor del input en el estado
            // pero podriamos hacer cualquier cosa con el valor del input
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor='imgUrl'>imgUrl</label>
          <input
            type='text'
            name='imgUrl'
            value={imgUrl}
            onChange={(e) => setImgUrl(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor='score'>Score</label>
          <input
            type='number'
            name='score'
            min={0}
            max={10}
            value={score}
            onChange={(e) => setScore(Number(e.target.value))}
          />
        </div>
        <div>
          <label htmlFor='score'>color</label>
          <input
            type='text'
            name='color'
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </div>
        <button type='submit'>Add Game</button>
      </form>
      {error && <p>{error}</p>}
      {submitted && (
        <div>
          <h2>Game added!</h2>
          <p>Name: {submitted.name}</p>
          <p>imgUrl: {submitted.imgUrl}</p>
          <p>Score: {submitted.score}</p>
          <p>Color: {submitted.color}</p>
        </div>
      )}
    </>
  )
}

export default App
