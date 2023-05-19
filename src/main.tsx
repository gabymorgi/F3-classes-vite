import ReactDOM from 'react-dom/client'
import './index.css'
import './atoms.css'
import MainLayout from './mainLayout/MainLayout'
import React from 'react'

// punto de entrada de la aplicación
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // comento el StrictMode para evitar dobles renderizados
  // <React.StrictMode>
    <MainLayout />
  // </React.StrictMode>
)
