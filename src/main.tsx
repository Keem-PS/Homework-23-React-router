import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import WrapperApp from './components/WrapperApp.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <WrapperApp></WrapperApp>
  </StrictMode>,
)
