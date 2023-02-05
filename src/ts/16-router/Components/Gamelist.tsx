import { List, ListItem } from "../UI/List"
import Game from "./Game"
import { GameI } from "../../../fakeApi/types"
import { useEffect, useState } from "react"
import NewGameForm from "./NewGameForm"

interface GameListProps {
  onBuy: (game: GameI) => void
}

const GameList = (props: GameListProps) => {
  const [games, setGames] = useState<GameI[]>([])
  async function fetchGames() {
    const response = await (await fetch('/api/games')).json();
    setGames(response);
  }
  useEffect(() => {
    fetchGames();
  }, []);
  console.log(games);
  return (
    <>
      <NewGameForm onFinish={fetchGames} />
      <List>
        {games.map((item) => {
          return (
            <ListItem key={item.id}>
              <Game game={item} onBuy={props.onBuy} />
            </ListItem>
          )
        })}
      </List>
    </>
  )
}

export default GameList
