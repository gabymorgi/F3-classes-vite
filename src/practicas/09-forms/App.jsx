import { useState } from 'react'


let autoId = 0

const App = () => {
  const [nombre, setNombre] = useState('')
  const [numero, setNumero] = useState('')
  const [mensajeError, setMensajeError] = useState('')
  const [valores, setValores] = useState([])

  const handleSubmit = (event) => {
    event.preventDefault()
    if (nombre.trim() === '') {
      setMensajeError('Debe ingresar un nombre')
    } else if (numero <= 0 || isNaN(numero)) {
      setMensajeError('Debe ingresar un número mayor a 0')
    } else {
      setValores([...valores, { nombre, numero, id: autoId++ }])
      setNombre('')
      setNumero('')
      setMensajeError('')
    }
  }

  return (
    <div>
      <h2>Formulario</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input
            type='text'
            value={nombre}
            onChange={(event) => setNombre(event.target.value)}
          />
        </label>
        <br />
        <label>
          Número favorito:
          <input
            type='number'
            value={numero}
            onChange={(event) => setNumero(event.target.value)}
          />
        </label>
        <br />
        <button type='submit'>Submit</button>
      </form>
      {mensajeError && <p>{mensajeError}</p>}
      <h3>Valores ingresados:</h3>
      <ul className='flex gap-16'>
        {valores.map((valor) => (
          <li className='card' key={valor.id}>
            <p>Nombre: {valor.nombre}</p>
            <p>Número favorito: {valor.numero}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
