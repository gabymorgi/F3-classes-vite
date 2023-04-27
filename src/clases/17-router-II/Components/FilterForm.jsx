import { useState } from "react";
import { useSearchParams } from "react-router-dom";

function FilterForm() {
  const [, setSearchParams] = useSearchParams();
  const [inputValue, setInputValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
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
