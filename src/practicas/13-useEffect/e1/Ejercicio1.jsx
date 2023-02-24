import { useState } from "react"
import TestComponent from "./TestComponent"

function Ejercicio1() {
  const [inputValue, setInputValue] = useState('')
  const [submitedValue, setSubmitedValue] = useState('')
  return (
    <div>
      <input
        type='text'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        onClick={() => setSubmitedValue(inputValue)}
      >
        Submit
      </button>
      <TestComponent value={submitedValue} />
    </div>
  )
}

export default Ejercicio1
