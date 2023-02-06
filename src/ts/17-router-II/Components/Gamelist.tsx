import { List, ListItem } from "../UI/List"
import { GameI } from "../../../fakeApi/types"
import { useEffect, useState } from "react"
import NewGameForm from "./NewGameForm"
import Card from "../UI/Card"
import { Link } from "react-router-dom"

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

  return (
    <>
      <NewGameForm onFinish={fetchGames} />
      <List>
        {games.map((item) => {
          return (
            <ListItem key={item.id}>
              <Card title={item.name}>
                <img width='100%' src={item.imgUrl} alt={item.name} />
                <button onClick={() => props.onBuy(item)}>
                  Comprar
                </button>
                <Link to={`./game/${item.id}`}>See details</Link>
              </Card>
            </ListItem>
          )
        })}
      </List>
    </>
  )
}

export default GameList
