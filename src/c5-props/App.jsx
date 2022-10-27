import React from 'react'
import imgHeader from '../assets/vapr.png'
import games from '../fakeApi/data.json'
import { Game } from './Game'

function App() {
  return (
    <>
      <header>
        <img width={32} src={imgHeader} alt="logo" />
        Vapor
      </header>
      <div className='list'>
        {games.map((game, i) => {
          return (
            //key es un atributo especial de react
            //siempre que se renderiza una lista de elementos dinamicamente
            //el key debe ser unico entre hermanos
            //preferentemente tiene que ser inherente al elemento (lo vemos a futuro)
            <Game id={i} key={game.id} game={game} />
          )
        })}
      </div>
    </>
  )
}

export default App
