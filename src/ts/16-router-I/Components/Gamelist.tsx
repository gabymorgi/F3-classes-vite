import { List, ListItem } from '../UI/List'
import { GameI } from '../../../fakeApi/types'
import { useEffect, useState } from 'react'
import Card from '../UI/Card'

interface GameListProps {
  onBuy: (game: GameI) => void
}

const GameList = (props: GameListProps) => {
  const [games, setGames] = useState<GameI[]>([])
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
