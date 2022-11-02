import React from 'react'
import { Menu } from './Menu'

export const MenuMultiple = () => {
  const [pedido, setPedido] = React.useState()

  function agregarAlPedido(menu) {
    //recibimos la opcion seleccionada y la guardamos en nuestro estado
    setPedido(menu)
  }

  return (
    <div className='flex flex-column'>
      <Menu agregarAlPedido={agregarAlPedido} />
      {pedido ? <div>el pedido hecho fue: {pedido}</div> : undefined}
    </div>
  )
}
