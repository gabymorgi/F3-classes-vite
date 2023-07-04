import { List, ListItem } from './UI/List'
import data from '@/fakeApi/games.json'
import Game from './Components/Game'
import { useState } from 'react'

const App = () => {
  // useState es una funcion que retorna un array con dos elementos
  // el primer elemento es el valor del estado
  // el segundo elemento es una funcion que permite modificar el estado
  // nos garantiza que cada vez que el estado cambie, el componente se va a volver a renderizar
  const [cant, setCant] = useState(0)

  function handleBuy() {
    //los estados son inmutables, por lo que no podemos modificarlos directamente
    //cant = cant + 1 //esto no funciona
    setCant(cant + 1)
  }

  function handleDelete() {
    setCant(cant - 1)
  }

  function MultipleBuyWrong() {
    // esto no funciona porque los estados son asincronicos
    // no podemos esperar a que el estado cambie
    // React lo hace cuando le pinte
    setCant(cant + 1)
    setCant(cant + 2)
    setCant(cant + 3)
  }

  function MultipleBuyGood() {
    // setState puede recibir, en lugar de un valor, una funcion
    // esa funcion recibe como parametro el valor anterior del estado
    // y retorna el nuevo valor del estado
    // de esta forma, podemos asegurarnos de que el estado se va a actualizar correctamente
    // de todas formas, React hara un unico render
    // pero el estado quedara con el valor correcto
    setCant((prevCant) => prevCant + 1)
    setCant((prevCant) => prevCant + 2)
    setCant((prevCant) => prevCant + 3)
  }

  return (
    <>
      {/* el valor del estado se puede usar en cualquier parte del componente */}
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
