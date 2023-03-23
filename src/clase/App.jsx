import { Routes, Route, Outlet } from 'react-router-dom'
import Header from './Components/Header'
import UserInfo from './Routes/info'
import ReposList from './Routes/repos'
import RepoDetail from './Routes/detail'
import WelcomePage from './Routes/_index'

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/'>
          <Route index element={<WelcomePage />} />
          <Route path='info' element={<UserInfo />} />
          <Route path='repos' element={<ReposList />} />
          <Route path='repos/:repoName' element={<RepoDetail />} />
          <Route path='*' element={<div>Not Found</div>} />
        </Route>
      </Routes>
    </>
  )
}
