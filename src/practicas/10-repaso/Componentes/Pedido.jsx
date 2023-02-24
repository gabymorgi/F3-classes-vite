export const Pedido = (props) => {
  return (
    <li>
      <div className='flex'>
        <div>{props.pedido}</div>
        <button onClick={props.eliminarPedido}>eliminar</button>
      </div>
    </li>
  )
}
