import { useEffect, useState } from 'react'

function Ejercicio3() {
  const [fact, setFact] = useState('')

  async function handleFetch() {
    const response = await (
      await fetch('https://cat-fact.herokuapp.com/facts/random')
    ).json()
    setFact(
      response.text
    )
  }

  useEffect(() => {
    handleFetch()
  }, [])

  return (
    <div>
      <button onClick={handleFetch}>Siguiente hecho</button>
      <p>{fact}</p>
    </div>
  )
}

export default Ejercicio3
