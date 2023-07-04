import { useState } from 'react'
import { createContext } from "react";

// preferentemente, el valor inicial del context deberia ser undefined
// cosa que si intentamos usar el context sin un provider, nos tire un error
// intenta cambiar el valor inicial a undefined y fijate que pasa
export const ChartContext = createContext({});

export const ChartProvider = (props) => {
  const [number, setNumber] = useState(0)

  function changeNumber() {
    //change number with a random number between 0 and 100
    setNumber(Math.floor(Math.random() * 100))
  }

  // estos son los valores que vamos a compartir con los componentes hijos
  const value = {
    number,
    changeNumber
  }

  return (
    <ChartContext.Provider value={value}>
      {/* quien use este provider, va a definir que componentes tienen acceso a los valores */}
      {props.children}
    </ChartContext.Provider>
  );
}