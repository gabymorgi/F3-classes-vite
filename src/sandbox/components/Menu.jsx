import { useState } from "react"

function Menu(props) {
  const [values, setValues] = useState({
    item: "",
  })
  const [error, setError] = useState()

  console.log(values)

  function handleSubmit(e) {
    e.preventDefault()
    if (!values) {
      setError('Please fill out all fields')
    } else {
      setError()
      props.onSubmit(values)
    }
  }

  function handleInputChange(e) {
    console.log(e)
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="flex-row">
      <h1>Menu</h1>
      {props.children}
      <form onSubmit={handleSubmit}>
        <input
          name="item"
          type="text"
          value={values.item ? values.item : ""}
          onChange={handleInputChange}
        />
        <input
          name="edad"
          type="number"
          value={values.edad || ""}
          onChange={handleInputChange}
        />
        {error ? <p>{error}</p> : undefined}
        <button type="submit">Submit</button>
      </form>
      
    </div>
  )
}

export default Menu
