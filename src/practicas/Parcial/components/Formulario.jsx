import { useState } from "react";

function Formulario(props) {
  const [name, setName] = useState("");
  const [pet, setPet] = useState("");
  const [error, setError] = useState("");
  const isMobile = window.innerWidth < 768;

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangePet(e) {
    setPet(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const cleanName = name.trim();
    if (cleanName.length <= 3) {
      console.error("Name must be longer than 3 characters");
      setError("Name must be longer than 3 characters");
      return;
    }
    if (pet.length <= 6) {
      console.error("Pet name must be longer than 6 characters");
      setError("Pet name must be longer than 6 characters");
      return;
    }
    setError("");
    props.onSubmit({ name, pet });
    console.log("submit", name, pet);
  }

  let errorJSX = null;
  if (error !== "") {
    errorJSX = <p className="pclass">{error}</p>;
  }
  switch (error) {
    case "Name must be longer than 3 characters":
      errorJSX = <p className="pclass">{error}</p>;
      break;
    case "Pet name must be longer than 6 characters":
      errorJSX = <p className="pclass">{error}</p>;
      break;
    default:
      errorJSX = null;
  }

  return (
    <>
      <div>
        <h1>Formulario</h1>
        <form onSubmit={handleSubmit}>
          <input
            value={name}
            onChange={handleChangeName}
            placeholder="enter your name"
          />
          <input
            value={pet}
            onChange={handleChangePet}
            placeholder="enter your pet's name"
          />
          <button type="submit">Submit</button>
        </form>
        {null}
        {error !== "" ? <p>{error}</p> : <form></form>}
        {errorJSX}
        {error === "Name must be longer than 3 characters"
          ? "a"
          : error === "pet"
          ? "b"
          : error === "c"
          ? "c"
          : "d"}
      </div>
      {isMobile ? (
        <div className="mobile">{errorJSX}</div>
      ) : (
        <div className="desktop">
          <div>Menu</div>
          {errorJSX}
        </div>
      )}
    </>
  );
}

export default Formulario;
