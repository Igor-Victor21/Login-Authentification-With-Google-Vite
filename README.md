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

# Criando Firebase Authentication 

- Para fazer a verificação com o Google, irei utilizar o Firebase, pois ele oferece diversas funcionalidades além de banco de dados, o que torna a administração mais fácil.

##

- Entre no site deles
https://firebase.google.com/?gclsrc=aw.ds&gad_source=1&gad_campaignid=12302581638&gbraid=0AAAAADpUDOhfF61Y9XrDJ_iTvjEs86lDA&gclid=Cj0KCQjw267GBhCSARIsAOjVJ4Hac8pJLf6oiZQeYD5cj9LtSKHarSf0Dm0gtFoT0riI3tCzz8pJY_kaAin5EALw_wcB&hl=pt-br

- Verifique se é a conta certa do google que está conectada

- Depois clique em "Ir para o console" 

- Clique em "Comece configurando um Projeto do Firebase"
PS: Caso ja tenha um projeto crie um novo projeto de authentification ou dentro do seu projeto ative a opção de authentification

- Insira o nome do projeto 

- Aceite os termos do firebase

- Você escolhe se deixa a AI Gemini do google ligada no projeto ou não (Não recomendo)

Gemini tem seus pontos bons que podem ajudar com debug de código tirar duvidas etc, porém ele pode ser falho e lento além dele ser pago depois de um tempo *NÃO RECOMENDO*

- Continuar

- Escolha se deixa o analytics ligado ou não (RECOMENDO)

O analytics é totalmente gratuito, porém tem que estar muito bem configurado pois caso não esteja, ele acaba trazendo dados genéricos *RECOMENDO* 

- Continuar

- Coloque a localização do analytics no brasil, aceite os termos e crie o projeto

- Continuar

- Adicione um novo app (WEB)

Coloque um apelido no seu projeto 

- Escolha se vc quer ativar Firebase Hosting para este app

Com ele vc consegue serviço de hospedagem do seu site, não vou ativar pois não precisa da opção ativa para fazer a autentificação

# Instalação de biblioteca e criação de arquivos

- Agora precisa instalar a biblioteca do firebase 

npm install firebase

- Depois inicialize o Firebase e comece a usar os SDKs dos produtos.

Copie o Código fornecido, e crie um novo arquivo na src firebase.tsx (ou .js), e cole o código la dentro e import duas novas bibliotecas
import { getAuth } from "firebase/auth"; <br/>
import { getFirestore } from "firebase/firestore";<br/>

Retirei o import do analytics e a inicialização do mesmo

## 

- No arquivo App.tsx

Import as bibliotecas do arquivo firebase.tsx

import { auth } from "./firebase";<br/>
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";<br/>

- Criando uma variavel para receber as funcionalidades  do provedor de autentificação do google

const provider = new GoogleAuthProvider();

- Chamando a função de logar com um POPUP e pegando as informações da autentificação e do provedor de autentificação do google 

signInWithPopup(auth, provider)<br/>
  .then((result) => {<br/>
    console.log("Usuário logado:", result.user);<br/>
  })<br/>
  .catch((error) => {<br/>
    console.error("Erro no login:", error);<br/>
  });<br/>

E com isso ele espera um resultado que caso de certo de realizar o login com o POPUP ele vai exibir o resultado no console indicando que o usuário está logado. <br/>
Caso não consiga logar ele irá retorna o erro no console também.

# AVISO IMPORTANTE

Essa forma de fazer a verificação, usando o arquivo firebase.ts no front-end, não é a mais segura.
O jeito correto é realizar toda a autenticação na sua própria API, pois assim as informações sensíveis não ficam expostas aos usuários.
Se alguém mal-intencionado tiver acesso a essas informações, pode causar vazamento de dados do usuário ou da empresa.
<br/>
Por enquanto, este exemplo é mais básico, apenas para quem está estudando entender como funciona um sistema de login com Google.
No futuro, pretendo mostrar uma API completa com banco de dados, autenticação com Google, tokens, permissões e integração com front-end.

# Continuando no console do site do Firebase

- Continuar no console

- Na barra de navegação da lateral esquerda clique em criação, e vá em "Authentication" clique em "Vamos começar".

- Seleciona as opções desejadas 

Escolhi:<br/>
Google(Coloque o nome público do projeto e o seu E-mail de suporte, Salve a configuração )<br/>
E-mail/Senha (Não ativei a função de logar com e-mail com o link, Salve a configuração)<br/>

# Cadastre um usuário no site do firebase

- Precisa cadastrar um usuário no site do firebase para conseguir logar com o E-mail e senha pelo input

Clique em usuários e coloque um E-mail valido e uma senha (Coloque uma senha diferente do seu E-mail real).

# Hora do Código 

- Além do que ja foi feito la em cima em "Instalação de biblioteca e criação de arquivos"












