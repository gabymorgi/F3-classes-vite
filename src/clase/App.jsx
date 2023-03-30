import { useContext } from "react";
import CardConContext from "./components/CardConContext";
import CardSinContext from "./components/CardSinContext";
import FormNumbers from "./components/FormNumbers";
import ListOfNumbers from "./components/ListOfNumbers";
import OtroComponente from "./components/OtroComponente";
import { CountContext, CountProvider } from "./contexts/CountContext";

export default function App() {
  const contextValue = useContext(CountContext);

  console.log("app", contextValue)
  return (
    <>
      Context
      <CardSinContext />
      <CountProvider>
        <CardConContext />
        <OtroComponente />
        <hr />
        <FormNumbers />
        <hr />
        <ListOfNumbers />

      </CountProvider>
    </>
  )
}
