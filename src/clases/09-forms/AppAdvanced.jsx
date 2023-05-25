import { useState } from 'react'

const AppAdvanced = () => {
  const [submitted, setSubmitted] = useState()
  const [error, setError] = useState('')
  
  // manejo todos los valores del formulario en un objeto
  const [values, setValues] = useState({})

  function handleSubmit(e) {
    e.preventDefault()
    if (!values.name || !values.imgUrl || !values.color) {
      console.error('Please fill out all fields')
      setError('Please fill out all fields')
      return
    }
    // regex no es un requerimiento para la cursada
    if (!values.color.match(/^#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/)) {
      console.error('Please set a valid color')
      setError('Please set a valid color')
      return
    }
    const game = values
    console.log(game)
    setSubmitted(game)
    setValues({})
    setError('')
  }

  function handleChanges(e) {
    // tengo menos control sobre el valor del input
    // pero puedo reutilizar la funcion para todos los inputs
    setValues({
      ...values,
      // utilizo el name del input para identificar el campo en el objeto values
      [e.target.name]: e.target.value,
    })
  }

  return (
    <>
      <h1>Add a new game</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            name='name' //vamos a utilizar el name del input para identificar el campo en el objeto values
            value={values.name}
            onChange={handleChanges}
          />
        </div>
        <div>
          <label htmlFor='imgUrl'>imgUrl</label>
          <input
            type='text'
            name='imgUrl'
            value={values.imgUrl}
            onChange={handleChanges}
          />
        </div>
        <div>
          <label htmlFor='score'>Score</label>
          <input
            type='number'
            name='score'
            min={0}
            max={10}
            value={values.score}
            onChange={handleChanges}
          />
        </div>
        <div>
          <label htmlFor='score'>color</label>
          <input
            type='text'
            name='color'
            value={values.color}
            onChange={handleChanges}
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

export default AppAdvanced
