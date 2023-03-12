import { useEffect } from "react"

function TestComponent() {

  useEffect(() => {
    console.log("Activo")

    return () => {
      console.log("Desactivo")
    }
  }, [])

  return (
    <div>
      Akistoi
    </div>
  )
}

export default TestComponent
