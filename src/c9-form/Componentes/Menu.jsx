import React from 'react'
import styles from './Menu.module.css'

const menues = ['hamburguesa', 'milanesa', 'empanadas', 'ensalada']

const initialValues = {
  name: '',
  valor: 10,
  select: menues[0],
}

export const Menu = ({ agregarAlPedido }) => {
  //podemos controlar los inputs con individualmente o con un objeto
  //si necesitamos algun tipo de validacion, quizas es mejor manejarlos por separado
  // const [inputValue, setInputValue] = React.useState(initialValues.name) // string
  // const [numberValue, setNumberValue] = React.useState(initialValues.valor) //number
  // const [selectValue, setSelectValue] = React.useState(initialValues.select) //string
  const [formValues, setFormValues] = React.useState(initialValues) // object

  function handleFormSubmit(e) {
    e.preventDefault()
    agregarAlPedido(formValues.name)
    setFormValues(initialValues)
  }

  function handleInputChange(e) {
    console.log(e.target.name, e.target.value)
    const newFormValues = { ...formValues }
    //modifico el valor de la propiedad que corresponda
    newFormValues[e.target.name] = e.target.value
    setFormValues(newFormValues)
  }

  return (
    <div className={styles.menu}>
      <h3>Menu</h3>
      <div className='flex'>
        <form onSubmit={handleFormSubmit}>
          <label htmlFor='menu'>Pedi lo que quieras!!</label>
          <input
            name='name'
            type='text'
            id='menu'
            onChange={handleInputChange}
            //si hay value, el componente es controlado
            value={formValues.name}
          />
          <input
            type='number'
            name='valor'
            onChange={handleInputChange}
            value={formValues.valor}
          />
          <select
            name='select'
            onChange={handleInputChange}
            value={formValues.select}
          >
            {menues.map((menu) => {
              return (
                <option key={menu} value={menu}>
                  {menu}
                </option>
              )
            })}
          </select>
          <button type='submit'>Agregar</button>
        </form>
      </div>
    </div>
  )
}
