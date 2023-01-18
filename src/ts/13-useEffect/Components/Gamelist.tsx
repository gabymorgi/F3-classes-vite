import { List, ListItem } from "../UI/List"
import Game from "./Game"
import data from '../../../fakeApi/data.json'
import { GameI } from "../../../fakeApi/types"

interface GameListProps {
  onBuy: (game: GameI) => void
}

const GameList = (props: GameListProps) => {
  return (
    <List>
      {data.map((item) => {
        return (
          <ListItem key={item.id}>
            <Game game={item} onBuy={props.onBuy} />
          </ListItem>
        )
      })}
    </List>
  )
}

export default GameList
