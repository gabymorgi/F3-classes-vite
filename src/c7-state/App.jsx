import React from 'react'
import { Contador } from './Contador'
import { EstadoSimple } from './EstadoSimple'
import { MenuMultiple } from './MenuMultiple'

const App = () => {
  return (
    <>
      <hr />
      <EstadoSimple />
      <hr />
      <Contador />
      <hr />
      <MenuMultiple />
      <hr />
    </>
  )
}

export default App
