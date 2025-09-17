import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//Import das Rotas (Cada nova página criada vai ter que adicionar o import dela aki em cima)
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
