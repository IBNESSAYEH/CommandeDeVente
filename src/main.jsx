import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ProductProvider } from './context/ProductContext.js'
import { AppProvider } from './context/AppContext.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
        <App />
  </StrictMode>,
)