import { List, ListItem } from "../UI/List"
import Game from "./Game"
import { GameI } from "../../../fakeApi/types"
import { useEffect, useState } from "react"

interface GameListProps {
  onBuy: (game: GameI) => void
}

const GameList = (props: GameListProps) => {
  const [games, setGames] = useState<GameI[]>([])
  useEffect(() => {
    async function fetchGames() {
      const response = await (await fetch('/api/games')).json();
      setGames(response);
    }
    fetchGames();
  }, []);
  return (
    <List>
      {games.map((item) => {
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
