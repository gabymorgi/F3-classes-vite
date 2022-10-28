import React from 'react'
import { Button } from './Button'
import { Title } from './Title'

/**
 * @param game recibe un juego con nombre img y tiempo
 * @returns retorna una card
 */
export function Game({ game, batata }) {
  // console.log(game.tags)
  return (
    <div className='game'>
      <Title>{game.name}</Title>
      <img width='100%' src={game.imgUrl} alt='logo' />
      <span>{(game.playedTime / 60).toFixed(2)}H</span>
      <div className='flex flex-column'>
        {game.tags.map((tag, index) => {
          return (
            <React.Fragment key={tag}>
              {/**uso la forma explicita fragment para poder pasarle la key */}
              {/**si no tengo un id que represente de manera univoca al elemento, podemos usar el index */}
              <span id={tag}>{tag}</span>
              <div>otra cosa</div>
            </React.Fragment>
          )
        })}
      </div>
      <Button id='id-button' loading={false} onClick={() => batata(game)}>
        click Me
      </Button>
    </div>
  )
}
