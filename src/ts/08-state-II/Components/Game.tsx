import { GameI } from "../../../fakeApi/types";
import Card from "../UI/Card"

interface GameProps {
  game: {
    name: string;
    imgUrl: string;
  }
  onBuy: (game: GameI) => void;
}

const Game = (props: GameProps) => {
  return (
    <Card title={props.game.name}>
      <img width="100%" src={props.game.imgUrl} alt={props.game.name} />
      <button onClick={() => props.onBuy(props.game)}>Comprar</button>
    </Card>
  )
}

export default Game
