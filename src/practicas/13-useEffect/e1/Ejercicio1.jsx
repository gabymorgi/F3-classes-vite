import { useEffect } from "react"

function Ejercicio1() {
  useEffect(() => {
    console.log('Wenas')
  }, [])

  return (
    <div>
      Wenas
    </div>
  )
}

export default Ejercicio1
