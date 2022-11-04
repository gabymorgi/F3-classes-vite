import React from 'react'
import styles from './Menu.module.css'

const menues = ['hamburguesa', 'milanesa', 'empanadas', 'ensalada']

export const Menu = ({ agregarAlPedido }) => {
  return (
    <div className={styles.menu}>
      <h3>Menu</h3>
      <div className='flex'>
        {menues.map((menu) => (
          <button key={menu} onClick={() => agregarAlPedido(menu)}>
            {menu}
          </button>
        ))}
      </div>
    </div>
  )
}