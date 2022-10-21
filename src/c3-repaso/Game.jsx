import React from 'react'

// props se ve como
// {
  // [atributo]: valor
//}
function Title(props) {
  console.log('Title', props.playedTime)
  return (
    <>
      <h1>{props.title}</h1>
      <p>{props.juego.playedTime}</p>
    </>
  )
}

function Game(props) {
  //props tiene todas las propiedades que se le enviaron en la definicion de la etiqueta
  //ej
  // <Game boolValue={true} numerito={2} ></Game>
  //props = {boolValue: true, numerito: 2}
  // console.log(props)
  return (
    <div className='game'>
      <h2>{props.game.name}</h2>
      <img src={props.game.imgUrl} alt="logo" />
      <span>{props.game.playedTime / 60}H</span>
    </div>
  )
}

//las funciones se pueden definir como constantes
//elegir una convencion y mantenerla

//asi exportamos una funcion, hay que importarla con este mismo nombre
export const UnaFuncion = (props) => {
  return <div>holis</div>
}

//podemos agrupar los exports en un objeto
export {
  Title,
  Game
}

//asi exportamos un componente por default, podemos importarlo con cualquier nombre
//pero solo podemos tener un componente por default por archivo
// export default Game
