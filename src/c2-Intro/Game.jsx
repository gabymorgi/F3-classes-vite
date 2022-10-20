import React from 'react'

/**
 * Es una funcion comun y corriente, pero puedo usarla como etiqueta JSX
 */
function Game(props) {
  //props tiene todas las propiedades que se le enviaron en la definicion de la etiqueta
  //ej
  // <Game boolValue={true} numerito={2} ></Game>
  //props = {boolValue: true, numerito: 2}
  console.log(props)
  return (
    <div className='game'>
      <h2>{props.game.name}</h2>
      <img src={props.game.imgUrl} alt="logo" />
      <span>{props.game.playedTime / 60}H</span>
    </div>
  )
}

export default Game
