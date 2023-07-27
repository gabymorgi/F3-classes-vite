import { Suspense } from 'react'
import {
  Link,
  Outlet,
  createBrowserRouter,
  RouterProvider,
  useLocation,
} from 'react-router-dom'
import { ConfigProvider, Layout, Menu, Spin, theme } from 'antd'
import styled from 'styled-components'
import Readme from './Readme.js'
import { routesData } from './routesData.js'

const { darkAlgorithm } = theme

const FullScreenSpinner = styled(Spin)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Sider = styled(Layout.Sider)`
  && {
    position: sticky;
    top: 0;
  }
`

const MainLayout = () => {
  const location = useLocation()

  return (
    <Layout className='min-h-full'>
      <Sider className='max-h-full overflow-y' trigger={null}>
        <Link to='/' className='flex p-16 items-center'>
          <img src='/sburb.svg' width='50px' height='50px' alt='Sburb' />
          FE3
        </Link>
        <Menu
          theme='dark'
          mode='inline'
          selectedKeys={[location.pathname]}
          defaultOpenKeys={[location.pathname.match(/^\/\w+/)?.[0] || '']}
          items={routesData.map((r) => ({
            key: `/${r.path}`,
            label: r.sub ? r.name : <Link to={r.path}>{r.name}</Link>,
            children:
              !r.component &&
              r.sub?.map((s) => ({
                key: `/${r.path}/${s.path}`,
                label: <Link to={`${r.path}/${s.path}`}>{s.name}</Link>,
              })),
          }))}
        />
      </Sider>
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
        element: <Readme default='/README.md' />,
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
          fontSize: 20,
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
