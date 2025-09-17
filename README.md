# Login-Authentification-With-Google-Vite
Repositório de Login com autentificação com o google

# Criando o Projeto em Vite

- npm create vite@latest
- Nome do Projeto
- Nome da Pasta
- Selecione o framework (React)
- TypeScript ou JavaScript (Escolhi TypeScript)
- cd nome do projeto 
- npm install
- npm run dev

# Limpando o Projeto

- Limpe a App.css e renomeie para App.module.css
- App.tsx Retire todos os imports, Retire a variavel de cont, e Retire tudo de dentro do fragment (<></>) dentro do return
- index.css limpe tudo e zere tudo com: *{padding:0; margin:0; box-sizing: border-box;}

- Projeto limpo

# Ajuste a main.tsx para melhor organização das rotas

- Baixar a biblioteca react-router-dom

    npm i react-router-dom

##

- Imports da main

    import { StrictMode } from 'react'<br/>
    import { createRoot } from 'react-dom/client'<br/>
    import { BrowserRouter, Routes, Route } from 'react-router-dom'<br/>

##

- Import das Rotas

    import './index.css'<br/>
    import App from './App.tsx'<br/>

##

- Organizar o root 

    Retire o <App/><br/>
    Adicione <BrowserRouter><BrowserRouter/><br/>
    Dentro do BrowserRouter adicione: <Routes><Routes/><br/>
    Dentro do Routes adicione: <Route path='/' element={<App/>}/>

##
    
- Código do root

    <StrictMode><br/>
    <BrowserRouter><br/>
      <Routes><br/>
        <Route path='/' element={<App />}/>
      <br/></Routes><br/>
    </BrowserRouter><br/>
  </StrictMode>,<br/>

# Começando o Login na App.tsx







