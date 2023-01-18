import { List, ListItem } from './UI/List'
import data from '../../fakeApi/data.json'
import Game from './Components/Game'
import { GameI } from '../../fakeApi/types'
import { useState } from 'react'
import { getId } from './utils/idUtils'
import ChartItem from './Components/ChartItem'
import Chart from './Components/Chart'
import Checkout from './Components/Checkout'

interface GamesChartItem {
  chartId: number
  game: GameI
}

const App = () => {
  const [chart, setChart] = useState<GamesChartItem[]>([])

  function handleBuy(game: GameI) {
    const chartItem: GamesChartItem = {
      chartId: getId(),
      game,
    }
    const newChart = [...chart, chartItem]
    setChart(newChart)
  }

  function handleDelete(chartId: number) {
    console.log("aqui")
    const newChart = chart.filter((item) => item.chartId !== chartId)
    setChart(newChart)
  }
  return (
    <>
      <h1>Chart ({chart.length})</h1>
      <Chart chart={chart} onDelete={handleDelete} />
      {chart.length > 0 ? (
        <>
          <hr />
          <Checkout />
        </>
      ) : null}
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
