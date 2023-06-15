import { useState } from "react"
import { Navigate } from "react-router-dom"

function ProtectedElement({ children }) {
  // simulo que hay un usuario logueado
  const [user] = useState({ name: 'pepe' })

  // de esta forma solo se muestra el contenido si hay un usuario logueado
  // si no hay un usuario logueado, se redirige a la ruta '/'
  return user ? children : <Navigate to='/' />
}

export default ProtectedElement
