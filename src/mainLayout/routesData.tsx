import { lazy } from 'react'

const ClassComponents = {
  jsx: {
    teoria: lazy(() => import('@/clases/03-JSX/teoria/App.jsx')),
    practica: lazy(() => import('@/clases/03-JSX/practica/App.jsx')),
    integrador: lazy(() => import('@/clases/03-JSX/integrador/App.jsx')),
  },
  components: {
    teoria: lazy(() => import('@/clases/04-components/teoria/App.jsx')),
    practica: lazy(() => import('@/clases/04-components/practica/App.jsx')),
    integrador: lazy(() => import('@/clases/04-components/integrador/App.jsx')),
  },
  estilos: {
    teoria: lazy(() => import('@/clases/05-estilos/teoria/App.jsx')),
    practica: lazy(() => import('@/clases/05-estilos/practica/App.jsx')),
    integrador: lazy(() => import('@/clases/05-estilos/integrador/App.jsx')),
  },
  keys: {
    teoria: lazy(() => import('@/clases/06-keys/teoria/App.jsx')),
    practica: lazy(() => import('@/clases/06-keys/practica/App.jsx')),
    integrador: lazy(() => import('@/clases/06-keys/integrador/App.jsx')),
  },
  stateI: {
    teoria: lazy(() => import('@/clases/07-state-I/teoria/App.jsx')),
    practica: lazy(() => import('@/clases/07-state-I/practica/App.jsx')),
    integrador: lazy(() => import('@/clases/07-state-I/integrador/App.jsx')),
  },
  stateII: {
    teoria: lazy(() => import('@/clases/08-state-II/teoria/App.jsx')),
    practica: lazy(() => import('@/clases/08-state-II/practica/App.jsx')),
    integrador: lazy(() => import('@/clases/08-state-II/integrador/App.jsx')),
  },
  forms: {
    teoria: lazy(() => import('@/clases/09-forms/teoria/App.jsx')),
    practica: lazy(() => import('@/clases/09-forms/practica/App.jsx')),
    integrador: lazy(() => import('@/clases/09-forms/integrador/App.jsx')),
  },
  repaso: lazy(() => import('@/clases/10-repaso/App.jsx')),
  useEffect: {
    teoria: lazy(() => import('@/clases/13-useEffect/teoria/App.jsx')),
    practica: lazy(() => import('@/clases/13-useEffect/practica/App.jsx')),
    integrador: lazy(() => import('@/clases/13-useEffect/integrador/App.jsx')),
  },
  fetch: {
    teoria: lazy(() => import('@/clases/14-fetch/teoria/App.jsx')),
    practica: lazy(() => import('@/clases/14-fetch/practica/App.jsx')),
    integrador: lazy(() => import('@/clases/14-fetch/integrador/App.jsx')),
  },
  memo: {
    teoria: lazy(() => import('@/clases/15-memo/teoria/App.jsx')),
    practica: lazy(() => import('@/clases/15-memo/practica/App.jsx')),
    integrador: lazy(() => import('@/clases/15-memo/integrador/App.jsx')),
  },
  routerI: {
    teoria: lazy(() => import('@/clases/16-router-I/teoria/AppWithComponents.jsx')),
    practica: lazy(() => import('@/clases/16-router-I/practica/AppWithComponents.jsx')),
    integrador: lazy(() => import('@/clases/16-router-I/integrador/AppWithComponents.jsx')),
  },
  routerII: {
    teoria: lazy(() => import('@/clases/17-router-II/teoria/App.jsx')),
    practica: lazy(() => import('@/clases/17-router-II/practica/App.jsx')),
    integrador: lazy(() => import('@/clases/17-router-II/integrador/App.jsx')),
  },
  testing: {
    teoria: lazy(() => import('@/clases/18-testing/teoria/App.jsx')),
    practica: lazy(() => import('@/clases/18-testing/practica/App.jsx')),
    integrador: lazy(() => import('@/clases/18-testing/integrador/App.jsx')),
  },
  context: {
    teoria: lazy(() => import('@/clases/19-context/teoria/App.jsx')),
    practica: lazy(() => import('@/clases/19-context/practica/App.jsx')),
    integrador: lazy(() => import('@/clases/19-context/integrador/App.jsx')),
  },
  localStorage: {
    teoria: lazy(() => import('@/clases/20-localStorage/teoria/App.jsx')),
    practica: lazy(() => import('@/clases/20-localStorage/practica/App.jsx')),
    integrador: lazy(() => import('@/clases/20-localStorage/integrador/App.jsx')),
  },  
  reducer: {
    teoria: lazy(() => import('@/clases/21-reducer/teoria/App.jsx')),
    practica: lazy(() => import('@/clases/21-reducer/practica/App.jsx')),
    integrador: lazy(() => import('@/clases/21-reducer/integrador/App.jsx')),
  },
  customHooks: {
    teoria: lazy(() => import('@/clases/22-customHooks/teoria/App.jsx')),
    practica: lazy(() => import('@/clases/22-customHooks/practica/App.jsx')),
    integrador: lazy(() => import('@/clases/22-customHooks/integrador/App.jsx')),
  },
  useRef: {
    teoria: lazy(() => import('@/clases/25-useRef/teoria/App.jsx')),
    practica: lazy(() => import('@/clases/25-useRef/practica/App.jsx')),
    integrador: lazy(() => import('@/clases/25-useRef/integrador/App.jsx')),
  },
}

