import ReactDOM from 'react-dom/client'
import './styles/index.css'
import './styles/atoms.css'
import './styles/scrollbar.css'
import MainLayout from './mainLayout/MainLayout'

// punto de entrada de la aplicación
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // comento el StrictMode para evitar dobles renderizados
  // <React.StrictMode>
    <MainLayout />
  // </React.StrictMode>
)
