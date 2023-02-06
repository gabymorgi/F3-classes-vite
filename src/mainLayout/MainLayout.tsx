import {
  Link,
  Outlet,
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import { ConfigProvider, Layout, Menu, theme } from 'antd'

import JsJSX from '../js/02-jsxMotivation/App.jsx'
import JsComponents from '../js/04-components/App.jsx'
import JsEstilos from '../js/05-estilos/App.jsx'
import JsKeys from '../js/06-keys/App.jsx'
import JsStateI from '../js/07-state-I/App.jsx'
import JsStateII from '../js/08-state-II/App.jsx'
import JsForms from '../js/09-forms/App.jsx'
import JsRepaso from '../js/10-repaso/App.jsx'
import JsUseEffect from '../js/13-useEffect/App.jsx'
import JsFetch from '../js/14-fetch/App.jsx'
import JsMemo from '../js/15-memo/App.jsx'
import JsRouterI from '../js/16-router-I/App.jsx'
import JsRouterII from '../js/17-router-II/App.jsx'
import JsTesting from '../js/18-testing/App.jsx'
import JsContext from '../js/19-context/App.jsx'
import JsLocalStorage from '../js/20-localStorage/App.jsx'
import JsReducer from '../js/21-reducer/App.jsx'
import JsCustomHooks from '../js/22-customHooks/App.jsx'
import JsUseRef from '../js/25-useRef/App.jsx'

import TsJSX from '../ts/02-jsxMotivation/App'
import TsComponents from '../ts/04-components/App'
import TsEstilos from '../ts/05-estilos/App'
import TsKeys from '../ts/06-keys/App'
import TsStateI from '../ts/07-state-I/App'
import TsStateII from '../ts/08-state-II/App'
import TsForms from '../ts/09-forms/App'
import TsRepaso from '../ts/10-repaso/App'
import TsUseEffect from '../ts/13-useEffect/App'
import TsFetch from '../ts/14-fetch/App'
import TsMemo from '../ts/15-memo/App'
import TsRouterI from '../ts/16-router-I/App'
import TsRouterII from '../ts/17-router-II/App'
import TsTesting from '../ts/18-testing/App'
import TsContext from '../ts/19-context/App'
import TsLocalStorage from '../ts/20-localStorage/App'
import TsReducer from '../ts/21-reducer/App'
import TsCustomHooks from '../ts/22-customHooks/App'
import TsUseRef from '../ts/25-useRef/App'

const { darkAlgorithm } = theme

const routesData = [
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

const MainLayout = () => {
  return (
    <Layout className='min-h-full'>
      <Layout.Sider trigger={null}>
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
            children: r.sub?.map((s) => ({
              key: `${r.path}-${s.path}`,
              label: <Link to={`${r.path}/${s.path}`}>{s.name}</Link>,
            })),
          }))}
        />
      </Layout.Sider>
      <Layout>
        <Layout.Content className='p-16'>
          <Outlet />
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
        element: <div>&lt;- Selecciona una clase</div>,
      },
      ...routesData.map((r) => ({
        path: `${r.path}/*`,
        children: r.sub?.map((s) => ({
          path: `${s.path}/*`,
          element: s.component,
        })),
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
