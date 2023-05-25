import { useState } from 'react'
import Menu from './components/Menu'
import Pedido from './components/Pedido'

// necesito generar un id unico y que no cambie
let uniqueId = 0

const App = () => {
  const [pedidos, setPedidos] = useState([])

  function handleSubmit(value) {
    console.log('submit', value)
    const newPedido = {
      id: uniqueId++,
      nombre: value,
    }
    setPedidos([newPedido, ...pedidos])
  }

  function handleDelete(id) {
    console.log('click')
    const newPedidos = pedidos.filter((pedido) => pedido.id !== id)
    setPedidos(newPedidos)
  }

  return (
    <div className='flex-col'>
      <Menu
        onSubmit={handleSubmit}
      >
        <p>adsfasd</p>
      </Menu>
      <hr />
      <ul>
        {pedidos.map((pedido) => {
          return (
            <li key={pedido.id}>
              <Pedido
                nombre={pedido.nombre}
                onClick={() => handleDelete(pedido.id)}
              />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default App
