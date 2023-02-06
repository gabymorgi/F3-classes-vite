import { useState } from 'react'
import { createContext } from "react";

export const ChartContext = createContext({});

export const ChartProvider = (props) => {
  const [number, setumber] = useState(0)

  function changeNumber() {
    //change number with a random number between 0 and 100
    setumber(Math.floor(Math.random() * 100))
  }

  const value = {
    number,
    changeNumber
  }

  return (
    <ChartContext.Provider value={value}>
      {props.children}
    </ChartContext.Provider>
  );
}