import { useContext } from "react";
import { NoContext } from "./Components/NoContext";
import { WithContext } from "./Components/WithContext";
import { ChartContext, ChartProvider } from "./Contexts/ChartContext";

const App = () => {
  const context = useContext(ChartContext);

  const handleClick = () => {
    console.log(context) // {}
    //el boton esta dentro del provider, pero esta funcion no.
    //ojo con el scope de las funciones
  };
  return (
    <div>
      <NoContext />
      <ChartProvider>
        <button onClick={handleClick}>Click</button>
        <WithContext />
      </ChartProvider>
    </div>
  );
};

export default App;
