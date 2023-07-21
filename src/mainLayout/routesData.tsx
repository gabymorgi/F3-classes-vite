import { lazy } from 'react'
import Readme from './Readme'

const ClassComponents = {
  datos: {
    teoria: lazy(() => import('@/clases/01-datos/teoria/App.jsx')),
    practica: lazy(() => import('@/clases/01-datos/practica/App.jsx')),
    integrador: lazy(() => import('@/clases/01-datos/integrador/App.jsx')),
    readme: '/src/clases/01-datos/readme.md',
  },
  entorno: {
    teoria: lazy(() => import('@/clases/02-entorno/teoria/App.jsx')),
    practica: lazy(() => import('@/clases/02-entorno/practica/App.jsx')),
    integrador: lazy(() => import('@/clases/02-entorno/integrador/App.jsx')),
    readme: '/src/clases/02-entorno/readme.md',
  },
  jsx: {
    teoria: lazy(() => import('@/clases/03-JSX/teoria/App.jsx')),
    practica: lazy(() => import('@/clases/03-JSX/practica/App.jsx')),
    integrador: lazy(() => import('@/clases/03-JSX/integrador/App.jsx')),
    readme: '/src/clases/03-JSX/readme.md',
  },
  components: {
    teoria: lazy(() => import('@/clases/04-components/teoria/App.jsx')),
    practica: lazy(() => import('@/clases/04-components/practica/App.jsx')),
    integrador: lazy(() => import('@/clases/04-components/integrador/App.jsx')),
    readme: '/src/clases/04-components/readme.md',
  },
  estilos: {
    teoria: lazy(() => import('@/clases/05-estilos/teoria/App.jsx')),
    practica: lazy(() => import('@/clases/05-estilos/practica/App.jsx')),
    integrador: lazy(() => import('@/clases/05-estilos/integrador/App.jsx')),
    readme: '/src/clases/05-estilos/readme.md',
  },
  keys: {
    teoria: lazy(() => import('@/clases/06-keys/teoria/App.jsx')),
    practica: lazy(() => import('@/clases/06-keys/practica/App.jsx')),
    integrador: lazy(() => import('@/clases/06-keys/integrador/App.jsx')),
    readme: '/src/clases/06-keys/readme.md',
  },
  stateI: {
    teoria: lazy(() => import('@/clases/07-state-I/teoria/App.jsx')),
    practica: lazy(() => import('@/clases/07-state-I/practica/App.jsx')),
    integrador: lazy(() => import('@/clases/07-state-I/integrador/App.jsx')),
    readme: '/src/clases/07-state-I/readme.md',
  },
  stateII: {
    teoria: lazy(() => import('@/clases/08-state-II/teoria/App.jsx')),
    practica: lazy(() => import('@/clases/08-state-II/practica/App.jsx')),
    integrador: lazy(() => import('@/clases/08-state-II/integrador/App.jsx')),
    readme: '/src/clases/08-state-II/readme.md',
  },
  forms: {
    teoria: lazy(() => import('@/clases/09-forms/teoria/App.jsx')),
    practica: lazy(() => import('@/clases/09-forms/practica/App.jsx')),
    integrador: lazy(() => import('@/clases/09-forms/integrador/App.jsx')),
    readme: '/src/clases/09-forms/readme.md',
  },
  repaso: {
    teoria: lazy(() => import('@/clases/10-repaso/App.jsx')),
    readme: '/src/clases/10-repaso/readme.md',
  },
  useEffect: {
    teoria: lazy(() => import('@/clases/11-useEffect/teoria/App.jsx')),
    practica: lazy(() => import('@/clases/11-useEffect/practica/App.jsx')),
    integrador: lazy(() => import('@/clases/11-useEffect/integrador/App.jsx')),
    readme: '/src/clases/11-useEffect/readme.md',
  },
  fetch: {
    teoria: lazy(() => import('@/clases/12-fetch/teoria/App.jsx')),
    practica: lazy(() => import('@/clases/12-fetch/practica/App.jsx')),
    integrador: lazy(() => import('@/clases/12-fetch/integrador/App.jsx')),
    readme: '/src/clases/12-fetch/readme.md',
  },
  memo: {
    teoria: lazy(() => import('@/clases/13-memo/teoria/App.jsx')),
    practica: lazy(() => import('@/clases/13-memo/practica/App.jsx')),
    integrador: lazy(() => import('@/clases/13-memo/integrador/App.jsx')),
    readme: '/src/clases/13-memo/readme.md',
  },
  routerI: {
    teoria: lazy(() => import('@/clases/14-router-I/teoria/AppWithComponents.jsx')),
    practica: lazy(() => import('@/clases/14-router-I/practica/AppWithComponents.jsx')),
    integrador: lazy(() => import('@/clases/14-router-I/integrador/App.jsx')),
    readme: '/src/clases/14-router-I/readme.md',
  },
  routerII: {
    teoria: lazy(() => import('@/clases/15-router-II/teoria/App.jsx')),
    practica: lazy(() => import('@/clases/15-router-II/practica/App.jsx')),
    integrador: lazy(() => import('@/clases/15-router-II/integrador/App.jsx')),
    readme: '/src/clases/15-router-II/readme.md',
  },
  testing: {
    teoria: lazy(() => import('@/clases/16-testing/teoria/App.jsx')),
    practica: lazy(() => import('@/clases/16-testing/practica/App.jsx')),
    integrador: lazy(() => import('@/clases/16-testing/integrador/App.jsx')),
    readme: '/src/clases/16-testing/readme.md',
  },
  context: {
    teoria: lazy(() => import('@/clases/17-context/teoria/App.jsx')),
    practica: lazy(() => import('@/clases/17-context/practica/App.jsx')),
    integrador: lazy(() => import('@/clases/17-context/integrador/App.jsx')),
    readme: '/src/clases/17-context/readme.md',
  },
  localStorage: {
    teoria: lazy(() => import('@/clases/18-localStorage/teoria/App.jsx')),
    practica: lazy(() => import('@/clases/18-localStorage/practica/App.jsx')),
    integrador: lazy(() => import('@/clases/18-localStorage/integrador/App.jsx')),
    readme: '/src/clases/18-localStorage/readme.md',
  },  
  reducer: {
    teoria: lazy(() => import('@/clases/19-reducer/teoria/App.jsx')),
    practica: lazy(() => import('@/clases/19-reducer/practica/App.jsx')),
    integrador: lazy(() => import('@/clases/19-reducer/integrador/App.jsx')),
    readme: '/src/clases/19-reducer/readme.md',
  },
  customHooks: {
    teoria: lazy(() => import('@/clases/20-customHooks/teoria/App.jsx')),
    practica: lazy(() => import('@/clases/20-customHooks/practica/App.jsx')),
    integrador: lazy(() => import('@/clases/20-customHooks/integrador/App.jsx')),
    readme: '/src/clases/20-customHooks/readme.md',
  },
  useRef: {
    teoria: lazy(() => import('@/clases/21-useRef/teoria/App.jsx')),
    practica: lazy(() => import('@/clases/21-useRef/practica/App.jsx')),
    integrador: lazy(() => import('@/clases/21-useRef/integrador/App.jsx')),
    readme: '/src/clases/21-useRef/readme.md',
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
    path: 'datos',
    name: 'Datos',
    sub: [
      {
        path: 'teoria',
        name: 'Teoria',
        component: <ClassComponents.datos.teoria />,
      },
      {
        path: 'practica',
        name: 'Practica',
        component: <ClassComponents.datos.practica />,
      },
      {
        path: 'integrador',
        name: 'Integrador',
        component: <ClassComponents.datos.integrador />,
      },
      {
        path: 'readme',
        name: 'Readme',
        component: <Readme default={ClassComponents.datos.readme} />,
      }
    ],
  },
  {
    path: 'entorno',
    name: 'Entorno',
    sub: [
      {
        path: 'teoria',
        name: 'Teoria',
        component: <ClassComponents.entorno.teoria />,
      },
      {
        path: 'practica',
        name: 'Practica',
        component: <ClassComponents.entorno.practica />,
      },
      {
        path: 'integrador',
        name: 'Integrador',
        component: <ClassComponents.entorno.integrador />,
      },
      {
        path: 'readme',
        name: 'Readme',
        component: <Readme default={ClassComponents.entorno.readme} />,
      }
    ],
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
      {
        path: 'readme',
        name: 'Readme',
        component: <Readme default={ClassComponents.jsx.readme} />,
      }
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
      {
        path: 'readme',
        name: 'Readme',
        component: <Readme default={ClassComponents.components.readme} />,
      }
    ],
  },
  {
    path: 'estilos',
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
      {
        path: 'readme',
        name: 'Readme',
        component: <Readme default={ClassComponents.estilos.readme} />,
      }
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
      {
        path: 'readme',
        name: 'Readme',
        component: <Readme default={ClassComponents.keys.readme} />,
      }
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
      {
        path: 'readme',
        name: 'Readme',
        component: <Readme default={ClassComponents.stateI.readme} />,
      }
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
      {
        path: 'readme',
        name: 'Readme',
        component: <Readme default={ClassComponents.stateII.readme} />,
      }
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
      {
        path: 'readme',
        name: 'Readme',
        component: <Readme default={ClassComponents.forms.readme} />,
      }
    ],
  },
  {
    path: 'repaso',
    name: 'Repaso',
    sub: [
      {
        path: 'resolucion',
        name: 'Resolucion',
        component: <ClassComponents.repaso.teoria />,
      },
      {
        path: 'readme',
        name: 'Readme',
        component: <Readme default={ClassComponents.repaso.readme} />,
      }
    ],
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
      {
        path: 'readme',
        name: 'Readme',
        component: <Readme default={ClassComponents.useEffect.readme} />,
      }
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
      {
        path: 'readme',
        name: 'Readme',
        component: <Readme default={ClassComponents.fetch.readme} />,
      }
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
      {
        path: 'readme',
        name: 'Readme',
        component: <Readme default={ClassComponents.memo.readme} />,
      }
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
      {
        path: 'readme',
        name: 'Readme',
        component: <Readme default={ClassComponents.routerI.readme} />,
      }
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
      {
        path: 'readme',
        name: 'Readme',
        component: <Readme default={ClassComponents.routerII.readme} />,
      }
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
      {
        path: 'readme',
        name: 'Readme',
        component: <Readme default={ClassComponents.testing.readme} />,
      }
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
      {
        path: 'readme',
        name: 'Readme',
        component: <Readme default={ClassComponents.context.readme} />,
      }
    ],
  },
  {
    path: 'localStorage',
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
      {
        path: 'readme',
        name: 'Readme',
        component: <Readme default={ClassComponents.localStorage.readme} />,
      }
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
      {
        path: 'readme',
        name: 'Readme',
        component: <Readme default={ClassComponents.reducer.readme} />,
      }
    ],
  },
  {
    path: 'customHooks',
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
      {
        path: 'readme',
        name: 'Readme',
        component: <Readme default={ClassComponents.customHooks.readme} />,
      }
    ],
  },
  {
    path: 'useRef',
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
      {
        path: 'readme',
        name: 'Readme',
        component: <Readme default={ClassComponents.useRef.readme} />,
      }
    ],
  },
]