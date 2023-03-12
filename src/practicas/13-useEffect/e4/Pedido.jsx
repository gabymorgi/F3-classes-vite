import { useEffect, useState } from "react"

function Pedido(props) {
  const [isConfirmed, setIsConfirmed] = useState(false)

  useEffect(() => {
    console.log("Procesando pedido...")
    const timeout = setTimeout(() => {
      console.log("Pedido procesado")
      setIsConfirmed(true)
    }, 2000)

    return () => {
      console.log("Cancelando pedido...")
      clearTimeout(timeout)
    }
  }, [])

  return (
    <div>
      {isConfirmed ? <h1>Pedido Listo!!!</h1> : <h1>Procesando pedido...</h1>}
      <button onClick={props.onCancel}>Cancelar pedido</button>
    </div>
  )
}

export default Pedido
