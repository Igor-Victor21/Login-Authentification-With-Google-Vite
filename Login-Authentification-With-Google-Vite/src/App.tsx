// App.tsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from './api/api'
import style from './App.module.css';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

 const handleLogin = async (e) => {
  e.preventDefault();

  try {
    const response = await api.post('/login', { email, password }, { withCredentials: true });
    const user = response.data.user;

    localStorage.setItem("user", JSON.stringify(user));

    // Verifica se é admin
    if (user.admin) {
      navigate("/loginSuccessful"); // Tela de admin
    } else {
      navigate("/loginSuccessfulUsers"); // Tela comum
    }
  } catch (err) {
    setError(err.response?.data?.message || "Erro no login");
  }
};

  return (
    <div className={style.container}>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)} />
        <input type="password" placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)} />
        <button type="submit">Login</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default App
