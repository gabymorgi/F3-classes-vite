import { useState } from 'react'
import { Menu } from './Componentes/Menu'
import { Pedido } from './Componentes/Pedido'
import { getId } from './utils/getId'

interface PedidoItemProps {
  id: number
  item: string
}

const App = () => {
  const [pedidos, setPedidos] = useState<PedidoItemProps[]>([])

  function agregarAlPedido(item: string) {
    const newPedido = {
      id: getId(),
      item,
    }
    setPedidos([...pedidos, newPedido])
  }

  function eliminarPedido(id: number) {
    const nuevoPedido = pedidos.filter((pedido) => pedido.id !== id)
    setPedidos(nuevoPedido)
  }

  return (
    <div className='flex flex-column'>
      <Menu agregarAlPedido={agregarAlPedido} />
      <ul>
        {pedidos.map((elemPedido) => {
          return (
            <Pedido
              key={elemPedido.id}
              pedido={elemPedido.item}
              eliminarPedido={() => eliminarPedido(elemPedido.id)}
            />
          )
        })}
      </ul>
    </div>
  )
}

export default App
