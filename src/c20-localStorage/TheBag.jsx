import React from 'react'

//forma cutre de generar un id unico
let id = 0

function getUniqueKey() {
  return id++
}

//opcional: normalizamos los tipos de acciones
const actionTypes = {
  addAlInicio: 'addAlInicio',
  addAlFinal: 'addAlFinal',
  eliminarPrimero: 'eliminarPrimero',
  eliminarUltimo: 'eliminarUltimo',
  reset: 'reset',
}

//operacion que calcula el valor inicial
//recibe el segundo param del useReducer
function init(initialValue) {
  return localStorage.getItem('bag')
    ? JSON.parse(localStorage.getItem('bag'))
    : initialValue
}

/**
 * @param state el estado antes del setState
 * @param action un objetito con las key type y payload
 */
function bagReducer(state, action) {
  //logica comun para todos los casos
  let newState = [...state]
  //evaluamos el tipo de accion que se esta ejecutando
  switch (action.type) {
    case actionTypes.addAlInicio: {
      const newElement = {
        id: getUniqueKey(),
        value: action.payload,
      }
      newState.unshift(newElement)
      break
    }
    case actionTypes.addAlFinal: {
      const newElement = {
        id: getUniqueKey(),
        value: action.payload,
      }
      newState.push(newElement)
      break
    }
    case actionTypes.eliminarPrimero: {
      newState.shift()
      break
    }
    case actionTypes.eliminarUltimo: {
      newState.pop()
      break
    }
    case actionTypes.reset: {
      newState = []
      break
    }
    default: {
      throw new Error(`No se reconoce el type: ${action.type}`)
    }
  }
  //logica comun para todos los casos
  localStorage.setItem('bag', JSON.stringify(newState))
  return newState
}

export const TheBag = () => {
  const [value, setValue] = React.useState('')
  const [bag, dispatchBag] = React.useReducer(
    bagReducer, //funcion que se ejecuta cuando se hace un dispatch, retorna el nuevo estado
    [{ id: 100, value: 'manzana' }], //valor inicial
    init //funcion que calcula el valor inicial
  )

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const AgregarManzana = () => {
    dispatchBag({ type: actionTypes.addAlInicio, payload: 'Manzana' })
  }

  const AgregarBanana = () => {
    dispatchBag({ type: actionTypes.addAlFinal, payload: 'Banana' })
  }

  const AgregarAlFinal = () => {
    //somos agnosticos a como se maneja el estado
    //solo sabemos que queremos agregar un elemento al final
    dispatchBag({ type: actionTypes.addAlFinal, payload: value })
    setValue('')
  }

  const AgregarAlInicio = () => {
    dispatchBag({ type: actionTypes.addAlInicio, payload: value })
    setValue('')
  }

  const eliminarPrimero = () => {
    dispatchBag({ type: actionTypes.eliminarPrimero })
  }

  const eliminarUltimo = () => {
    dispatchBag({ type: actionTypes.eliminarUltimo })
  }

  const resetBag = () => {
    dispatchBag({ type: actionTypes.reset })
  }

  return (
    <div className='card flex-column'>
      Random List
      <input type='string' value={value} onChange={handleChange} />
      <hr />
      <button onClick={AgregarManzana}>Agregar manzana</button>
      <button onClick={AgregarBanana}>Agregar banana</button>
      <button onClick={AgregarAlInicio}>Agregar al inicio</button>
      <button onClick={AgregarAlFinal}>Agregar al final</button>
      <button onClick={eliminarPrimero}>Elimine el primer Elemento</button>
      <button onClick={eliminarUltimo}>Elimine el ultimo Elemento</button>
      <button onClick={resetBag}>Reset</button>
      {bag.map((item) => (
        <div key={item.id}>{item.value}</div>
      ))}
    </div>
  )
}
