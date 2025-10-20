import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from './api/api';
import style from './App.module.css';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
  e.preventDefault();
  setError('');
  setMessage('');

  try {
    const response = await api.post('/login', { email, password }, { withCredentials: true });
    const user = response.data.user;

    // Salvar apenas o que existe
    localStorage.setItem("user", JSON.stringify(user));

    // Se tiver rota admin pronta
    try {
      const adminCheck = await api.get("/admin/dashboard", { withCredentials: true });
      navigate(adminCheck.status === 200 ? "/loginSuccessful" : "/loginSuccessfulUsers");
    } catch {
      navigate("/loginSuccessfulUsers");
    }
  } catch (err: any) {
    setError(err.response?.data?.message || "Erro no login");
  }
};


  const handleForgotPassword = async () => {
    try {
      const response = await api.post('/forgot-password', { email });
      alert(response.data.message);
    } catch (err: any) {
      alert(err.response?.data?.message || "Erro ao enviar link");
    }
  };

  return (
    <section className={style.wrapLogin}>
      <div className={style.container}>
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <input type="email" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)} />
          <input type="password" placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)} />
          <button className={style.btnSubmit} type="submit">Login</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {message && <p style={{ color: 'green' }}>{message}</p>}
        <button type="button" onClick={handleForgotPassword} className={style.btnEsqueciSenha}>
          Esqueci a senha
        </button>
      </div>
    </section>
  );
}

export default App;
