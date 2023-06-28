import { useReducer } from 'react'
import Calculator from './components/Calculator'
import Result from './components/Result'

//operacion que calcula el valor inicial
//recibe el segundo param del useReducer
function init(initialValue) {
  return localStorage.getItem('value')
    ? Number(localStorage.getItem('value'))
    : initialValue
}

/**
 * @param state el estado antes del setState
 * @param action un objetito con las key type y payload
 */
function calcReducer(state, action) {
  let newState = state
  // evaluamos el tipo de accion que se esta ejecutando
  // en base a eso calculamos el nuevo estado
  switch (action.type) {
    case 'sumar': {
      newState = state + (action.payload || 0)
      break
    }
    case 'restar': {
      newState = state - (action.payload || 0)
      break
    }
    case 'multiplicar': {
      newState = state * (action.payload || 0)
      break
    }
    case 'dividir': {
      newState = state / (action.payload || 1)
      break
    }
    case 'reset': {
      newState = 0
      break
    }
    default: {
      throw new Error(`No se reconoce el type: ${action.type}`)
    }
  }
  //logica comun para todos los casos
  localStorage.setItem('value', newState.toString())
  // lo que retorne esta funcion sera el nuevo estado
  return newState
}

const App = () => {
  const [result, dispatchResult] = useReducer(
    calcReducer, //funcion que se ejecuta cuando se hace un dispatch, retorna el nuevo estado
    0, //valor inicial
    init //funcion que calcula el valor inicial
  )

  return (
    <div className='card flex-column'>
      {/* en lugar de pasar cinco funciones,
        pasamos una sola que recibe un objeto con la key type y payload */}
      <Calculator dispatchResult={dispatchResult} />
      <hr />
      <Result result={result} />
    </div>
  )
}

export default App
