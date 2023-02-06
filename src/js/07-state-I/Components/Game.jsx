import Card from "../UI/Card"

const Game = (props) => {
  return (
    <Card title={props.game.name}>
      <img width="100%" src={props.game.imgUrl} alt={props.game.name} />
      <button onClick={() => props.onBuy()}>Comprar</button>
    </Card>
  )
}

export default Game
