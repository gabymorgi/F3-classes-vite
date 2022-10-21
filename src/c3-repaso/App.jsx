//podemos importar por default con el nombre que queramos
// import Title from './Title'
//podemos importar con un nombre especifico
// import { Title } from './Title'
//React tiene ambas formas de exportar por default y con nombre especifico
import React, { useState, useEffect } from 'react'
import imgHeader from '../assets/vapr.png'
import games from '../fakeApi/data.json'
import { Game, Title } from './Game'

function App() {
  //los objetos los definimos entre llaves {}
  //con formato [key]: value
  //accedemos a sus valores a traves de la notacion de punto juego.name
  //value puede ser cualquier cosa
  const juego = {
    name: 'nombre',
    playedTime: 3,
    isGood: true,
    score: {
      grafics: 8,
      music: 7,
    },
    achievements: [1, 3, 54, 3, 9],
  }
  //los arrays los definimos entre corchetes []
  //accedemos a sus valores a traves de la notacion de corchetes achievements[0]
  //value puede ser cualquier cosa, pero lo ideal es que todos sus elementos sean del mismo tipo
  const achievements = [1, 3, 54, 3, 9]

  const nombreTitulo = 'Tus juegos'
  return (
    <>
      {/** Title va a recibir todos los atributos como keys en un objeto */}
      <Title title='Mis juegos' juego={juego} otroAtributo={3} />
      {/** podemos pasar objetos en linea como parametro,
       * la primera {} es para meter codigo,
       * la segunda {} es la definicion del objeto en si */}
      <Title title={nombreTitulo} juego={{
        name: 'juego 2',
        playedTime: 987
      }} otroAtributo={3} />
      <Game game={games[1]} />
    </>
  )
}

export default App
