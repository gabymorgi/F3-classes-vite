import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom'
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

const { darkAlgorithm } = theme;

const routes = [
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
          items={routes.map((r) => ({
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
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={
            <div>
              &lt;- Selecciona una clase
            </div>
          }/>
          {routes.map((r) => (
            <Route
              key={r.path}
              path={`${r.path}/*`}
            >
              {r.sub?.map((s) => (
                <Route key={s.path} path={`${s.path}/*`} element={s.component} />
              ))}
            </Route>
          ))}
          <Route path={`*`} element={<div>404</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </ConfigProvider>
  )
}

export default MainRoutes
