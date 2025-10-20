import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//Import das Rotas (Cada nova página criada vai ter que adicionar o import dela aki em cima)
import './index.css'
import App from './App.tsx'
import LoginSuccessful from './LoginSuccessful.tsx'
import LoginSuccessfulUsers from './LoginSuccessfulUsers.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}/>
        <Route path='/loginSuccessful' element={<LoginSuccessful/>}/>
        <Route path='/loginSuccessfulUsers' element={<LoginSuccessfulUsers/>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
