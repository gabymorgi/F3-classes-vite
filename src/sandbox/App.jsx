import { useState } from "react"

const App = () => {
  const [name, setName] = useState('')
  const [edad, setEdad] = useState(0)

  const [submitedValues, setSubmitedValues] = useState()
  const [error, setError] = useState()

  function handleSubmit(e) {
    e.preventDefault()
    console.log('Form submitted', name)
    // validations
    if (name === "") {
      console.error('Name is required')
      setError('Name is required')
      return
    } else {
      // aca esta todo bien
      setError()
      // enviar informacion
      setSubmitedValues({
        name,
        edad,
      })
      setName('')
      setEdad('')
    }
  }

  console.log("render", error)

  function handleChangeNombre(e) {
    console.log(e.target.value)
    // parser
    setName(e.target.value.toLowerCase())
  }

  function handleChangeEdad(e) {
    console.log(e.target.value)
    // parser
    setEdad(e.target.value)
  }

  return (
    <div className='flex-col'>
      Formulario
      <form onSubmit={handleSubmit}>
        <div className="flex">
          <label htmlFor='name'>Name: </label>
          <input
            id="name"
            placeholder="John Doe"
            value={name}
            onChange={handleChangeNombre}
          />
        </div>
        <div className="flex">
          <label htmlFor='edad'>Edad: </label>
          <input
            id="edad"
            placeholder="33"
            type="number"
            value={edad}
            onChange={handleChangeEdad}
          />
        </div>
        {error ? <p>{error}</p> : undefined}
        <button type="submit">Submit</button>
      </form>
      {submitedValues ? (
        <div>
          <p>Nombre: {submitedValues.name}</p>
          <p>Edad: {submitedValues.edad}</p>
        </div>
      ) : undefined}
    </div>
  )
}

export default App
