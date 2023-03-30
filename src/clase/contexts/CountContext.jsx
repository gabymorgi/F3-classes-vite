import { createContext, useState } from "react";

export const CountContext = createContext();

export function CountProvider(props) {
  const numberFromStorage = Number(localStorage.getItem("number"));
  const listFromStorage = JSON.parse(localStorage.getItem("list") || "[]");
  const [number, setNumber] = useState(numberFromStorage)
  const [listNumbers, setListNumbers] = useState(listFromStorage)
  console.log("proveedor", number)
  //escribir logica para manejar los valores
  function incrementar() {
    const newNumber = number + 1;
    setNumber(newNumber)
    localStorage.setItem("number", newNumber);
  }
  function decrementar() {
    const newNumber = number - 1;
    setNumber(newNumber)
    localStorage.setItem("number", newNumber);
  }

  function addToList(numero) {
    console.log("aquiii")
    const newList = [...listNumbers, numero]
    localStorage.setItem("list", JSON.stringify(newList))
    setListNumbers(newList)
  }

  
  const value = {
    number: number,
    incrementar: incrementar,
    decrementar: decrementar,
    listNumbers: listNumbers,
    addToList: addToList,
  }
  console.log("prov", value)
  return (
    <CountContext.Provider value={value}>
      {props.children}
    </CountContext.Provider>
  )
}
