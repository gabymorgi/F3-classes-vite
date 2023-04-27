import { useState } from 'react'

const Calculadora = ({ amount, onEqual }) => {
  const [calculadora, setCalculadora] = useState(0)

  const aumentarCalculadora = () => {
    setCalculadora(calculadora + amount)
  }

  const disminuirCalculadora = () => {
    setCalculadora(calculadora - amount)
  }

  const resetearCalculadora = () => {
    setCalculadora(0)
  }

  const igualarCalculadora = () => {
    console.log(`El valor actual del calculadora es ${calculadora}`)
    onEqual(calculadora)
  }

  return (
    <div>
      <h2>Calculadora: {calculadora}</h2>
      <button onClick={aumentarCalculadora}>+</button>
      <button onClick={disminuirCalculadora}>-</button>
      <button onClick={resetearCalculadora}>Reset</button>
      <button onClick={igualarCalculadora}>=</button>
    </div>
  )
}

export default Calculadora
