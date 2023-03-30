import { useContext } from "react"
import { CountContext } from "../contexts/CountContext"

function CardConContext() {
  const value = useContext(CountContext)

  function handleClick() {
    value.incrementar()
  }

  console.log("card con context", value)
  return (
    <div>
      soy una card {value.number}
      <button onClick={handleClick}>Increment</button>
    </div>
  )
}

export default CardConContext
