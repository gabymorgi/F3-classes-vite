import { List, ListItem } from "../UI/List"
import { useEffect, useState } from "react"
import FilterForm from "./FilterForm"
import Card from "../UI/Card"
import { Link, useSearchParams } from "react-router-dom"
import gamesData from '../../../fakeApi/data.json'

const GameList = (props) => {
  const [games, setGames] = useState([])
  const [searchParams] = useSearchParams()

  async function fetchGames() {
    const name = searchParams.get('name')
    const filteredGames = name ? gamesData.filter((game) => {
      return game.name.toLowerCase().includes(name.toLowerCase())
    }) : gamesData

    setGames(filteredGames);
  }
  useEffect(() => {
    fetchGames();
  }, [searchParams]);

  return (
    <>
      <FilterForm />
      <List>
        {games.map((item) => {
          return (
            <ListItem key={item.id}>
              <Card title={item.name}>
                <img width='100%' src={item.imgUrl} alt={item.name} />
                <button onClick={() => props.onBuy(item)}>
                  Comprar
                </button>
                <Link to={`./games/${item.id}`}>See details</Link>
              </Card>
            </ListItem>
          )
        })}
      </List>
    </>
  )
}

export default GameList
