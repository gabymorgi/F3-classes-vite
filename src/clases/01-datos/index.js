// disable eslint because we are declaring variables without using them
/* eslint-disable */

// existen 2 tipos de imports
// import default, import named
// import default
import alfabeto from "./fn"
// podemos nombrar la variable como queramos
// import named
import { names, trollNames } from "./fn"
// debemos usar el mismo nombre que el exportado

const JsData = () => {
  //constante
  const nombre = "dave"
  //no la puedo modificar
  //💥 nombre = "rose" // Cannot assign to 'nombre' because it is a constant
  
  //variable
  let edad = 30
  //la puedo modificar
  edad = 60

  // los tipos simples son inmutables
  let copyEdad = edad
  copyEdad = 100
  console.log({ edad, copyEdad })
  // { edad: 60, copyEdad: 100 }
  // los tipos simples son: number, string, boolean, undefined, null
  // si, string es un tipo simple en js 🙄, no es un objeto

  // ademas tenemos arreglos y objetos

  // objetos
  const pokimon = {
    id: 6,
    name: "charizard",
    recommended: true,
  }
  // los objetos son tuplas de clave-valor (key-value)

  //arreglos
  const naturales = [1, 2, 3, 4, 5]
  // internamente los arreglos son objetos
  // con claves numericas y valores
  // pero las propiedades y metodos son diferentes

  //para acceder a las propiedades de un objeto
  //se usa la notación de punto o la notación de corchetes
  pokimon.id // 6
  pokimon["id"] // 6

  // para acceder a los elementos de un arreglo
  //se usa la notación de corchetes
  naturales[0] // 6
  //💥 naturales.0 // Unexpected keyword or identifier

  // no puedo modificar la referencia al arreglo, pero si sus elementos
  // const solo afecta a la referencia en memoria del arreglo
  //💥 naturales = [6, 2, 3, 4, 5]
  naturales[0] = 6 // [6, 2, 3, 4, 5]

  const copyNaturales = naturales
  copyNaturales[0] = 3
  console.log({ naturales, copyNaturales })
  // { naturales: [3, 2, 3, 4, 5], copyNaturales: [3, 2, 3, 4, 5] }
  // una asignacion simple solo copia la referencia en memoria, OJO!

  // podemos anidar objetos y arrays indefinidamente
  const charPokimon = {
    id: 6,
    name: "charizard",
    recommended: true,
    stats: {
      hp: 78,
      attack: 84,
      defense: 78,
      speed: 100,
    },
    moves: ["fire blast", "wing attack", "fly"],
  }
  console.log(charPokimon)
  charPokimon.stats.hp // 78
  charPokimon.moves[0] // "fire blast"

  // string builder
  const pet = "cats"
  const message = `I have ${pet} and I love them`

  //---FUNCIONES---

  function sumaFn(a, b) {
    return a + b
  }
  const suma = (a, b) => {
    return a + b
  }
  // ambas son equivalentes
  
  suma(1, 2) // 3
  sumaFn(1, 2) // 3

  // cuando necesitamos enviar muchos params a una funcion
  // podemos usar un objeto
  const sumaConDecimales = (props) => {
    const suma = props.a + props.b
    return suma.toFixed(props.decimals || 0)
  }

  sumaConDecimales({ a: 1, b: 2, decimals: 2 }) // "3.00"

  // necesitamos saber que props quiere recibir la funcion
  // para poder utilizarla correctamente
  // pero no necesitamos saber como esta implementada :D

  //puedo asignar funciones a objetos y variables
  const functions = {
    suma: suma,
    sumaConDecimales: sumaConDecimales,
  }
  functions.suma(1, 2) // 3

  //puedo enviar funciones como parametros
  const fnConCallback = (callback) => {
    return callback(1, 2)
  }

  fnConCallback(suma) // 3

  function multiplicacion(a, b) {
    return a * b
  }

  fnConCallback(multiplicacion) // 2

  //---DESTRUCTURING---

  // si me da pereza escribir
  pokimon.id
  // puedo usar destructuring
  const { id, name } = pokimon
  // esto es equivalente a
  // const id = pokimon.id
  // const name = pokimon.name
  // debo respetar el nombre de las keys del objeto
  
  //con arreglos
  const [first, second] = naturales
  // esto es equivalente a
  // const first = naturales[0]
  // const second = naturales[1]
  // debo respetar el orden de los elementos del arreglo
  const [, segundo, , cuarto] = naturales
  //si dejo un espacio en blanco, ignora ese elemento

  //spread operator
  const extendedNaturales = [...naturales, 6, 7, 8]
  // esto es equivalente a volcar el contenido de un arreglo
  extendedNaturales[1] = 100
  console.log({ naturales, extendedNaturales })
  // { naturales: [1, 2, 3, 4, 5], extendedNaturales: [1, 100, 3, 4, 5, 6, 7, 8] }
  // el spread operator crea una copia ""superficial"" del arreglo original
  // si el arreglo contiene objetos, estos no se copian, solo se copia la referencia en memoria
  // puedo usar esto para clonar arreglos u objetos
  const copyPokimon = { ...charPokimon }
  copyPokimon.id = 100
  console.log(charPokimon.id, copyPokimon.id)
  // 6 100
  copyPokimon.stats.hp = 100
  console.log(charPokimon.stats.hp, copyPokimon.stats.hp)
  // 100 100


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


  //como itero un objeto?
  //necesito algo que me convierta el objeto en un arreglo
  //para eso existen tres funciones nativas
  //Object.keys(obj) -> devuelve un arreglo con las propiedades del objeto
  Object.keys(charPokimon)
  //Object.values(obj) -> devuelve un arreglo con los valores del objeto
  Object.values(charPokimon)
  //Object.entries(obj) -> devuelve un arreglo con los pares [propiedad, valor] del objeto
  Object.entries(charPokimon)
  //a partir de aqui lo puedo recorrer igual que un arreglo

  Object.entries(charPokimon).forEach(
    ([key, value]) => { //uso destructuring para obtener los valores
      console.log(`${key} -> ${value}`)
    }
  )
};

export default JsData
