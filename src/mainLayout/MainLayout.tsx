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

const JsJSX = lazy(() => import('../js/02-jsxMotivation/App.jsx'))
const JsComponents = lazy(() => import('../js/04-components/App.jsx'))
const JsEstilos = lazy(() => import('../js/05-estilos/App.jsx'))
const JsKeys = lazy(() => import('../js/06-keys/App.jsx'))
const JsStateI = lazy(() => import('../js/07-state-I/App.jsx'))
const JsStateII = lazy(() => import('../js/08-state-II/App.jsx'))
const JsForms = lazy(() => import('../js/09-forms/App.jsx'))
const JsRepaso = lazy(() => import('../js/10-repaso/App.jsx'))
const JsUseEffect = lazy(() => import('../js/13-useEffect/App.jsx'))
const JsFetch = lazy(() => import('../js/14-fetch/App.jsx'))
const JsMemo = lazy(() => import('../js/15-memo/App.jsx'))
const JsRouterI = lazy(
  () => import('../js/16-router-I/AppWithHooks.jsx')
)
const JsRouterII = lazy(() => import('../js/17-router-II/App.jsx'))
const JsTesting = lazy(() => import('../js/18-testing/App.jsx'))
const JsContext = lazy(() => import('../js/19-context/App.jsx'))
const JsLocalStorage = lazy(
  () => import('../js/20-localStorage/App.jsx')
)
const JsReducer = lazy(() => import('../js/21-reducer/App.jsx'))
const JsCustomHooks = lazy(
  () => import('../js/22-customHooks/App.jsx')
)
const JsUseRef = lazy(() => import('../js/25-useRef/App.jsx'))

const PractJSX = lazy(
  () => import('../practicas/02-jsxMotivation/App.jsx')
)
const PractEntorno = lazy(
  () => import('../practicas/03-entorno/App.jsx')
)
const PractComponents = lazy(
  () => import('../practicas/04-components/App.jsx')
)
const PractEstilos = lazy(
  () => import('../practicas/05-estilos/App.jsx')
)
const PractKeys = lazy(() => import('../practicas/06-keys/App.jsx'))
const PractStateI = lazy(
  () => import('../practicas/07-state-I/App.jsx')
)
const PractStateII = lazy(
  () => import('../practicas/08-state-II/App.jsx')
)
const PractForms = lazy(() => import('../practicas/09-forms/App.jsx'))
const PractUseEffect = lazy(
  () => import('../practicas/13-useEffect/App.jsx')
)
const PractFetch = lazy(() => import('../practicas/14-fetch/App.jsx'))
const PractMemo = lazy(() => import('../practicas/15-memo/App.jsx'))
const PractRouterI = lazy(
  () => import('../practicas/16-router-I/App.jsx')
)
const PractRouterII = lazy(
  () => import('../practicas/17-router-II/App.jsx')
)
const PractTesting = lazy(
  () => import('../practicas/18-testing/App.jsx')
)
const PractContext = lazy(
  () => import('../practicas/19-context/App.jsx')
)
const PractLocalStorage = lazy(
  () => import('../practicas/20-localStorage/App.jsx')
)
const PractReducer = lazy(
  () => import('../practicas/21-reducer/App.jsx')
)
const PractCustomHooks = lazy(
  () => import('../practicas/22-customHooks/App.jsx')
)
const PractUseRef = lazy(
  () => import('../practicas/25-useRef/App.jsx')
)

