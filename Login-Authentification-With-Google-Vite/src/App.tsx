import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import style from './App.module.css';

function App() {
  const navigate = useNavigate()
  const [user, setUser] = useState(null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
      navigate('/')
    }
  }, [navigate])

  const handleGoogleLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user)
        localStorage.setItem('user', JSON.stringify(result.user))
        navigate('/loginSuccessful')
      })
      .catch((error) => {
        console.error("Erro no login com Google:", error);
      });
  }

  const handleEmailLogin = (e) => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user)
        localStorage.setItem('user', JSON.stringify(userCredential.user))
        navigate('/loginSuccessful')
      })
      .catch((error) => {
        console.error("Erro no login com e-mail:", error);
      });
  }

  return (
    <div className={style.container}>
      <h1>Login</h1>
      <form onSubmit={handleEmailLogin}>
          <input type="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)}/>
          <input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)}/>
      </form>
        <button type="submit">Login</button>

      <button onClick={handleGoogleLogin}>Continuar com Google</button>
    </div>
  )
}

export default App
