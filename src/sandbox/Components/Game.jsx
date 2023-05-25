import { useState } from "react"
import Card from "../UI/Card"

const Game = (props) => {
  const [isTrue, setIsTrue] = useState(false)
  function handleComprar() {
    props.onBuy(props.game)
  }

  function toggleIsTrue() {
    setIsTrue(!isTrue)
  }

  function handleDelete() {
    props.onDelete(props.game)
  }
  return (
    <Card title={props.game.name}>
      <img width="100%" src={props.game.imgUrl} alt={props.game.name} />
      <button
        onClick={handleComprar}
      >
        Comprar
      </button>
      <button onClick={handleDelete}>
        Delete from Chart
      </button>
      <button onClick={toggleIsTrue}>
        {isTrue ? "Es True" : "Es False"}
      </button>
    </Card>
  )
}

export default Game
