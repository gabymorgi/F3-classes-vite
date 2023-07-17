import { List, ListItem } from "../UI/List"
import { useEffect, useState } from "react"
import FilterForm from "./FilterForm"
import Card from "../UI/Card"
import { Link, useSearchParams } from "react-router-dom"
import { fakeFetch } from '@/fakeApi/server'

const GameList = (props) => {
  const [games, setGames] = useState([])
  // useSearchParams nos permite acceder a los parametros de la url
  // a los que estan despues del "?"
  // no nos devuelve un objeto generico, sino un objeto de tipo URLSearchParams
  const [searchParams] = useSearchParams()

  async function fetchGames() {
    // searchParams es un poco raro de usar, pero tiene un metodo get
    const name = searchParams.get('name')
    const data = await (await fakeFetch(`/api/games`)).json()
    const filteredGames = name ? data.filter((game) => {
      return game.name.toLowerCase().includes(name.toLowerCase())
    }) : data

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
                {/* Fijate como construimos el link al detalle */}
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
