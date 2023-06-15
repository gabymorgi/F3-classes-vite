import { useState } from 'react'
import { getId } from './utils/idUtils'
import Chart from './Components/Chart'
import GameList from './Components/Gamelist'
import NewGameForm from './Components/NewGameForm'
import GameDetail from './Components/GameDetail'
import { Outlet, useRoutes } from 'react-router-dom'
import Header from './Components/Header'
import ProtectedElement from './Components/ProtectedElement'

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
    {
      path: '/chart',
      element: <Chart chart={chart} onDelete={handleDelete} />,
    },
    {
      path: '/games',
      element: <Outlet />,
      children: [
        { index: true, element: <div>index page</div> },
        { path: 'detail', element: <GameDetail /> },
        { path: 'create', element: <NewGameForm /> },
      ],
    },
    {
      path: '/protected',
      element: (
        <ProtectedElement>This element is protected :p</ProtectedElement>
      ),
    },

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
