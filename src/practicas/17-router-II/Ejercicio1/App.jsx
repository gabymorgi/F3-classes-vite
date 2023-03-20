import { Outlet, useRoutes } from 'react-router-dom'
import PostDetail from './Routes/posts/PostDetail'
import Index from './Routes/_index'

const App = () => {
  // estas son rutas anidadas, por eso uso useRoutes + {router}
  // y no createBrowserRouter + <RouterProvider>
  // para ver ese ejemplo, mirar MainLayout (es mas complejo)
  const router = useRoutes([
    { path: '/', element: <Index /> },
    { path: '/posts/:id', element: <PostDetail /> },
    { path: '*', element: <div>Not Found</div> },
  ])

  return (
    <>
      <h1>comment src\main.tsx L6 to make this to work</h1>
      {router}
    </>
  )
}

export default App
