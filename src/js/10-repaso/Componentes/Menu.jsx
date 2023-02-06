import { useState } from 'react'
import styles from './Menu.module.css'

export const Menu = ({ agregarAlPedido }) => {
  const [item, setItem] = useState('')
  function handleSubmit(e) {
    e.preventDefault()
    if (!item) return
    agregarAlPedido(item)
    setItem('')
  }
  return (
    <div className={styles.menu}>
      <h3>Menu</h3>
      <form className='flex' onSubmit={handleSubmit}>
        <input
          type='text'
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
        <button type='submit'>Agregar al pedido</button>
      </form>
    </div>
  )
}
