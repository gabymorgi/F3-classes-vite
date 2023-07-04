import { useRef, useState } from "react"
import BigSection from "./BigSection"
import Clock from "./Clock"

const App = () => {
  const [showClock, setShowClock] = useState(true)
  const ref = useRef(null)

  function handleClick() {
    if (ref.current) {
      // movemos la pantalla hasta el elemento que tiene el ref
      ref.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      <button onClick={() => setShowClock(!showClock)}>Toggle clock</button>
      {showClock && <Clock />}
      <BigSection />
      {/* ref es una prop especial que se usa para guardar una referencia a un elemento del DOM */}
      {/* ref es un objeto con una propiedad current que apunta al elemento del DOM */}
      {/* ref.current es null hasta que el componente se monta */}
      {/* ref.current nos permite hacer lo mismo que antes con document.getElementById */}
      <img
        ref={ref}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Juvenile_Ragdoll.jpg/1024px-Juvenile_Ragdoll.jpg"
      />
      <BigSection />
      <BigSection />
      <BigSection />
      <button onClick={handleClick}>Go back to kitten</button>
    </>
  )
}

export default App
