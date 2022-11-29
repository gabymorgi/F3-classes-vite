import React from 'react'
import { createContext } from "react";

export const ChangoContext = createContext("default value");

export const ChangoProvider = (props) => {
  const [chango, setChango] = React.useState([])

  const addRandomToChango = () => {
    setChango([...chango, chango.length])
  }

  const removeRandomFromChango = () => {
    const newChango = [...chango]
    newChango.pop()
    setChango(newChango)
  }

  const value = {
    chango,
    add: addRandomToChango,
    remove: removeRandomFromChango,
  }

  return (
    <ChangoContext.Provider value={value}>
      {props.children}
    </ChangoContext.Provider>
  );
}