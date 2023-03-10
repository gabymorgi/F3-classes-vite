import Formulario from "./components/Formulario"
import Card from "./components/Card"
import { useState } from "react"

const dataSubmited = {
  name: "Juan",
  pet: "Pepito"
}

function App() {
  const [data, setData] = useState()
  return (
    <div className="App">
      <Formulario onSubmit={setData} />
      <hr />
      {data ? <Card data={data} /> : null}
    </div>
  )
}

export default App
