import React from 'react'
import imgHeader from '../assets/vapr.png'
import games from '../fakeApi/data.json'
import Game from './Game'

function App() {
  return (
    <> {/** Para renderizar hermanos necesito envolverlos en un componente padre */}
      <header>
        {/** puedo poner en el src algo que haya traido del import */}
        <img width={32} src={imgHeader} alt="logo" />
        Vapor
      </header>
      <div className='list'>
        {/** puedo pasarle como props lo que quiera, no hay restricciones */}
        <Game asdf={true} game={games[0]} ></Game>
        <Game game={games[1]} />
        <Game game={games[2]} />
      </div>
    </>
  )
}

export default App
