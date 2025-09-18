import { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

//Import para realizar login com o google
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "./firebase";

import style from './App.module.css';

function App() {

  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)
  const [message, setMessage] = useState('')

  useEffect(() => {
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser)
      setUser(parsedUser)
        navigate('/')
    }
  }, [navigate])
  

  // Cria o provedor do Google
  const provider = new GoogleAuthProvider();

  // Faz login com popup
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log("Usuário logado:", result.user);
    })
    .catch((error) => {
      console.error("Erro no login:", error);
    });

  return (
    <>
      <h1>Olá :D</h1>
    </>
  )
}

export default App
