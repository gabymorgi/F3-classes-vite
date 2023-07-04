import { useState } from "react";
import { useSearchParams } from "react-router-dom";

function FilterForm() {
  // useSearchParams nos permite acceder a los parametros de la url
  // a los que estan despues del "?"
  // no nos devuelve un objeto generico, sino un objeto de tipo URLSearchParams
  const [, setSearchParams] = useSearchParams();
  const [inputValue, setInputValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    // setSearchParams es un poco raro de usar, espera un objeto generico
    setSearchParams({ name: inputValue });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Search game"
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default FilterForm;
