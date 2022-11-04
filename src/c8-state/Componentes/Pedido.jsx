import React from 'react'

/**
 * @param pedido string con el menu seleccionado
 * @param eliminarPedido funcion que elimina el pedido 
 * @returns 
 */
export const Pedido = (props) => {
  const [isBebida, setIsBebida] = React.useState(false)

  return (
    <li>
      <div className='flex'>
        <div>{props.pedido}</div>
        <button onClick={() => setIsBebida(!isBebida)}>{isBebida ? 'Si' : 'No'}</button>
        <button onClick={props.eliminarPedido}>eliminar</button>
      </div>
    </li>
  )
}
