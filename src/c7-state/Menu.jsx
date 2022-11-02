import { Card } from 'antd'
import React from 'react'

const menues = ['hamburguesa', 'milanesa', 'empanadas', 'ensalada']

export const Menu = ({ agregarAlPedido }) => {
  return (
    <Card title="Menu">
      {menues.map((menu) => (
        <button key={menu} onClick={() => agregarAlPedido(menu)}>
          {menu}
        </button>
      ))}
    </Card>
  )
}