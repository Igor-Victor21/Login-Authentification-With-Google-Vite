# Login-Authentification-With-Google-Vite

Repositório de Login com autenticação com o Google

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
- App.tsx Retire todos os imports, Retire a variável de cont, e Retire tudo de dentro do fragment (<></>) dentro do return
- index.css limpe tudo e zere tudo com: \*{padding:0; margin:0; box-sizing: border-box;}

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

# AVISO DE POSSÍVEL ERRO DE VERSÃO

O projeto pode apresentar erro ao utilizar <BrowserRouter>, como mensagens de "Invalid hook call" ou "Cannot read properties of null (reading 'useRef')". Isso geralmente acontece quando o projeto está usando versões experimentais ou incompatíveis do React e do React Router, por exemplo React 19 e React Router 7, que ainda não têm suporte completo.<br/>
<br/>
Para resolver, é necessário alinhar as versões para estáveis: React 18 e React Router 6. Também é importante limpar as dependências antigas e reinstalar os pacotes, garantindo que o <BrowserRouter> e os hooks funcionem corretamente. Com essas versões, o projeto roda sem esse tipo de erro.<br/>
<br/>
Prompt Modelo para usar com o ChatGPT<br/>
<br/>
"ChatGPT, estou com um erro no meu projeto React/Vite. Aqui está o log do console:<br/>
[cole o erro completo aqui]
<br/>
Minha versão atual do React, React DOM e React Router DOM é:<br/>
[cole npm ls react react-dom react-router-dom aqui]<br/>
<br/>
Meu main.tsx é:<br/>
[cole o código do main.tsx aqui]<br/>
<br/>
Pode me explicar o que está causando esse erro, resumir em poucas palavras e me indicar como resolver de forma prática?"<br/>

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

Gemini tem seus pontos bons que podem ajudar com debug de código tirar duvidas etc, porém ele pode ser falho e lento além dele ser pago depois de um tempo _NÃO RECOMENDO_

- Continuar

- Escolha se deixa o analytics ligado ou não (RECOMENDO)

O analytics é totalmente gratuito, porém tem que estar muito bem configurado pois caso não esteja, ele acaba trazendo dados genéricos _RECOMENDO_

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

- Criando uma variável para receber as funcionalidades do provedor de autentificação do google

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
<br/>

- Vai ser modificado esse trecho de código só que mais la para frente, colocando em uma arrow function.

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

Clique em usuários e coloque um E-mail válido e uma senha (Coloque uma senha diferente do seu E-mail real).

# Hora do Código

- Além do que ja foi feito la em cima em "Instalação de biblioteca e criação de arquivos"

# Imports

import { useEffect, useState } from 'react'<br/>
import { useNavigate, Link } from 'react-router-dom' <br/>

# Variável de estado

- Uma constante para navegar entre os endpoints

const navigate = useNavigate()<br/>

const [email, setEmail] = useState('')<br/>
const [password, setPassword] = useState('')<br/>
const [user, setUser] = useState(null)<br/>
const [message, setMessage] = useState('')<br/>

# useEffect

useEffect(() => {<br/>
const storedUser = localStorage.getItem('user')<br/>
if (storedUser) {<br/>
setUser(JSON.parse(storedUser))<br/>
navigate('/loginSuccessful')<br/>
}<br/>
}, [navigate])<br/>
<br/>
Com isso quando o sistema for iniciado ele vai verificar o usuário que está no localStorage, se tiver algum usuário no localStorage ele vai setar as informações do usuário na variável de estado (user, setUser), assim liberando acesso ao sistema

# handleGoogleLogin

Essa arrow function vai servir para autenticar o botão "Continuar com o Google", simplificando o login do usuário. Ela abre um popup na tela para que o usuário entre com seu e-mail, facilitando o processo de login no site.
<br/>
const handleGoogleLogin = () => {<br/>
const provider = new GoogleAuthProvider();<br/>
signInWithPopup(auth, provider)<br/>
.then((result) => {<br/>
setUser(result.user)<br/>
localStorage.setItem('user', JSON.stringify(result.user))<br/>
navigate('/loginSuccessful')<br/>
})<br/>
.catch((error) => {<br/>
console.error("Erro no login com Google:", error);<br/>
});<br/>
}<br/>
<br/>

- Funcionamento
  <br/>
  Basicamente, foi criada uma constante que recebe o provedor de autenticação chamado provider. Ele é passado como parâmetro para a função signInWithPopup, junto com a instância de auth, para autenticar o e-mail que o usuário escolher. Quando a função é executada, o resultado é armazenado na variável de estado do usuário e, em seguida, o localStorage guarda temporariamente as informações do usuário em sua memória.

# handleEmailLogin

Essa arrow function efetua o login via input, sendo necessário que exista um usuário previamente cadastrado no Firebase Authentication na aba de usuários. Caso não haja nenhum cadastrado, o login por input não funcionará, restando apenas a opção de login com o botão “Continuar com o Google”.

<br/>
const handleEmailLogin = (e) => {<br/>
e.preventDefault()<br/>
signInWithEmailAndPassword(auth, email, password)<br/>
.then((userCredential) => {<br/>
setUser(userCredential.user)<br/>
localStorage.setItem('user', JSON.stringify(userCredential.user))<br/>
navigate('/loginSuccessful')<br/>
})<br/>
.catch((error) => {<br/>
console.error("Erro no login com e-mail:", error);<br/>
});<br/>
}<br/>
<br/>
- Funcionamento
<br/>
Essa função recebe um evento (e) como parâmetro e chama e.preventDefault() para impedir o comportamento padrão do formulário. Em seguida, utiliza a função signInWithEmailAndPassword, passando como parâmetros a instância de autenticação (auth), além do e-mail e senha vindos das variáveis de estado (email e password).

O resultado desse processo é retornado em um objeto userCredential. As informações do usuário (userCredential.user) são armazenadas na variável de estado user por meio do setUser, e também gravadas no localStorage. Caso ocorra algum erro no processo, ele será exibido no console.

# Inputs e botões

Aqui temos apenas inputs simples que atualizam os estados com as informações digitadas pelo usuário. Esses valores depois são utilizados pelas arrow functions responsáveis por validar e efetuar o login.

<br/>
<div className={style.container}><br/>
      <h1>Login</h1><br/>
      <form onSubmit={handleEmailLogin}><br/>
          <input type="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)}/><br/>
          <input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)}/><br/>
      </form><br/>
        <button type="submit">Login</button><br/>

      <button onClick={handleGoogleLogin}>Continuar com Google</button><br/>
    </div><br/>
  )<br/>
}<br/>

# DOCUMENTAÇÃO FINALIZADA