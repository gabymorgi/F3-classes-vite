import data from '../../fakeApi/data.json'

const practica01 = () => {
  // el id del primer Juego
  console.log(data[0].id)
  // el nombre del tercer juego
  console.log(data[2].name)
  // el nombre del quinto achievement del segundo juego
  console.log(data[1].achievements[4].name)

  // usando desestructuracion:
  // extrae en variables el primer y cuarto elemento
  const [first, , , fourth] = data
  console.log(first, fourth)
  // usando lo obtenido arriba extrae en variables el tiempo jugado y los tags del perimer elemento
  const { playedTime, tags } = first
  console.log(playedTime, tags)
  // spread operator:
  // haz una copia de los tags obtenidos arriba y agregale el tag "2D"
  const tagsCopy = [...tags, '2D']
  // (usar console log para mostrar que no se modifico el original)
  console.log({ tagsCopy, tags })

  // crea una funcion que reciba por props un objeto con las siguientes keys
  // name, playedTime
  // y que retorne un string con el siguiente formato
  // "El juego {name} se jugo por {playedTime} horas"
  function gamePlayed({ name, playedTime }) {
    return `El juego ${name} se jugo por ${playedTime} horas`
  }
  console.log(gamePlayed(first))

  // usando la operacion filter, crea un array con los juegos que tengan score mayor o igual a 9
  const filteredGames = data.filter((game) => game.score >= 9)
  console.log(filteredGames)
  // usando la operacion map y la funcion anterior, crea un array de strings con el nombre y tiempo jugado de cada juego filtrado anteriormente
  // Ej:
  // [
  //   "El juego Super Meat Boy se jugo por 10 horas",
  //   "El juego Celeste se jugo por 35 horas"
  // ]
  const filteredGamesPlayed = filteredGames.map((game) =>
    gamePlayed(game)
  )
  console.log(filteredGamesPlayed)

  // Usando la operacion reduce y los datos filtrados previamente, devuelve la cantidad total de minutos jugados
  const totalMinutesPlayed = filteredGames.reduce(
    (acc, game) => acc + game.playedTime,
    0
  )
  console.log(totalMinutesPlayed)
}

export default practica01
