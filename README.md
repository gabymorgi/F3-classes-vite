# Bienvenidos a FrontEnd III!

A lo largo de la materia, iremos aprendiendo **React** y otras librerias colindantes.
**Sin embargo**, el contenido abarca los temas de forma **superficial**
por lo que te recomiendo acceder a la documentacion oficial si queres profundizar mas

- [¡¡Aprende React desde la web oficial!!](https://beta.reactjs.org/learn)
- [Pensando en React](https://beta.reactjs.org/learn/thinking-in-react)

Mas abajo podes encontrar documentación especifica a cada una de las clases

# Estructura de carpetas

Dentro de la carpeta **src** te vas a encontrar con las siguientes carpetas

- **mainLayout**: Aquí esta la logica necesaria para mostrar el menu con todas las clases del proyecto. Te recomiendo que la ignores al menos hasta tener conocimientos de Router.
- **fakeApi**: Aquí encontraras los datos en archivos json con los que trabajaremos durante la clase. Asi como otros archivos que facilitan el armado de las clases, pero que no son necesarios para las practicas.
- **clase**: Aquí encontraras todas las guías de clase separadas cada una en diferentes carpetas. Te aconsejo que las tengas a mano durante las teorías, y que las revises si te trabas durante las practicas.
- **practicas**: Aquí encontraras en cada carpeta un txt con el enunciado de la clase, y tambien la resolución de la misma. Te recomiendo que intentes resolver los ejercicios por tu cuenta antes de echarle un vistazo a la solución; y recuerda que no existe una solución única a los problemas.
- **sandbox**: No encontraras nada interesante aquí. Esta carpeta es para uso del profesor durante el dictado de las clases.

### Importante:
Adicionalmente encontraras dentro del archivo **src/main.tsx** *Linea 6*, una linea de código que montara un servidor de testing. La misma **bloqueara cualquier request no gestionada dentro del servidor**. Esto es para proporcionar un entorno seguro de fetching durante el dictado de las clases. Sin embargo, **para ejecutar las practicas tendrás que comentarla**.

# Documentacion relacionada
## Clase 1: manejo de datos

- [Spread Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
- [Documentación de la Clase Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#instance_methods)
- [Iterador Object.keys](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)
- [Iterador Object.values](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values)
- [Iterador Object.entries](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries)

## Clase 2: JSX

- [Maquetando con JSX](https://beta.reactjs.org/learn/writing-markup-with-jsx)
- [Javascript en JSX con llaves](https://beta.reactjs.org/learn/javascript-in-jsx-with-curly-braces)

## Clase 3: Entorno

- [Empezando en Vite](https://vitejs.dev/guide/)
- [Control de Codigo VS](https://code.visualstudio.com/docs/sourcecontrol/overview)
- [Crear Proyectos en GitHub](https://docs.github.com/en/get-started/importing-your-projects-to-github/importing-source-code-to-github/adding-locally-hosted-code-to-github)

## Clase 4: Componentes

- [Pasando props a un componente](https://beta.reactjs.org/learn/passing-props-to-a-component)
- [Renderizado condicional](https://beta.reactjs.org/learn/conditional-rendering)

## Clase 5: Estilos

- [CSS-modules](https://github.com/css-modules/css-modules)

## Clase 6: Listas y Keys

- [Renderizando Listas](https://beta.reactjs.org/learn/rendering-lists#)

## Clase 7: useState I

- [Porque estados y no variables](https://beta.reactjs.org/learn/state-a-components-memory)
- [Pasos involucrados en el render (ciclo de vida)](https://beta.reactjs.org/learn/render-and-commit)
- [Snapshot en estados](https://beta.reactjs.org/learn/state-as-a-snapshot)
- [Multiples actualizaciones de estado](https://beta.reactjs.org/learn/queueing-a-series-of-state-updates)
- [uso general y ejemplos](https://beta.reactjs.org/reference/react/useState)

## Clase 8: useState II

- [Objetos y estados](https://beta.reactjs.org/learn/updating-objects-in-state)
- [Arreglos y estados](https://beta.reactjs.org/learn/updating-arrays-in-state)
- [uso general y ejemplos](https://beta.reactjs.org/reference/react/useState)

## Clase 9: Forms

- [Componentes controlados](https://beta.reactjs.org/reference/react-dom/components/input#controlling-an-input-with-a-state-variable)

## Clase 10: Repaso

- [Pensando en React](https://beta.reactjs.org/learn/thinking-in-react)

## Clase 13: useEffect

- [Introduccion a useEffect](https://beta.reactjs.org/learn/synchronizing-with-effects)
- [Ciclo de vida del useEffect](https://beta.reactjs.org/learn/lifecycle-of-reactive-effects)
- [Eventos o Efectos](https://beta.reactjs.org/learn/separating-events-from-effects)
- [uso general y ejemplos](https://beta.reactjs.org/reference/react/useEffect)

**Lecturas Avanzadas:**
- [Puede que no necesites un effect](https://beta.reactjs.org/learn/you-might-not-need-an-effect)
- [Quitando dependencias](https://beta.reactjs.org/learn/removing-effect-dependencies)

## Clase 14: Fetch

- [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- [Funciones asincrónicas](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)

## Clase 15: useMemo

- [uso general y ejemplos](https://beta.reactjs.org/reference/react/useMemo)

**Lecturas Avanzadas:**
- [memoizando funciones](https://beta.reactjs.org/reference/react/useCallback)
- [memoizando componentes](https://beta.reactjs.org/reference/react/memo)

## Clase 16: React Router I

- [Empezando con React Router](https://reactrouter.com/en/main/start/tutorial)
- [repo con ejemplos](https://github.com/remix-run/react-router/tree/dev/examples/basic)

## Clase 17: React Router II

- [useParam](https://reactrouter.com/en/main/hooks/use-params)
- [useNavigate](https://reactrouter.com/en/main/hooks/use-navigate)

## Clase 18: Testing

- [Vitest](https://vitest.dev/api/expect.html)
- [Prioridad de queries en Testing Library](https://testing-library.com/docs/queries/about/#priority)

## Clase 19:  Context

- [Introduccion a Context](https://beta.reactjs.org/learn/passing-data-deeply-with-context)

## Clase 20: localStorage

- [localStorage API](https://developer.mozilla.org/es/docs/Web/API/Window/localStorage)

## Clase 21: Reducer

- [Convirtiendo estados en reducer](https://beta.reactjs.org/learn/extracting-state-logic-into-a-reducer)

## Clase 22: Custom hooks

- [Reutilizando logica con hooks personalizados](https://beta.reactjs.org/learn/reusing-logic-with-custom-hooks)

## Clase 25: useRef

- [referenciando variables con useRef](https://beta.reactjs.org/learn/referencing-values-with-refs)
- [manipulando el DOM con useRef](https://beta.reactjs.org/learn/manipulating-the-dom-with-refs)
- [uso general y ejemplos](https://beta.reactjs.org/reference/react/useRef)
