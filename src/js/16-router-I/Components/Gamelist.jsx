import { List, ListItem } from '../UI/List'
import { useEffect, useState } from 'react'
import Card from '../UI/Card'

const GameList = (props) => {
  const [games, setGames] = useState([])
  async function fetchGames() {
    const response = await (await fetch('/api/games')).json()
    setGames(response)
  }
  useEffect(() => {
    fetchGames()
  }, [])

  return (
    <List>
      {games.map((item) => {
        return (
          <ListItem key={item.id}>
            <Card title={item.name}>
              <img width='100%' src={item.imgUrl} alt={item.name} />
              <button onClick={() => props.onBuy(item)}>
                Comprar
              </button>
            </Card>
          </ListItem>
        )
      })}
    </List>
  )
}

export default GameList
