import { useContext } from "react"
import { CountContext } from "../contexts/CountContext"

function CardSinContext() {
  const value = useContext(CountContext)

  console.log("card sin context", value)
  return (
    <div>
      soy una card sin context :(
    </div>
  )
}

export default CardSinContext
