interface PedidoProps {
  pedido: string
  eliminarPedido: () => void
}

export const Pedido = (props: PedidoProps) => {
  return (
    <li>
      <div className='flex'>
        <div>{props.pedido}</div>
        <button onClick={props.eliminarPedido}>eliminar</button>
      </div>
    </li>
  )
}
