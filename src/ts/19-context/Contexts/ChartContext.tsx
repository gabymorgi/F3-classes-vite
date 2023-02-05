import { useState } from 'react'
import { createContext } from "react";

interface ChartContextI {
  number: number
  changeNumber: () => void
}

interface ChartProviderProps {
  children: React.ReactNode
}

export const ChartContext = createContext<ChartContextI>({} as ChartContextI);

export const ChartProvider = (props: ChartProviderProps) => {
  const [number, setumber] = useState<number>(0)

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