import { useEffect, useState } from "react"

const VALUE_KEY = "valber"

const App = () => {
  const [value, setValue] = useState(
    localStorage.getItem(VALUE_KEY) ? JSON.parse(localStorage.getItem(VALUE_KEY)) : []
  )

  console.log(value)

  function increment() {
    const newValue = [...value, value.length + 1]
    setValue(newValue)
    localStorage.setItem(VALUE_KEY, JSON.stringify(newValue))
  }

  return (
    <>
      <button onClick={increment}>Incrementar</button>
      El numero: {value.length}
    </>
  )
}

export default App
