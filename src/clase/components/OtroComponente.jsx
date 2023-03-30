import { useContext } from "react"
import { CountContext } from "../contexts/CountContext"

function OtroComponente() {
  const { number, decrementar } = useContext(CountContext)
  return (
    <div>
      otro componente {number}
      <button onClick={decrementar}>Decrementar</button>
    </div>
  )
}

export default OtroComponente
