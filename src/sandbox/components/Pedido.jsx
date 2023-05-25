function Pedido(props) {
  function handleClick() {
    props.onClick()
  }

  return (
    <div className="flex">
      <h1>{props.nombre}</h1>
      <button onClick={handleClick}>Eliminar</button>
    </div>
  )
}

export default Pedido
