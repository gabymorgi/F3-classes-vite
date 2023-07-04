import { useState } from 'react'

function Ejercicio2() {
  const [loading, setLoading] = useState(false)
  const [facts, setFacts] = useState([])

  async function handleFetch() {
    setLoading(true)
    const response = await (
      await fetch('https://cat-fact.herokuapp.com/facts')
    ).json()
    setFacts(
      response.map((fact) => ({ id: fact['_id'], text: fact.text }))
    )
    setLoading(false)
  }
  return (
    <div>
      {facts.length > 0 ? null : <button onClick={handleFetch}>Buscar Datos</button>}
      {loading && <div>Cargando...</div>}
      <div className='flex'>
        {facts.map((fact) => (
          <div key={fact.id}>{fact.text}</div>
        ))}
      </div>
    </div>
  )
}

export default Ejercicio2
