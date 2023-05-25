import { useState } from 'react';
import data from '../fakeApi/games.json'
import Game from './Components/Game';
import { List, ListItem } from './UI/List'

let uniqueId = 0

const App = () => {
  const [juegosComprados, setJuegosComprados] = useState([])

  function handleComprar(game) {
    console.log("comprar", game)
    const productoComprado = {
      id: uniqueId++,
      game: game,
    }
    setJuegosComprados([...juegosComprados, productoComprado])
  }

  function handleDelete(id) {
    console.log(id)
    const newJuegosComprados = juegosComprados.filter(
      (item) => item.id !== id
    )
    setJuegosComprados(newJuegosComprados)
  }

  console.log("render app", juegosComprados)

  return (
    <div className="flex-col">
      <h1>
        Juegos Comprados: {juegosComprados.length}
      </h1>
      <List>
        {juegosComprados.map((item) => {
          return (
            <ListItem key={item.id}>
              <div id={item.id}>
                <Game
                  game={item.game}
                  onBuy={handleComprar}
                  onDelete={() => handleDelete(item.id)}
                />
              </div>
            </ListItem>
          )
        })}
      </List>
      <hr />
      <h1>Lista de lo juegito</h1>
      <List>
        {data.map((item) => {
          return (
            <ListItem key={item.id}>
              <div id={item.id}>
                <Game game={item} onBuy={handleComprar} onDelete={() => handleDelete(item.id)} />
              </div>
            </ListItem>
          )
        })}
      </List>
    </div>
  );
};

export default App;