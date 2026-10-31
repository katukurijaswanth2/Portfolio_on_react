import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import App from './App.jsx'
import Blog from './Pages/Blog.jsx'
import { BrowserRouter } from 'react-router-dom'
import SoundEffects from './components/sounds/Usesoundeffects.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <App />
    <SoundEffects />
    </BrowserRouter>
   
  </StrictMode>,
)