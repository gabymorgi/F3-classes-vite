import React from 'react'
import Calculator from './components/Calculator'
import Result from './components/Result'

export enum actionTypes {
  sumar,
  restar,
  multiplicar,
  dividir,
  reset,
}

//operacion que calcula el valor inicial
//recibe el segundo param del useReducer
function init(initialValue: number) {
  return localStorage.getItem('value')
    ? Number(localStorage.getItem('value'))
    : initialValue
}

export interface actionI {
  type: actionTypes
  payload?: number
}

/**
 * @param state el estado antes del setState
 * @param action un objetito con las key type y payload
 */
function calcReducer(state: number, action: actionI) {
  let newState = state
  //evaluamos el tipo de accion que se esta ejecutando
  switch (action.type) {
    case actionTypes.sumar: {
      newState = state + (action.payload || 0)
      break
    }
    case actionTypes.restar: {
      newState = state - (action.payload || 0)
      break
    }
    case actionTypes.multiplicar: {
      newState = state * (action.payload || 0)
      break
    }
    case actionTypes.dividir: {
      newState = state / (action.payload || 0)
      break
    }
    case actionTypes.reset: {
      newState = 0
      break
    }
    default: {
      throw new Error(`No se reconoce el type: ${action.type}`)
    }
  }
  //logica comun para todos los casos
  localStorage.setItem('value', newState.toString())
  return newState
}

const App = () => {
  const [result, dispatchResult] = React.useReducer<
    React.Reducer<number, actionI>,
    number
  >(
    calcReducer, //funcion que se ejecuta cuando se hace un dispatch, retorna el nuevo estado
    0, //valor inicial
    init //funcion que calcula el valor inicial
  )

  return (
    <div className='card flex-column'>
      <Calculator dispatchResult={dispatchResult} />
      <hr />
      <Result result={result} />
    </div>
  )
}

export default App
