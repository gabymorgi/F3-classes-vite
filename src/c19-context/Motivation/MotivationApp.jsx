import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Changuito } from './routes/Changuito'
import { Home } from './routes/Home'
import { List } from './routes/List'

const MotivationApp = () => {
  const [changuito, setChanguito] = React.useState([])

  const addToChanguito = (item) => {
    setChanguito([...changuito, item])
  }

  const removeFromChanguito = (item) => {
    setChanguito(changuito.filter((i) => i.id !== item.id))
  }

  return (
    <Routes>
      <Route path='/' element={<Home changuito={changuito} />}>
        <Route index element={<List onAdd={addToChanguito} />} />
        <Route
          path='/changuito'
          element={<Changuito changuito={changuito} onRemove={removeFromChanguito} />}
        />
      </Route>
    </Routes>
  )
}

export default MotivationApp
