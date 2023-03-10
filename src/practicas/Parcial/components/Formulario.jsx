import { useState } from "react";

function Formulario(props) {
  const [name, setName] = useState("");
  const [pet, setPet] = useState("");
  const [error, setError] = useState("");
  //just for testing
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
  //si necesitamos logica compleja para mostrar algo en el DOM
  // podemos usar un switch y una variable
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
        <p>{error}</p> {/**el p queda siempre en el DOM */}
        {/**no es una forma correcta de render condicional */}
        {null} {/**react lo ignora, como ella a ti :( */}
        {errorJSX}
        {/**asi se haria un switch, es medio feo */}
        {error === "Name must be longer than 3 characters"
          ? "a"
          : error === "pet"
          ? "b"
          : error === "c"
          ? "c"
          : "d"}
      </div>
      {isMobile ? (
        <div className="mobile">
          {/**reutilizo el componenete en distintos lugares */}
          {errorJSX}
        </div>
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
