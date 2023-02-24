import { useState } from 'react'

const App = () => {
  const [name, setName] = useState('')
  const [dni, setDni] = useState(0)
  const [edad, setEdad] = useState(0)

  async function handleSubmit(e) {
    e.preventDefault()
    //validate form
    if (!name || !dni || !edad) {
      console.error('Please fill out all fields')
      return
    }
    // if dni doesnt has 8 digits
    if (!(dni.toString().length === 8)) {
      console.error('DNI must have 8 digits')
      return
    }
    if (edad < 18) {
      console.error('You must be 18 years old')
      return
    }
    const user = {
      name,
      dni,
      edad
    }
    console.log(user)
    //reset form
    setName('')
    setDni(0)
    setEdad(0)
  }

  return (
    <>
      <h1>Add a new game</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            id='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor='dni'>DNI</label>
          <input
            type='text'
            id='dni'
            value={dni}
            onChange={(e) => setDni(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor='edad'>Edad</label>
          <input
            type='number'
            id='edad'
            value={edad}
            onChange={(e) => setEdad(Number(e.target.value))}
          />
        </div>
        <button type='submit'>Reservar</button>
      </form>
    </>
  )
}

export default App
