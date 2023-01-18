import { GameI } from '../../fakeApi/types'
import { useState } from 'react'
import { getId } from './utils/idUtils'
import Chart from './Components/Chart'
import Checkout from './Components/Checkout'
import GameList from './Components/Gamelist'

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
      <GameList onBuy={handleBuy} />
    </>
  )
}

export default App