const TsJSX = lazy(() => import('../ts/02-jsxMotivation/App'))
const TsComponents = lazy(() => import('../ts/04-components/App'))
const TsEstilos = lazy(() => import('../ts/05-estilos/App'))
const TsKeys = lazy(() => import('../ts/06-keys/App'))
const TsStateI = lazy(() => import('../ts/07-state-I/App'))
const TsStateII = lazy(() => import('../ts/08-state-II/App'))
const TsForms = lazy(() => import('../ts/09-forms/App'))
const TsRepaso = lazy(() => import('../ts/10-repaso/App'))
const TsUseEffect = lazy(() => import('../ts/13-useEffect/App'))
const TsFetch = lazy(() => import('../ts/14-fetch/App'))
const TsMemo = lazy(() => import('../ts/15-memo/App'))
const TsRouterI = lazy(() => import('../ts/16-router-I/App'))
const TsRouterII = lazy(() => import('../ts/17-router-II/App'))
const TsTesting = lazy(() => import('../ts/18-testing/App'))
const TsContext = lazy(() => import('../ts/19-context/App'))
const TsLocalStorage = lazy(() => import('../ts/20-localStorage/App'))
const TsReducer = lazy(() => import('../ts/21-reducer/App'))
const TsCustomHooks = lazy(() => import('../ts/22-customHooks/App'))
const TsUseRef = lazy(() => import('../ts/25-useRef/App'))

const AppClase = lazy(() => import('../clase/App.jsx'))

const { darkAlgorithm } = theme

type IRoute = {
  path: string
  name: string
  sub?: IRoute[]
  component?: JSX.Element
}

const routesData: IRoute[] = [
  {
    path: 'clase',
    name: 'Clase',
    component: <AppClase />,
  },
  {
    path: 'js',
    name: 'JS',
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
    path: 'ts',
    name: 'TS',
    sub: [
      {
        path: '02',
        name: 'JSX',
        component: <TsJSX />,
      },
      {
        path: '04',
        name: 'Components',
        component: <TsComponents />,
      },
      {
        path: '05',
        name: 'Estilos',
        component: <TsEstilos />,
      },
      {
        path: '06',
        name: 'Keys',
        component: <TsKeys />,
      },
      {
        path: '07',
        name: 'State I',
        component: <TsStateI />,
      },
      {
        path: '08',
        name: 'State II',
        component: <TsStateII />,
      },
      {
        path: '09',
        name: 'Forms',
        component: <TsForms />,
      },
      {
        path: '10',
        name: 'Repaso',
        component: <TsRepaso />,
      },
      {
        path: '13',
        name: 'useEffect',
        component: <TsUseEffect />,
      },
      {
        path: '14',
        name: 'fetch',
        component: <TsFetch />,
      },
      {
        path: '15',
        name: 'memo',
        component: <TsMemo />,
      },
      {
        path: '16',
        name: 'router I',
        component: <TsRouterI />,
      },
      {
        path: '17',
        name: 'router II',
        component: <TsRouterII />,
      },
      {
        path: '18',
        name: 'testing',
        component: <TsTesting game='Cave Story' />,
      },
      {
        path: '19',
        name: 'context',
        component: <TsContext />,
      },
      {
        path: '20',
        name: 'localStorage',
        component: <TsLocalStorage />,
      },
      {
        path: '21',
        name: 'reducer',
        component: <TsReducer />,
      },
      {
        path: '22',
        name: 'customHooks',
        component: <TsCustomHooks />,
      },
      {
        path: '25',
        name: 'useRef',
        component: <TsUseRef />,
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
  console.log(
    routesData.map((r) => ({
      key: r.path,
      label: r.sub ? r.name : <Link to={r.path}>{r.name}</Link>,
      children:
        !r.component &&
        r.sub?.map((s) => ({
          key: `${r.path}-${s.path}`,
          label: <Link to={`${r.path}/${s.path}`}>{s.name}</Link>,
        })),
    }))
  )
  return (
    <Layout className='min-h-full'>
      <Layout.Sider className='max-h-full overflow-y' trigger={null}>
        <div className='flex p-10 items-center'>
          <img
            src='/sburb.svg'
            width='50px'
            height='50px'
            alt='Sburb'
          />
          FE3
        </div>
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
                label: (
                  <Link to={`${r.path}/${s.path}`}>{s.name}</Link>
                ),
              })),
          }))}
        />
      </Layout.Sider>
      <Layout>
        <Layout.Content className='p-16'>
          <Suspense
            fallback={
              <FullScreenSpinner spinning tip='Cargando...' />
            }
          >
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
          colorLink: '#80D6FF',
          colorLinkHover: '#4DC4FF',
          colorLinkActive: '#1AB2FF',
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
