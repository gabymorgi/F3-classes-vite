import { List, ListItem } from './UI/List'
import data from '../../fakeApi/data.json'
import Game from './Components/Game'
import { useState } from 'react'

const App = () => {
  const [cant, setCant] = useState(0)

  function handleBuy() {
    setCant(cant + 1)
  }

  function handleDelete() {
    setCant(cant - 1)
  }
  return (
    <>
      <h1>Elementos en el carrito ({cant})</h1>
      <button onClick={handleDelete}>Eliminar juego</button>
      <hr />
      <h1>Games</h1>
      <List>
        {data.map((item) => {
          return (
            <ListItem key={item.id}>
              <Game game={item} onBuy={handleBuy} />
            </ListItem>
          )
        })}
      </List>
    </>
  )
}

export default App
