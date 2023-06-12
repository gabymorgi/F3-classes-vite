import { List, ListItem } from './UI/List'
import data from '@/fakeApi/games.json'
import Game from './Components/Game'
import { useState } from 'react'
import { getId } from './utils/idUtils'
import ChartItem from './Components/ChartItem'

const App = () => {
  const [chart, setChart] = useState([])

  function handleBuy(game) {
    // podemos tener en el carrito juegos repetidos
    // por lo que su id no es unico
    // para solucionar esto, le agregamos un id unico a cada juego
    // un id autoincremental es una opcion simple
    // pero no es la mejor opcion (el fast refresh no funciona bien con ids autoincrementales)
    const chartItem = {
      chartId: getId(),
      game,
    }
    const newChart = [...chart, chartItem]
    setChart(newChart)
  }

  function handleDelete(chartId) {
    //podemos usar filter para eliminar un elemento del array
    const newChart = chart.filter((item) => item.chartId !== chartId)
    setChart(newChart)
  }
  return (
    <>
      <h1>Chart ({chart.length})</h1>
      <div className='flex-col'>
        {chart.map((item) => {
          return (
            <ChartItem
              key={item.chartId}
              name={item.game.name}
              onDelete={() => handleDelete(item.chartId)}
            />
          )
        })}
      </div>
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

/**
  * que pasa si usamos index como key?
  * 
  * <Pedido key={0} pedido="Ham" /> // estado true
  * <Pedido key={1} pedido="ens" /> // estado false
  * <Pedido key={2} pedido="emp" /> // estado true
  * <Pedido key={3} pedido="ham" /> // estado false
  * 
  * y eliminamos el tercer elemento
  * 
  * <Pedido key={0} pedido="Ham" /> // estado true
  * <Pedido key={1} pedido="ens" /> // estado false
  * <Pedido key={2} pedido="ham" /> // estado true
  * 
  * React solo ve las keys. Y piensa que entre un estado y el otro
  * se elimino el componente con key={3}
  * y que el componente con key={2} cambio su prop pedido de emp a ham
  */
  /**
  * que pasa si usamos un numero aleatorio como key?
  * asumimos que estadisticamente no se repiten
  * por lo tanto no sucederia lo de arriba
  * 
  * <Pedido key={25} pedido="Ham" /> // estado true
  * <Pedido key={32} pedido="ens" /> // estado false
  * <Pedido key={69} pedido="nice" /> // estado true
  * <Pedido key={100} pedido="ham" /> // estado false
  * 
  * eliminamos el tercer elemento
  * el estado se modifica, ocurre un nuevo render,
  * por lo tanto, se vuelve a calcular el valor key
  * 
  * <Pedido key={10} pedido="Ham" /> // estado false
  * <Pedido key={48} pedido="ens" /> // estado false
  * <Pedido key={79} pedido="ham" /> // estado false
  * 
  * React ve que los componentes con key 25, 32, 68 y 100 se eliminaron
  * y que aparecieron nuevos componentes con key 10, 48 y 79
  * por eso se pierde el estado de los componentes que se eliminaron
  * y se resetean los nuevos
  * 
  * idealmente, los keys deberian ser unicas e ""intrinsecas"" a cada componente
*/
