import { useState } from "react"
import Pedido from "./Pedido"

function Ejercicio4() {
  const [inProgress, setInProgress] = useState(false)
  return (
    <div>
      {!inProgress ? (
        <button
          onClick={() => setInProgress(true)}
        >
          Hacer pedido
        </button>
      ) : (
        <Pedido onCancel={() => setInProgress(false)} />
      )}
    </div>
  )
}

export default Ejercicio4
