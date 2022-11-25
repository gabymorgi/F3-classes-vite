import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export const Home = () => {
  return (
    <>
      <header>Perfumeria</header>
      <Outlet />
      {/**el outlet es la forma en la que le decimos a RRouter
       * que aqui es donde se va a renderizar las rutas hijas
       * si nos olvidamos, no hay error :(
       * Asi que esten atentos
       */}
      <hr />
      <footer>contacto xd</footer>
    </>
  )
}
