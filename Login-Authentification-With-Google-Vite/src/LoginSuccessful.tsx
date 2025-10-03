import { useState, useEffect } from 'react';
import style from './LoginSuccessful.module.css';
import { auth } from "./firebase";
import { useNavigate } from "react-router-dom";

function LoginSuccessful() {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const storedUser = localStorage.getItem('user');
  const user = storedUser ? JSON.parse(storedUser) : null;
  const navigate = useNavigate();

  if (!user) return <div>Nenhum usuário encontrado</div>;

  const handleCreateUser = async () => {
    try {
      const response = await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include', 
        body: JSON.stringify({ displayName, email, password })
      });

      const data = await response.json();
      setMessage(response.ok ? "Usuário criado com sucesso!" : `Erro: ${data.message}`);
    } catch (err) {
      setMessage("Erro ao criar usuário.");
    }
  };

  useEffect(() => {
    const fetchAdminCheck = async () => {
      try {
        const response = await fetch("http://localhost:3000/admin/dashboard", {
          credentials: "include"
        });
        if (!response.ok) navigate("/loginSuccessfulUsers"); // se não for admin, redireciona
      } catch (err) {
        navigate("/"); // se der erro, volta para login
      }
    };
    fetchAdminCheck();
  }, [navigate]);

  return (
    <div className={style.container}>
      <h2>Bem-vindo {user.email}</h2>

      {user.admin && (
        <>
          <h3>Criar novo usuário</h3>
          <input type="text" placeholder="Nome completo" value={displayName} onChange={e => setDisplayName(e.target.value)} />
          <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
          <input type="password" placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)} />
          <button onClick={handleCreateUser}>Criar usuário</button>
        </>
      )}

      {message && <p>{message}</p>}
    </div>
  );
}

export default LoginSuccessful;
