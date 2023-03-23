import ReactDOM from 'react-dom/client'
import { makeServer } from './fakeApi/server'
import './index.css'
import MainLayout from './mainLayout/MainLayout'

// makeServer()

// punto de entrada de la aplicación
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // comento el StrictMode para evitar dobles renderizados
  // <React.StrictMode>
    <MainLayout />
  // </React.StrictMode>
)
