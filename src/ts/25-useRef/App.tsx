import { useRef } from "react"
import BigSection from "./BigSection"
import Clock from "./Clock"

const App = () => {
  const ref = useRef<HTMLImageElement>(null)

  function handleClick() {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      <Clock />
      <BigSection />
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
