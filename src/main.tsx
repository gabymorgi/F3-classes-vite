import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'antd/dist/antd.dark.css';
import { BrowserRouter } from 'react-router-dom'
// import App from './c2-Intro/App.jsx'
// import App from './c3-repaso/App.jsx'
// import App from './c5-props/App.jsx'
// import App from './c6-repaso/App.jsx'
// import App from './c7-state/App.jsx'
// import App from './c8-state/App.jsx'
// import App from './c9-form/App.jsx'
// import App from './c10-preparcial/App.jsx'
// import App from './c13-useEffect/App.jsx'
// import App from './c14-fetch/App.jsx'
// import App from './c16-router/App.jsx'
// import App from './c17-testing/App.jsx'
import App from './c18-repaso/App.jsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  // </React.StrictMode>
)
