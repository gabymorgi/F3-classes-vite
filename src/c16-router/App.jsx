import React from 'react'
import { Routes, Route, Outlet } from 'react-router-dom'
import { List } from './routes/repos/List'
import { RepoDetail } from './routes/repos/RepoDetail'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<div>Home</div>} />
      <Route path="/repos" element={<div>Repos <Outlet /></div>}>
        <Route index element={<List />} />
        <Route path="index" element={<div>user index</div>} />
        <Route path=":id" element={<RepoDetail />} />
      </Route>
      <Route path="*" element={<div>Not Found</div>} />
    </Routes>
  )
}

export default App
