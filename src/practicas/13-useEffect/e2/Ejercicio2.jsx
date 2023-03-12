import { useState } from "react"
import TestComponent from "./TestComponent"

function Ejercicio2() {
  const [isActive, setIsActive] = useState(false)
  return (
    <div>
        <button
          onClick={() => setIsActive(!isActive)}
        >
          Toggle Active
        </button>
      {!isActive ? (
        <TestComponent onCancel={() => setIsActive(false)} />
      ) : null}
    </div>
  )
}

export default Ejercicio2