const AppSandbox = lazy(() => import('@/sandbox/App.jsx'))

export type IRoute = {
  path: string
  name: string
  sub?: IRoute[]
  component?: JSX.Element
}

export const routesData: IRoute[] = [
  {
    path: 'sandbox',
    name: 'SandBox',
    component: <AppSandbox />,
  },
  {
    path: 'jsx',
    name: 'JSX',
    sub: [
      {
        path: 'teoria',
        name: 'Teoria',
        component: <ClassComponents.jsx.teoria />,
      },
      {
        path: 'practica',
        name: 'Practica',
        component: <ClassComponents.jsx.practica />,
      },
      {
        path: 'integrador',
        name: 'Integrador',
        component: <ClassComponents.jsx.integrador />,
      },
    ],
  },
  {
    path: 'components',
    name: 'Components',
    sub: [
      {
        path: 'teoria',
        name: 'Teoria',
        component: <ClassComponents.components.teoria />,
      },
      {
        path: 'practica',
        name: 'Practica',
        component: <ClassComponents.components.practica />,
      },
      {
        path: 'integrador',
        name: 'Integrador',
        component: <ClassComponents.components.integrador />,
      },
    ],
  },
  {
    path: 'styles',
    name: 'Estilos',
    sub: [
      {
        path: 'teoria',
        name: 'Teoria',
        component: <ClassComponents.estilos.teoria />,
      },
      {
        path: 'practica',
        name: 'Practica',
        component: <ClassComponents.estilos.practica />,
      },
      {
        path: 'integrador',
        name: 'Integrador',
        component: <ClassComponents.estilos.integrador />,
      },
    ],
  },
  {
    path: 'keys',
    name: 'Keys',
    sub: [
      {
        path: 'teoria',
        name: 'Teoria',
        component: <ClassComponents.keys.teoria />,
      },
      {
        path: 'practica',
        name: 'Practica',
        component: <ClassComponents.keys.practica />,
      },
      {
        path: 'integrador',
        name: 'Integrador',
        component: <ClassComponents.keys.integrador />,
      },
    ],
  },
  {
    path: 'state-i',
    name: 'State I',
    sub: [
      {
        path: 'teoria',
        name: 'Teoria',
        component: <ClassComponents.stateI.teoria />,
      },
      {
        path: 'practica',
        name: 'Practica',
        component: <ClassComponents.stateI.practica />,
      },
      {
        path: 'integrador',
        name: 'Integrador',
        component: <ClassComponents.stateI.integrador />,
      },
    ],
  },
  {
    path: 'state-ii',
    name: 'State II',
    sub: [
      {
        path: 'teoria',
        name: 'Teoria',
        component: <ClassComponents.stateII.teoria />,
      },
      {
        path: 'practica',
        name: 'Practica',
        component: <ClassComponents.stateII.practica />,
      },
      {
        path: 'integrador',
        name: 'Integrador',
        component: <ClassComponents.stateII.integrador />,
      },
    ],
  },
  {
    path: 'forms',
    name: 'Forms',
    sub: [
      {
        path: 'teoria',
        name: 'Teoria',
        component: <ClassComponents.forms.teoria />,
      },
      {
        path: 'practica',
        name: 'Practica',
        component: <ClassComponents.forms.practica />,
      },
      {
        path: 'integrador',
        name: 'Integrador',
        component: <ClassComponents.forms.integrador />,
      },
    ],
  },
  {
    path: 'rehearsal',
    name: 'Repaso',
    component: <ClassComponents.repaso />,
  },
  {
    path: 'effect',
    name: 'useEffect',
    sub: [
      {
        path: 'teoria',
        name: 'Teoria',
        component: <ClassComponents.useEffect.teoria />,
      },
      {
        path: 'practica',
        name: 'Practica',
        component: <ClassComponents.useEffect.practica />,
      },
      {
        path: 'integrador',
        name: 'Integrador',
        component: <ClassComponents.useEffect.integrador />,
      },
    ],
  },
  {
    path: 'fetch',
    name: 'fetch',
    sub: [
      {
        path: 'teoria',
        name: 'Teoria',
        component: <ClassComponents.fetch.teoria />,
      },
      {
        path: 'practica',
        name: 'Practica',
        component: <ClassComponents.fetch.practica />,
      },
      {
        path: 'integrador',
        name: 'Integrador',
        component: <ClassComponents.fetch.integrador />,
      },
    ],
  },
  {
    path: 'memo',
    name: 'useMemo',
    sub: [
      {
        path: 'teoria',
        name: 'Teoria',
        component: <ClassComponents.memo.teoria />,
      },
      {
        path: 'practica',
        name: 'Practica',
        component: <ClassComponents.memo.practica />,
      },
      {
        path: 'integrador',
        name: 'Integrador',
        component: <ClassComponents.memo.integrador />,
      },
    ],
  },
  {
    path: 'router-i',
    name: 'Router I',
    sub: [
      {
        path: 'teoria',
        name: 'Teoria',
        component: <ClassComponents.routerI.teoria />,
      },
      {
        path: 'practica',
        name: 'Practica',
        component: <ClassComponents.routerI.practica />,
      },
      {
        path: 'integrador',
        name: 'Integrador',
        component: <ClassComponents.routerI.integrador />,
      },
    ],
  },
  {
    path: 'router-ii',
    name: 'Router II',
    sub: [
      {
        path: 'teoria',
        name: 'Teoria',
        component: <ClassComponents.routerII.teoria />,
      },
      {
        path: 'practica',
        name: 'Practica',
        component: <ClassComponents.routerII.practica />,
      },
      {
        path: 'integrador',
        name: 'Integrador',
        component: <ClassComponents.routerII.integrador />,
      },
    ],
  },
  {
    path: 'testing',
    name: 'Testing',
    sub: [
      {
        path: 'teoria',
        name: 'Teoria',
        component: <ClassComponents.testing.teoria />,
      },
      {
        path: 'practica',
        name: 'Practica',
        component: <ClassComponents.testing.practica />,
      },
      {
        path: 'integrador',
        name: 'Integrador',
        component: <ClassComponents.testing.integrador />,
      },
    ],
  },
  {
    path: 'context',
    name: 'Context',
    sub: [
      {
        path: 'teoria',
        name: 'Teoria',
        component: <ClassComponents.context.teoria />,
      },
      {
        path: 'practica',
        name: 'Practica',
        component: <ClassComponents.context.practica />,
      },
      {
        path: 'integrador',
        name: 'Integrador',
        component: <ClassComponents.context.integrador />,
      },
    ],
  },
  {
    path: 'storage',
    name: 'localStorage',
    sub: [
      {
        path: 'teoria',
        name: 'Teoria',
        component: <ClassComponents.localStorage.teoria />,
      },
      {
        path: 'practica',
        name: 'Practica',
        component: <ClassComponents.localStorage.practica />,
      },
      {
        path: 'integrador',
        name: 'Integrador',
        component: <ClassComponents.localStorage.integrador />,
      },
    ],
  },
  {
    path: 'reducer',
    name: 'useReducer',
    sub: [
      {
        path: 'teoria',
        name: 'Teoria',
        component: <ClassComponents.reducer.teoria />,
      },
      {
        path: 'practica',
        name: 'Practica',
        component: <ClassComponents.reducer.practica />,
      },
      {
        path: 'integrador',
        name: 'Integrador',
        component: <ClassComponents.reducer.integrador />,
      },
    ],
  },
  {
    path: 'custom-hooks',
    name: 'customHooks',
    sub: [
      {
        path: 'teoria',
        name: 'Teoria',
        component: <ClassComponents.customHooks.teoria />,
      },
      {
        path: 'practica',
        name: 'Practica',
        component: <ClassComponents.customHooks.practica />,
      },
      {
        path: 'integrador',
        name: 'Integrador',
        component: <ClassComponents.customHooks.integrador />,
      },
    ],
  },
  {
    path: 'ref',
    name: 'useRef',
    sub: [
      {
        path: 'teoria',
        name: 'Teoria',
        component: <ClassComponents.useRef.teoria />,
      },
      {
        path: 'practica',
        name: 'Practica',
        component: <ClassComponents.useRef.practica />,
      },
      {
        path: 'integrador',
        name: 'Integrador',
        component: <ClassComponents.useRef.integrador />,
      },
    ],
  },
]