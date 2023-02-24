import { useState } from 'react'

const App = () => {
  const [cant, setCant] = useState(0)

  function handleSum() {
    setCant(cant + 1)
  }

  function handleSub() {
    setCant(cant - 1)
  }

  function handleMul() {
    setCant(cant * 2)
  }

  function handleDiv() {
    setCant(cant / 2)
  }

  function handleReset() {
    setCant(0)
  }

  return (
    <>
      <h1>Value {cant}</h1>
      <button onClick={handleSum}>+</button>
      <button onClick={handleSub}>-</button>
      <button onClick={handleMul}>*</button>
      <button onClick={handleDiv}>/</button>
      <button onClick={handleReset}>reset</button>
    </>
  )
}

export default App
