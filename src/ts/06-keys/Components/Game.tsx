import Card from "../UI/Card"

interface GameProps {
  game: {
    name: string;
    imgUrl: string;
  }
}

const Game = (props: GameProps) => {
  return (
    <Card title={props.game.name}>
      <img width="100%" src={props.game.imgUrl} alt={props.game.name} />
    </Card>
  )
}

export default Game
