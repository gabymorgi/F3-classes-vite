import React from 'react'

const Calculator = (props) => {
  const [value, setValue] = React.useState('')

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const sumar = () => {
    props.dispatchResult({ type: 'sumar', payload: Number(value) })
  }

  const restar = () => {
    props.dispatchResult({ type: 'restar', payload: Number(value) })
  }

  const multiplicar = () => {
    props.dispatchResult({ type: 'multiplicar', payload: Number(value) })
  }

  const dividir = () => {
    props.dispatchResult({ type: 'dividir', payload: Number(value) })
  }

  const reset = () => {
    props.dispatchResult({ type: 'reset' })
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
