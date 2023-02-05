import { Link, Outlet, createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ConfigProvider, Layout, Menu, theme } from 'antd'
import { TSClass2 } from '../ts/02-jsxMotivation/App';
import Components from '../ts/04-components/App';
import Estilos from '../ts/05-estilos/App';
import Keys from '../ts/06-keys/App';
import State from '../ts/07-state/App';
import Forms from '../ts/08-forms/App';
import Repaso from '../ts/10-repaso/App';
import UseEffect from '../ts/13-useEffect/App';
import Fetch from '../ts/14-fetch/App';
import Memo from '../ts/15-memo/App';
import Router from '../ts/16-router/App';
import Testing from '../ts/17-testing/App';
import Context from '../ts/19-context/App';
import LocalStorage from '../ts/20-localStorage/App';
import Reducer from '../ts/21-reducer/App';
import CustomHooks from '../ts/22-customHooks/App';
import UseRef from '../ts/25-useRef/App';

const { darkAlgorithm } = theme;

const routesData = [
  {
    path: 'ts',
    name: 'TS',
    sub: [
      {
        path: '02',
        name: 'JSX',
        component: <TSClass2 />,
      },{
        path: '04',
        name: 'Components',
        component: <Components />,
      },{
        path: '05',
        name: 'Estilos',
        component: <Estilos />,
      },{
        path: '06',
        name: 'Keys',
        component: <Keys />,
      },{
        path: '07',
        name: 'State',
        component: <State />,
      },{
        path: '08',
        name: 'Forms',
        component: <Forms />,
      },{
        path: '10',
        name: 'Repaso',
        component: <Repaso />,
      },{
        path: '13',
        name: 'useEffect',
        component: <UseEffect />,
      },{
        path: '14',
        name: 'fetch',
        component: <Fetch />,
      },{
        path: '15',
        name: 'memo',
        component: <Memo />,
      },{
        path: '16',
        name: 'router',
        component: <Router />,
      },{
        path: '17',
        name: 'testing',
        component: <Testing game='Cave Story' />,
      },{
        path: '19',
        name: 'context',
        component: <Context />,
      },{
        path: '20',
        name: 'localStorage',
        component: <LocalStorage />,
      },{
        path: '21',
        name: 'reducer',
        component: <Reducer />,
      },{
        path: '22',
        name: 'customHooks',
        component: <CustomHooks />,
      },{
        path: '25',
        name: 'useRef',
        component: <UseRef />,
      },
    ],
  },
]

const MainLayout = () => {
  return (
    <Layout className='min-h-full'>
      <Layout.Sider trigger={null}>
        <div className='flex p-10 items-center'>
          <img src="/sburb.svg" width="50px" height="50px" alt='Sburb' />
          FE3
        </div>
        <Menu
          theme='dark'
          mode='inline'
          items={routesData.map((r) => ({
            key: r.path,
            label: r.sub ? r.name : <Link to={r.path}>{r.name}</Link>,
            children: r.sub?.map((s) => ({
              key: s.path,
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

const router = createBrowserRouter([{
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
}]
  
)

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
        }
      }}
    >
    <RouterProvider router={router} /> 
    </ConfigProvider>
  )
}

export default MainRoutes
