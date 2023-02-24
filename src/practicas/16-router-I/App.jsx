import { Outlet, useRoutes } from 'react-router-dom'
import Header from './Components/Header'
import ExplorarIndex from './Routes/Explorar'

const App = () => {
  // estas son rutas anidadas, por eso uso useRoutes + {router}
  // y no createBrowserRouter + <RouterProvider>
  // para ver ese ejemplo, mirar MainLayout (es mas complejo)
  const router = useRoutes([
    { path: '/', element: <div>inicio</div> },
    { path: '/shorts', element: <div>shorts</div> },
    { path: '/suscripciones', element: <div>suscripciones</div> },
    {
      path: '/explorar',
      element: (
        <div>
          <h1>Explorar</h1>
          <Outlet />
        </div>
      ),
      children: [
        { index: true, element: <ExplorarIndex />},
        { path: 'tendencias', element: <div>tendencias</div> },
        { path: 'musica', element: <div>musica</div> },
        { path: 'peliculas', element: <div>peliculas</div> },
      ],
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
