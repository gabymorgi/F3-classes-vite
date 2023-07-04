import { useState } from 'react'
import { getId } from './utils/idUtils'
import Chart from './Components/Chart'
import GameList from './Components/Gamelist'
import NewGameForm from './Components/NewGameForm'
import GameDetail from './Components/GameDetail'
import { Outlet, Route, Routes } from 'react-router-dom'
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

  return (
    <>
      <Header />
      {/**no uso browser routes porque ya esta en main layout */}
      <Routes>
        <Route path='/' element={<GameList onBuy={handleBuy} />} />
        <Route
          path='/chart'
          element={<Chart chart={chart} onDelete={handleDelete} />}
        />
        <Route
          path='/games'
          element={
            <div>
              <h1>Games</h1>
              <Outlet />
            </div>
          }
        >
          {/* a diferencia del element que tiene <Outlet />,
              que se muestra en todas las subrutas,
              el element con index se muestra solo cuando la ruta es exacta "/games"
          */}
          <Route index element={<div>index page</div>} />
          <Route path='detail' element={<GameDetail />} />
          <Route path='create' element={<NewGameForm />} />
        </Route>
        <Route
          path='/protected'
          element={
            <ProtectedElement>This element is protected :p</ProtectedElement>
          }
        />
        {/* aca solo entra si no hay ninguna ruta que matchee,
            independientemente del orden */}
        <Route path='*' element={<div>Not Found</div>} />
      </Routes>
    </>
  )
}

export default App
