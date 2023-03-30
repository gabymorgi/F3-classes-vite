import { useContext, useState } from "react";
import { CountContext } from "../contexts/CountContext";

function FormNumbers() {
  const [number, setNumber] = useState(0);
  const value = useContext(CountContext);

  function handleChange(event) {
    setNumber(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    value.addToList(number)
  }

  console.log("render form")

  return (
    <form onSubmit={handleSubmit}>
      <input type="number" value={number} onChange={handleChange} />
      <button type="submit">Agregar</button>
    </form>
  );
}

export default FormNumbers;