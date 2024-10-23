import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ConfigurationRouter } from './ConfigurationRouter'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ConfigurationRouter />
  </StrictMode>,
)
