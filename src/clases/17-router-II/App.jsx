import { useState } from 'react'
import { getId } from './utils/idUtils'
import Chart from './Components/Chart'
import GameList from './Components/Gamelist'
import GameDetail from './Components/GameDetail'
import { Outlet, useRoutes } from 'react-router-dom'
import Header from './Components/Header'
import NewGameForm from './Components/NewGameForm'

const App = () => {
  const [chart, setChart] = useState([])

  function handleBuy(game) {
    const chartItem = {
      chartId: getId(),
      game,
    }
    const newChart = [...chart, chartItem]
    setChart(newChart)
  }

  function handleDelete(chartId) {
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
      // lo que pongamos luego de ":" es el nombre que tendra esa seccion de la url
      { path: ':id', element: <GameDetail /> },
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
