import React from 'react'
import styles from './Menu.module.css'

export const Menu = ({ agregarAlPedido }) => {
  const [formValues, setFormValues] = React.useState({
    nombre: '',
    precio: '',
  })
  function handleSubmit(e) {
    e.preventDefault()
    agregarAlPedido(formValues.nombre)
  }
  function handleChangeValue(e) {
    setFormValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }
  return (
    <div className={styles.menu}>
      <h3>Menu</h3>
      <h5>Pide lo que quieras!!!!</h5>
      <div className='flex'>
        <form id='menu-form' onSubmit={handleSubmit}>
          <input
            name='nombre'
            value={formValues.nombre}
            onChange={handleChangeValue}
            type='text'
          />
          <input
            name='precio'
            value={formValues.precio}
            onChange={handleChangeValue}
            type='number'
            min={10}
            max={90}
          />
        </form>
        <button type='submit' form='menu-form'>
          agregar
        </button>
      </div>
    </div>
  )
}
