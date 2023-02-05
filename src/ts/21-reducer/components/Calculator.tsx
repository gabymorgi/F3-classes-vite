import React from 'react'
import { actionI, actionTypes } from '../App'

interface CalculatorProps {
  dispatchResult: React.Dispatch<actionI>
}

const Calculator = (props: CalculatorProps) => {
  const [value, setValue] = React.useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const sumar = () => {
    props.dispatchResult({ type: actionTypes.sumar, payload: Number(value) })
  }

  const restar = () => {
    props.dispatchResult({ type: actionTypes.restar, payload: Number(value) })
  }

  const multiplicar = () => {
    props.dispatchResult({ type: actionTypes.multiplicar, payload: Number(value) })
  }

  const dividir = () => {
    props.dispatchResult({ type: actionTypes.dividir, payload: Number(value) })
  }

  const reset = () => {
    props.dispatchResult({ type: actionTypes.reset })
  }


  return (
    <div className='card flex-column'>
      <input type='string' value={value} onChange={handleChange} />
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
