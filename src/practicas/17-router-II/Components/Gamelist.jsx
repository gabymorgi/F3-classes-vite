import { List, ListItem } from "../UI/List"
import { useEffect, useState } from "react"
import NewGameForm from "./NewGameForm"
import Card from "../UI/Card"
import { Link } from "react-router-dom"

const GameList = (props) => {
  const [games, setGames] = useState([])
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
