import { Suspense, lazy } from 'react'
import {
  Link,
  Outlet,
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import { ConfigProvider, Layout, Menu, Spin, theme } from 'antd'
import styled from 'styled-components'
import Readme from './Readme.js'

const JsJSX = lazy(() => import('../clases/02-JSX/App.jsx'))
const JsComponents = lazy(() => import('../clases/04-components/App.jsx'))
const JsEstilos = lazy(() => import('../clases/05-estilos/App.jsx'))
const JsKeys = lazy(() => import('../clases/06-keys/App.jsx'))
const JsStateI = lazy(() => import('../clases/07-state-I/App.jsx'))
const JsStateII = lazy(() => import('../clases/08-state-II/App.jsx'))
const JsForms = lazy(() => import('../clases/09-forms/App.jsx'))
const JsRepaso = lazy(() => import('../clases/10-repaso/App.jsx'))
const JsUseEffect = lazy(() => import('../clases/13-useEffect/App.jsx'))
const JsFetch = lazy(() => import('../clases/14-fetch/App.jsx'))
const JsMemo = lazy(() => import('../clases/15-memo/App.jsx'))
const JsRouterI = lazy(() => import('../clases/16-router-I/AppWithComponents.jsx'))
const JsRouterII = lazy(() => import('../clases/17-router-II/App.jsx'))
const JsTesting = lazy(() => import('../clases/18-testing/App.jsx'))
const JsContext = lazy(() => import('../clases/19-context/App.jsx'))
const JsLocalStorage = lazy(() => import('../clases/20-localStorage/App.jsx'))
const JsReducer = lazy(() => import('../clases/21-reducer/App.jsx'))
const JsCustomHooks = lazy(() => import('../clases/22-customHooks/App.jsx'))
const JsUseRef = lazy(() => import('../clases/25-useRef/App.jsx'))

const PractJSX = lazy(() => import('../practicas/02-jsxMotivation/App.jsx'))
const PractEntorno = lazy(() => import('../practicas/03-entorno/App.jsx'))
const PractComponents = lazy(() => import('../practicas/04-components/App.jsx'))
const PractEstilos = lazy(() => import('../practicas/05-estilos/App.jsx'))
const PractKeys = lazy(() => import('../practicas/06-keys/App.jsx'))
const PractStateI = lazy(() => import('../practicas/07-state-I/App.jsx'))
const PractStateII = lazy(() => import('../practicas/08-state-II/App.jsx'))
const PractForms = lazy(() => import('../practicas/09-forms/App.jsx'))
const PractUseEffect = lazy(() => import('../practicas/13-useEffect/App.jsx'))
const PractFetch = lazy(() => import('../practicas/14-fetch/App.jsx'))
const PractMemo = lazy(() => import('../practicas/15-memo/App.jsx'))
const PractRouterI = lazy(() => import('../practicas/16-router-I/AppWithComponents.jsx'))
const PractRouterII = lazy(() => import('../practicas/17-router-II/App.jsx'))
const PractTesting = lazy(() => import('../practicas/18-testing/App.jsx'))
const PractContext = lazy(() => import('../practicas/19-context/App.jsx'))
const PractLocalStorage = lazy(() => import('../practicas/20-localStorage/App.jsx'))
const PractReducer = lazy(() => import('../practicas/21-reducer/App.jsx'))
const PractCustomHooks = lazy(() => import('../practicas/22-customHooks/App.jsx'))
const PractUseRef = lazy(() => import('../practicas/25-useRef/App.jsx'))

const IntJSX = lazy(() => import('../integrador/02-JSX/App.jsx'))
const IntEntorno = lazy(() => import('../integrador/03-Entorno/App.jsx'))
const IntComponents = lazy(() => import('../integrador/04-Componentes/App.jsx'))
const IntEstilos = lazy(() => import('../integrador/05-Estilos/App.jsx'))
const IntKeys = lazy(() => import('../integrador/06-Keys/App.jsx'))
// const IntStateI = lazy(() => import('../integrador/07-state-I/App.jsx'))
// const IntStateII = lazy(() => import('../integrador/08-state-II/App.jsx'))
// const IntForms = lazy(() => import('../integrador/09-forms/App.jsx'))
// const IntUseEffect = lazy(() => import('../integrador/13-useEffect/App.jsx'))
// const IntFetch = lazy(() => import('../integrador/14-fetch/App.jsx'))
// const IntMemo = lazy(() => import('../integrador/15-memo/App.jsx'))
// const IntRouterI = lazy(() => import('../integrador/16-router-I/App.jsx'))
// const IntRouterII = lazy(() => import('../integrador/17-router-II/App.jsx'))
// const IntTesting = lazy(() => import('../integrador/18-testing/App.jsx'))
// const IntContext = lazy(() => import('../integrador/19-context/App.jsx'))
// const IntLocalStorage = lazy(() => import('../integrador/20-localStorage/App.jsx'))
// const IntReducer = lazy(() => import('../integrador/21-reducer/App.jsx'))
// const IntCustomHooks = lazy(() => import('../integrador/22-customHooks/App.jsx'))
// const IntUseRef = lazy(() => import('../integrador/25-useRef/App.jsx'))

const AppSandbox = lazy(() => import('../sandbox/App.jsx'))

const { darkAlgorithm } = theme

type IRoute = {
  path: string
  name: string
  sub?: IRoute[]
  component?: JSX.Element
}

const routesData: IRoute[] = [
  {
    path: 'sandbox',
    name: 'SandBox',
    component: <AppSandbox />,
  },
  {
    path: 'clases',
    name: 'Clases',
    sub: [
      {
        path: '02',
        name: 'JSX',
        component: <JsJSX />,
      },
      {
        path: '04',
        name: 'Components',
        component: <JsComponents />,
      },
      {
        path: '05',
        name: 'Estilos',
        component: <JsEstilos />,
      },
      {
        path: '06',
        name: 'Keys',
        component: <JsKeys />,
      },
      {
        path: '07',
        name: 'State I',
        component: <JsStateI />,
      },
      {
        path: '08',
        name: 'State II',
        component: <JsStateII />,
      },
      {
        path: '09',
        name: 'Forms',
        component: <JsForms />,
      },
      {
        path: '10',
        name: 'Repaso',
        component: <JsRepaso />,
      },
      {
        path: '13',
        name: 'useEffect',
        component: <JsUseEffect />,
      },
      {
        path: '14',
        name: 'fetch',
        component: <JsFetch />,
      },
      {
        path: '15',
        name: 'memo',
        component: <JsMemo />,
      },
      {
        path: '16',
        name: 'router I',
        component: <JsRouterI />,
      },
      {
        path: '17',
        name: 'router II',
        component: <JsRouterII />,
      },
      {
        path: '18',
        name: 'testing',
        component: <JsTesting game='Cave Story' />,
      },
      {
        path: '19',
        name: 'context',
        component: <JsContext />,
      },
      {
        path: '20',
        name: 'localStorage',
        component: <JsLocalStorage />,
      },
      {
        path: '21',
        name: 'reducer',
        component: <JsReducer />,
      },
      {
        path: '22',
        name: 'customHooks',
        component: <JsCustomHooks />,
      },
      {
        path: '25',
        name: 'useRef',
        component: <JsUseRef />,
      },
    ],
  },
  {
    path: 'practicas',
    name: 'Practicas',
    sub: [
      {
        path: '02',
        name: 'JSX',
        component: <PractJSX />,
      },
      {
        path: '03',
        name: 'Entorno',
        component: <PractEntorno />,
      },
      {
        path: '04',
        name: 'Components',
        component: <PractComponents />,
      },
      {
        path: '05',
        name: 'Estilos',
        component: <PractEstilos />,
      },
      {
        path: '06',
        name: 'Keys',
        component: <PractKeys />,
      },
      {
        path: '07',
        name: 'State I',
        component: <PractStateI />,
      },
      {
        path: '08',
        name: 'State II',
        component: <PractStateII />,
      },
      {
        path: '09',
        name: 'Forms',
        component: <PractForms />,
      },
      {
        path: '13',
        name: 'useEffect',
        component: <PractUseEffect />,
      },
      {
        path: '14',
        name: 'fetch',
        component: <PractFetch />,
      },
      {
        path: '15',
        name: 'memo',
        component: <PractMemo />,
      },
      {
        path: '16',
        name: 'router I',
        component: <PractRouterI />,
      },
      {
        path: '17',
        name: 'router II',
        component: <PractRouterII />,
      },
      {
        path: '18',
        name: 'testing',
        component: <PractTesting game='Cave Story' />,
      },
      {
        path: '19',
        name: 'context',
        component: <PractContext />,
      },
      {
        path: '20',
        name: 'localStorage',
        component: <PractLocalStorage />,
      },
      {
        path: '21',
        name: 'reducer',
        component: <PractReducer />,
      },
      {
        path: '22',
        name: 'customHooks',
        component: <PractCustomHooks />,
      },
      {
        path: '25',
        name: 'useRef',
        component: <PractUseRef />,
      },
    ],
  },
  {
    path: 'integrador',
    name: 'Integrador',
    sub: [
      {
        path: '02',
        name: 'JSX',
        component: <IntJSX />,
      },
      {
        path: '03',
        name: 'Entorno',
        component: <IntEntorno />,
      },
      {
        path: '04',
        name: 'Components',
        component: <IntComponents />,
      },
      {
        path: '05',
        name: 'Estilos',
        component: <IntEstilos />,
      },
      {
        path: '06',
        name: 'Keys',
        component: <IntKeys />,
      },
    ],
  },
]

const FullScreenSpinner = styled(Spin)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const MainLayout = () => {
  return (
    <Layout className='min-h-full'>
      <Layout.Sider className='max-h-full overflow-y' trigger={null}>
        <Link to='/' className='flex p-16 items-center'>
          <img src='/sburb.svg' width='50px' height='50px' alt='Sburb' />
          FE3
        </Link>
        <Menu
          theme='dark'
          mode='inline'
          items={routesData.map((r) => ({
            key: r.path,
            label: r.sub ? r.name : <Link to={r.path}>{r.name}</Link>,
            children:
              !r.component &&
              r.sub?.map((s) => ({
                key: `${r.path}-${s.path}`,
                label: <Link to={`${r.path}/${s.path}`}>{s.name}</Link>,
              })),
          }))}
        />
      </Layout.Sider>
      <Layout>
        <Layout.Content className='p-16'>
          <Suspense fallback={<FullScreenSpinner spinning tip='Cargando...' />}>
            <Outlet />
          </Suspense>
        </Layout.Content>
      </Layout>
    </Layout>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Readme />,
      },
      {
        path: 'doc/externalLinks.md',
        element: <div>asdfadsf</div>,
      },
      ...routesData.map((r) => ({
        path: `${r.path}/*`,
        element: r.component,
        children: !r.component
          ? r.sub?.map((s) => ({
              path: `${s.path}/*`,
              element: s.component,
            }))
          : undefined,
      })),
      {
        path: '*',
        element: <div>404</div>,
      },
    ],
  },
])

const MainRoutes = () => {
  return (
    <ConfigProvider
      theme={{
        algorithm: [darkAlgorithm],
        token: {
          colorPrimary: '#19FE1F',
          fontSize: 30,
          colorLink: '#6CFF80',
          colorLinkHover: '#4DFF61',
          colorLinkActive: '#2AFF3D',
        },
        components: {
          Menu: {
            fontSize: 16,
          },
        },
      }}
    >
      <RouterProvider router={router} />
    </ConfigProvider>
  )
}

export default MainRoutes
