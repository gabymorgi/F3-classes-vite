import { useState } from 'react'

const Calculator = (props) => {
  const [value, setValue] = useState('')

  // todas las funciones siguientes son """iguales""" en el sentido de que
  // todas llaman a la misma funcion reducer con el mismo tipo de props

  function sumar() {
    props.dispatchResult({ type: 'sumar', payload: Number(value) })
  }

  function restar() {
    props.dispatchResult({ type: 'restar', payload: Number(value) })
  }

  function multiplicar() {
    props.dispatchResult({ type: 'multiplicar', payload: Number(value) })
  }

  function dividir() {
    props.dispatchResult({ type: 'dividir', payload: Number(value) })
  }

  function reset() {
    props.dispatchResult({ type: 'reset' })
  }

  return (
    <div className='card flex-column'>
      <input
        type='string'
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <div className='flex'>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
        <button onClick={multiplicar}>*</button>
        <button onClick={dividir}>/</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  )
}

export default Calculator
