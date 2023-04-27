// disable eslint because we are declaring variables without using them
/* eslint-disable */

import { useState } from 'react';
import chars, { names, trollNames } from './fn'

const TsApp01 = () => {

  const nombre = "dave"
  // los tipos se infieren automaticamente con ts
  //💥 nombre = 30 // Type 'number' is not assignable to type 'string'

  // los tipos se pueden declarar explicitamente
  const isCool: boolean = true
  // los dos puntos y el tipo son la unica diferencia entre ts y js (basicamente)

  // los tipos de datos primitivos son:
  //    boolean number string null undefined

  // podemos declarar un variable de varios tipos
  let text: string | number = "hello"
  text = 30

  // podemos declarar tipos particulares
  type StringOrNumber = string | number
  let text2: StringOrNumber = "hello"

  //type nos permite usar literales
  type DirectionType = "Up" | "Down" | "Left" | "Right"
  let direction: DirectionType = "Up"
  //💥 direction = "East" // Type '"East"' is not assignable to type 'DirectionType'
  //podemos declarar enums
  enum Direction { Up, Down, Left, Right }

  // podemos usar el tipo comodin any,
  // es como decirle a ts que no valide nada
  let anything: any = "hello"
  anything = 30
  anything = true

  // podemos declarar arrays
  const numbers: number[] = [1, 2, 3, 4, 5]
  // o
  const numbers2: Array<number> = [1, 2, 3, 4, 5]

  // podemos declarar un objeto
  const game = {
    name: "Celeste",
    played: 30,
    recommended: true,
  }

  // para definir el tipo de un objeto usamos la sintaxis de interface
  interface GameI {
    name: string
    played: number
    recommended: boolean
    achievements?: string[] // el signo de interrogacion indica que es opcional (undefined)
  }

  const game2: GameI = {
    name: "Super Meat Boy",
    played: 20,
    recommended: true,
  }

  game2.achievements = ["first blood", "no damage"]

  // podemos declarar funciones
  const getSum = (a: number, b: number): number => { // el tipo de retorno se declara despues de los parametros
    return a + b
  }

  // podemos declarar funciones que no retornan nada
  const printName = (name: string): void => {
    console.log(name)
  }

  // podemos declarar funciones dentro de interfaces
  interface UserI {
    name: string
    getSum: (a: number, b: number) => number
  }

  const user: UserI = { // los tipos de la funcion se infieren automaticamente
    name: "dave",
    getSum: (a, b) => { // no es necesario declarar los tipos de los parametros
      return a + b
    }
  }

  // tipos genericos
  interface DataWithId<T> {
    id: string
    data: T
  }

  const data: DataWithId<number> = {
    id: "1",
    data: 30,
  }

  const data2: DataWithId<string> = {
    id: "2",
    data: "hello",
  }

  // JSX
  const jsx: JSX.Element = <div>hello</div>

  // componente de react
  const Component: React.FC = () => {
    return <div>hello</div>
  }

  // componente de react con props
  interface Props {
    name: string
  }

  const Component2: React.FC<Props> = ({ name }) => {
    return <div>{name}</div>
  }

  // hooks
  const [count, setCount] = useState<number>(0)
  const [name2, setName] = useState<string>() // el tipo es opcional porque no se inicializa

};

export default TsApp01
