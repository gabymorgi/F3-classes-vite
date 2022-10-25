function dataStructure() {
  //constante
  const nombre = "Isaac"
  //no la puedo modificar
  // nombre = "Magdalene" //💥

  //variable
  let horas = 30
  //la puedo modificar
  horas = 60

  //arreglos
  const naturales = [1, 2, 3, 4, 5]
  //no puedo modificar el arreglo, pero si sus elementos
  //const solo afecta a la referencia del arreglo
  // naturales = [6, 2, 3, 4, 5] //💥
  naturales[0] = 6 // [6, 2, 3, 4, 5]

  //para acceder a las propiedades de un arreglo
  //se usa la notación de corchetes
  naturales[0] // 6
  // naturales.0 //💥

  //objetos
  const game = {
    name: "The Binding of Isaac",
    time: 30,
  }
  //puedo crearlos a partir de una variable
  const gameWithVars = {
    name: nombre,
    time: horas,
  }
  //puedo omitir el value si el key y el value son iguales
  const gameWithSameKeyValue = {
    nombre,
    horas,
  }


  //no puedo modificar el objeto, pero si sus propiedades
  // todo lo mismo que para los arreglos
  // game = { name: "The Binding of Isaac", time: 60 } //💥
  game.time = 60 // { name: "The Binding of Isaac", time: 60 }

  //para acceder a las propiedades de un objeto
  //se usa la notación de punto
  game.name // "The Binding of Isaac"
  //tambien puedo usar la notación de corchetes
  //util si la propiedad tiene espacios o caracteres especiales
  // game["name"] // "The Binding of Isaac"

  //si intento acceder a una propiedad que no existe
  //me regresa undefined
  game.year // undefined
  //puedo definir una propiedad que no existe
  game.year = 2011 // { name: "The Binding of Isaac", time: 60, year: 2011 }

  //un arreglo es un objeto con propiedades(keys) numéricas
  
  //las keys de un objeto deben ser unicas
  //si se repiten, solo se guarda la última
  const gameMultiKey = {
    name: "The Binding of Isaac",
    time: 30,
    name: "The Binding of Isaac: Rebirth", //no 💥 pero eslint lo detecta
  }

  //puedo tener un objeto dentro de otro objeto
  const extendedGame = {
    name: "The Binding of Isaac",
    time: 30,
    score: {
      graphics: 10,
      gameplay: 10,
      story: 10,
    },
  }
  //para acceder a las propiedades de un objeto dentro de otro objeto
  //se usa la notación de punto
  extendedGame.score.graphics // 10
  //tambien puedo usar la notación de corchetes
  //util si la propiedad tiene espacios o caracteres especiales
  // extendedGame["score"]["graphics"] // 10
  // extendedGame["score"].graphics // 10

  //puedo tener un arreglo dentro de otro objeto
  extendedGame.tags = ["roguelike", "indie", "action"]
  //para acceder a las propiedades de un arreglo dentro de otro objeto
  //se usa la notación de corchetes
  extendedGame.tags[0] // "roguelike"
  // extendedGame.tags.0 //💥

  //puedo tener un objeto dentro de un arreglo
  extendedGame.achievements = [
    {
      name: "The Lost",
      description: "Complete the game with The Lost",
    },
    {
      name: "The Keeper",
      description: "Complete the game with The Keeper",
    },
  ]
  //para acceder a las propiedades de un objeto dentro de un arreglo
  //se usa la notación de corchetes
  extendedGame.achievements[0].name // "The Lost"



  //problema
  const clonedExtendedGame = extendedGame
  clonedExtendedGame.name = "Super Meat Boy"
  //extendedGame.name // "Super Meat Boy" :(

  //si const no afecta a los elementos de un arreglo
  //y tampoco a las propiedades de un objeto
  //¿como puedo asegurar que no se modifiquen cuando los copio?

  //para clonear un objeto
  const cloneObj = { ...game }
  //para clonear un arreglo
  const cloneArr = [...naturales]

  //... <- spread operator

  //para agregar una propiedad a un objeto clonado
  const cloneObjExt = { ...game, newProp: 2011 }
  //para agregar un elemento a un arreglo clonado
  const cloneArrExt = [...naturales, 6]

  //esto es solo una copia superficial (shallow copy)
  //si el objeto tiene propiedades que son objetos
  //o arreglos, solo se copia la referencia

  const shallowExtendedGame = { ...extendedGame }
  shallowExtendedGame.score.graphics = 0
  //extendedGame.score.graphics // 0 :(

  //para hacer una copia profunda (deep copy)
  //se puede usar JSON.parse(JSON.stringify(obj))
  //pero no lo usen, es muy lento
  //hoy en dia existe una funcion nativa que hace esto
  //structuredClone(obj)
  //antes se usaban librerias como lodash o se implementaba manualmente

  const deepExtendedGame = structuredClone(extendedGame)
  deepExtendedGame.score.graphics = 10
  //extendedGame.score.graphics // 0 :)

  

  //si me da fiaquita escribir extendedGame.param cada vez
  //puedo usar destructuring
  const { name, time, score, tags, achievements } = extendedGame
  //esto es equivalente a
  //const name = extendedGame.name
  //const time = extendedGame.time
  //const score = extendedGame.score
  //const tags = extendedGame.tags
  //const achievements = extendedGame.achievements
  //tengo que respetar el NOMBRE de las propiedades

  //tambien puedo usar destructuring para arrays
  const [first, second, third] = naturales
  //esto es equivalente a
  //const first = naturales[0]
  //const second = naturales[1]
  //const third = naturales[2]
  //tengo que respetar el INDICE de los elementos
  const [, segundo, , ...resto] = naturales
  //esto es equivalente a
  //const segundo = naturales[1] // 2
  //const resto = naturales.slice(3) // [4, 5, 6]

  //tambien puedo usar destructuring para objetos dentro de objetos
  const { score: { graphics, gameplay, story } } = extendedGame
  //esto es equivalente a
  //const graphics = extendedGame.score.graphics
  //const gameplay = extendedGame.score.gameplay
  //const story = extendedGame.score.story


  //para recorrer un arreglo
  for (let i = 0; i < naturales.length; i++) {
    console.log(naturales[i])
  }
  //o
  for (const num of naturales) {
    console.log(num)
  }

  //pero esto no puedo utilizarlo en jsx
  //los arreglos tienen varios metodos que me ayudan a recorrerlos
  //forEach, map, filter, reduce, find, findIndex, some, every, sort, reverse
  //veamos solo algunos
  naturales.forEach(
    (num) => {
      console.log(num)
    }
  )
  //for each esta pensado para ser super genérico, no devuelve nada
  //solo recorre el arreglo y ejecuta una funcion por cada elemento

  const evenNumbers = naturales.map(
    (num) => {
      return num * 2
    }
  )
  //map devuelve un nuevo arreglo con los elementos transformados
  //IMPORTANTE: se espera que el arreglo devuelto tenga la misma cantidad de elementos que el original
  //si necesitamos un return condicional, o si no pretendemos retornar nada, usemos otras opciones

  const bigNumbers = naturales.filter((num) => {
    if (num > 3) {
      return true
    }
    return false
  })
  //filter devuelve un nuevo arreglo con los elementos que cumplan la condicion
  //IMPORTANTE: se espera que el arreglo devuelto tenga la misma estructura que el original

  const sum = naturales.reduce(
    (acc, num) => {
      return acc + num
    },
    0
  )
  //reduce devuelve UN VALOR, no un arreglo

  const firstEven = naturales.find(
    (num) => {
      if (num % 2 === 0) {
        return true
      }
      return false
    }
  )
  //find devuelve el primer elemento que cumpla la condicion
  //si no encuentra ninguno devuelve undefined

  //si solo nos interesa saber si existe algun elemento que cumpla la condicion
  const hasEven = naturales.some((num) => {
    if (num % 2 === 0) {
      return true
    }
    return false
  })


  //como itero un objeto?
  //necesito algo que me convierta el objeto en un arreglo
  //para eso existen tres funciones nativas
  //Object.keys(obj) -> devuelve un arreglo con las propiedades del objeto
  Object.keys(extendedGame)
  //Object.values(obj) -> devuelve un arreglo con los valores del objeto
  Object.values(extendedGame)
  //Object.entries(obj) -> devuelve un arreglo con los pares [propiedad, valor] del objeto
  Object.entries(extendedGame)
  //a partir de aqui lo puedo recorrer igual que un arreglo

  Object.entries(extendedGame).forEach(
    ([key, value]) => {
      console.log(`${key} -> ${value}`)
    }
  )
}

export default dataStructure;
