import { GameI } from '../../fakeApi/types'
import { useState } from 'react'
import { getId } from './utils/idUtils'
import Chart from './Components/Chart'
import GameList from './Components/Gamelist'
import NewGameForm from './Components/NewGameForm'
import GameDetail from './Components/GameDetail'
import { createBrowserRouter, Outlet, Route, RouterProvider, Routes, useRoutes } from 'react-router-dom'
import Header from './Components/Header'

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

  // estas son rutas anidadas, por eso uso useRoutes + {router}
  // y no createBrowserRouter + <RouterProvider>
  // para ver ese ejemplo, mirar MainLayout (es mas complejo)
  const router = useRoutes([
    { path: '/', element: <GameList onBuy={handleBuy} /> },
    { path: '/chart', element: <Chart chart={chart} onDelete={handleDelete} /> },
    { path: '/games', element: <Outlet />, children: [
      { index: true, element: <div>index page</div>},
      { path: 'detail', element: <GameDetail /> },
      { path: 'create', element: <NewGameForm /> },
    ] },
    { path: '*', element: <div>Not Found</div> },
  ])

  return (
    <>
      <Header />
      {router}
    </>
  )
}

export default App
