import { useState } from "react";
import { useSearchParams } from "react-router-dom";

function Form() {
  const [select, setSelect] = useState("");
  const [input, setInput] = useState("");
  const [, setSearchParams] = useSearchParams()

  function handleSubmit(e) {
    e.preventDefault()
    setSearchParams({ genre: select, minPlayedTime: input })
  }

  return (
    <form className="flex">
      <select
        onChange={(e) => setSelect(e.target.value)}
        value={select}
      >
        <option value='Roguelike'>Roguelike</option>
        <option value='Platformer'>Platformer</option>
        <option value='Action'>Action</option>
        <option value='Adventure'>Adventure</option>
        <option value='Puzzle'>Puzzle</option>
        <option value='Metroidvania'>Metroidvania</option>
        <option value='Simulation'>Simulation</option>
        <option value='Board'>Board</option>
        <option value='Precision'>Precision</option>
      </select>
      <input
        type='text'
        placeholder='min played time'
        value={input}
        onChange={(e) =>
          setInput(e.target.value)
        }
      />
      <button type="submit" onClick={handleSubmit}>Filter</button>
    </form>
  );
}

export default Form;
