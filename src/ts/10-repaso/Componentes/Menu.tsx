import { useState } from 'react'
import styles from './Menu.module.css'

interface MenuProps {
  agregarAlPedido: (opcionMenu: string) => void
}

export const Menu = ({ agregarAlPedido }: MenuProps) => {
  const [item, setItem] = useState('')
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
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
