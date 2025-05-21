import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Solicitud from './Solicitud.tsx'
import Validar from './Validar.tsx'
import Crearnueva from './Crearnueva.tsx'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> 
    <solicitud />
    <Validar />*/}
    <App />
  </StrictMode>,
)
