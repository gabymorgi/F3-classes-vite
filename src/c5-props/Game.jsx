import React from 'react'
import { Title } from './Title'

// el params y return sirve para documentar el componente
// si le hago hover al componente en donde lo uso me muestra el texto
/**
 * @param game recibe un juego con nombre img y tiempo
 * @returns retorna una card
 */
export function Game({ game }) {
  return (
    <div className='game'>
      {/**el contenido de un componente se llama children,
       * y llega como una key mas dentro del objeto props */}
      <Title>{game.name}</Title>
      <img width='100%' src={game.imgUrl} alt='logo' />
      <span>{(game.playedTime / 60).toFixed(2)}H</span>
    </div>
  )
}
