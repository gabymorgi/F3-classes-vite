import React from 'react'
import { Menu } from './Componentes/Menu'
import { Pedido } from './Componentes/Pedido'
import { getId } from './utils/getId'

export const PedidosMultiple = () => {
  const [pedidos, setPedidos] = React.useState([])

  function agregarAlPedido(opcionMenu) {
    //opcionMenu: string
    const newPedido = {
      key: getId(), //generamos un id unico y lo volvemos intrinseco a cada pedido
      pedido: opcionMenu,
    }
    setPedidos([...pedidos, newPedido])
  }

  function eliminarPedido(key) {
    const nuevoPedido = pedidos.filter((pedido) => pedido.key !== key)
    setPedidos(nuevoPedido)
  }

  return (
    <div className='flex flex-column'>
      <Menu agregarAlPedido={agregarAlPedido} />
      <ul>
        {pedidos.map((elemPedido) => {
          return (
            <Pedido
              key={elemPedido.key}
              pedido={elemPedido.pedido}
              eliminarPedido={() => eliminarPedido(elemPedido.key)}
            />
          )
        })}
        {/**
         * que pasa si usamos index como key?
         * 
         * <Pedido key={0} pedido="Ham" /> // estado true
         * <Pedido key={1} pedido="ens" /> // estado false
         * <Pedido key={2} pedido="emp" /> // estado true
         * <Pedido key={3} pedido="ham" /> // estado false
         * 
         * y eliminamos el tercer elemento
         * 
         * <Pedido key={0} pedido="Ham" /> // estado true
         * <Pedido key={1} pedido="ens" /> // estado false
         * <Pedido key={2} pedido="ham" /> // estado true
         * 
         * React solo ve las keys. Y piensa que entre un estado y el otro
         * se elimino el componente con key={3}
         * y que el componente con key={2} cambio su prop pedido de emp a ham
         */}
         {/**
         * que pasa si usamos un numero aleatorio como key?
         * asumimos que estadisticamente no se repiten
         * por lo tanto no sucederia lo de arriba
         * 
         * <Pedido key={25} pedido="Ham" /> // estado true
         * <Pedido key={32} pedido="ens" /> // estado false
         * <Pedido key={69} pedido="nice" /> // estado true
         * <Pedido key={100} pedido="ham" /> // estado false
         * 
         * eliminamos el tercer elemento
         * el estado se modifica, ocurre un nuevo render,
         * por lo tanto, se vuelve a calcular el valor key
         * 
         * <Pedido key={10} pedido="Ham" /> // estado false
         * <Pedido key={48} pedido="ens" /> // estado false
         * <Pedido key={79} pedido="ham" /> // estado false
         * 
         * React ve que los componentes con key 25, 32, 68 y 100 se eliminaron
         * y que aparecieron nuevos componentes con key 10, 48 y 79
         * por eso se pierde el estado de los componentes que se eliminaron
         * y se resetean los nuevos
         * 
         * idealmente, los keys deberian ser unicas e ""intrinsecas"" a cada componente
         */}
      </ul>
    </div>
  )
}