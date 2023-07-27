import users from '@/fakeApi/users.json'

const practica01 = () => {
  //Muestra por consola:
  //el 'email' del primer Usuario
  console.log(users[0].email)

  //el 'apodo' del tercer Usuario
  console.log(users[2].apodo)

  // el color de la segunda 'mascota' del tercer Usuario
  console.log(users[2].mascotas[1].color)

  // Usando desestructuracion:
  // extrae en variables el primer y cuarto elemento
  const [first, , , fourth] = users

  // usando lo obtenido arriba extrae en variables 'email' y 'mascotas' del primer elemento
  const { email, mascotas } = first

  // spread operator:
  // haz una copia de las 'mascotas' obtenidas arriba y agregale la mascota '{ "apodo": "Nami", "edad": 2, "color": "negro" }'

  const copia = [...mascotas, { apodo: 'Nami', edad: 2, color: 'negro' }]

  console.log(copia)

  // crea una funcion que reciba por props un objeto con las siguientes keys: **name**, **cantMascotas** y que retorne un string con el siguiente formato
  // '"El Usuario {name} tiene {cantMascotas} mascotas"'

  function getUserNameAndPets({ apodo, mascotas }) {
    return `El Usuario ${apodo} tiene ${mascotas.length} mascotas`
  }

  // usando la operacion 'filter', crea un array con los Usuarios que tengan **mas** de 1 mascota

  const usersWithMoreThanOnePet = users.filter((user) => user.mascotas.length > 1)

  // usando la operacion 'map' y la funcion anterior, crea un array de strings con el apodo y la cantidad de mascotas de cada Usuario filtrado anteriormente
  // Ej:
  // [
  //   "El Usuario Gaby tiene 3 mascotas",
  //   "El Usuario Morgi tiene 5 mascotas"
  // ]

  const usersWithMoreThanOnePetString = usersWithMoreThanOnePet.map((user) =>
    getUserNameAndPets(user)
  )
  console.log(usersWithMoreThanOnePetString)

  // Usando la operacion reduce devuelve la cantidad total de mascotas

  const totalPets = users.reduce((acc, user) => {
    return acc + user.mascotas.length
  }, 0)
  console.log(totalPets)
}

export default practica01
