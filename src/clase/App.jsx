import { useState } from "react"

const App = () => {
  const [submitedValue, setSubmitedValue] = useState("")
  const [nombre, setNombre] = useState("")
  const [price, setPrice] = useState()
  const [error, setError] = useState("")

  function handleChangeName(event) {
    console.log("change input", event.target.value)
    console.log(event.target.value.match(/^([^0-9]*)$/))
    if (event.target.value.match(/^([^0-9]*)$/)) {
      setNombre(event.target.value)
    }
  }

  function handleChangeNumber(event) {
    const value = Number(event.target.value)
    console.log(value, value > 0)
    if (value > 0) {
      setPrice(value)
    }
  }

  function handleSubmit(event) {
    event.preventDefault()
    console.log("on submit", nombre)
    // setSubmitedValue("")
    if (!nombre) {
      console.error("nombre no puede ser vacio")
      setError("nombre no puede ser vacio")
      return
    }
    setError("")
    setSubmitedValue({ nombre, price })
    setNombre("")
    setPrice("")
  }

  return (
    <>
      <h1>Forms</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="escribi tu nombre"
          name="nombre"
          type="text"
          value={nombre}
          onChange={handleChangeName}
        />
        <input type="number" onChange={handleChangeNumber} value={price} />
        <button type="submit">Submit</button>
      </form>
      {error ? <h2>{error}</h2> : undefined}
      {submitedValue ? <h2>{submitedValue.nombre}</h2> : undefined}
      {/* {submitedValue && <h2>{submitedValue}</h2>} */}
    </>
  )
}

export default App
