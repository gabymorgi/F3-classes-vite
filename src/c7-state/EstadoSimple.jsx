import React from 'react'

export const EstadoSimple = () => {
  const [isPedido, setIsPedido] = React.useState(false)

  function agregarAlPedido() {
    setIsPedido(true)
    console.log('isPedido', isPedido) // false
    //setIsPedido NO es una función síncrona
    //solo le dice a react que queremos cambiar el estado
    //react decide cuando hacerlo (cuando termine la ejecucion de la funcion)
    //no tenemos herramientas (por ahora) para saber cuando react cambia el estado
  }

  return (
    <div className='flex flex-column'>
      {isPedido ? 'Pedido hecho' : <button onClick={agregarAlPedido}>Hacer Pedido</button>}
    </div>
  )
}
