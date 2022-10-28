import React from 'react'
import imgHeader from '../assets/vapr.png'
import games from '../fakeApi/data.json'
import { Game } from './Game'
import { List } from './List'

function App() {
  function handleClickedGame(game) {
    console.log(game.name)
  }
  return (
    <>
      <header>
        <img width={32} src={imgHeader} alt="logo" />
        Vapor
      </header>
      <List title="Biblioteca">
        {games.map((game, i) => {
          return (
            <Game
              // puedo pasar funciones como parametro para permitir comunicacion inversa
              batata={handleClickedGame}
              id={i}
              key={game.id}
              game={game}
            />
          )
        })}
      </List>
    </>
  )
}

export default App
