import { useState, useEffect } from 'react';
import style from './LoginSuccessful.module.css';
import { auth } from "./firebase";
import { useNavigate } from "react-router-dom";

function LoginSuccessful() {
  interface User {
    uid: string;
    email: string;
    admin: boolean;
  }

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const [allUsers, setAllUsers] = useState<User[]>([]);


  const storedUser = localStorage.getItem('user');
  const user = storedUser ? JSON.parse(storedUser) : null;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAdminCheck = async () => {
      try {
        const response = await fetch("http://localhost:3000/admin/dashboard", {
          credentials: "include"
        });
        if (!response.ok) {
          navigate("/loginSuccessfulUsers");
        } else {
          const data = await response.json();
          // Atualiza localStorage com dados confiáveis do backend
          localStorage.setItem("user", JSON.stringify(data.user));
        }
      } catch (err) {
        navigate("/");
      }
    };
    fetchAdminCheck();
  }, [navigate]);


  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch('http://localhost:3000/users', {
          credentials: 'include'
        });
        const data: User[] = await res.json(); // tipagem aqui também
        if (res.ok) setAllUsers(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchUsers();
  }, []);

  if (!user) return <div>Nenhum usuário encontrado</div>;

  const handleCreateUser = async () => {
    try {
      const response = await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();
      setMessage(response.ok ? "Usuário criado com sucesso!" : `Erro: ${data.message}`);
    } catch (err) {
      setMessage("Erro ao criar usuário.");
    }
  };

  const handleDeleteUser = async (uid: string) => {
    if (!confirm("Tem certeza que deseja deletar este usuário?")) return;

    try {
      const res = await fetch(`http://localhost:3000/users/${uid}`, {
        method: 'DELETE',
        credentials: 'include'
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("Usuário deletado com sucesso!");
        setAllUsers(prev => prev.filter(u => u.uid !== uid));
      } else {
        setMessage(`Erro: ${data.message}`);
      }
    } catch (err) {
      console.error(err);
      setMessage("Erro ao deletar usuário.");
    }
  };

  const handlePromoteUser = async (uid: string) => {
    try {
      const res = await fetch(`http://localhost:3000/make-admin/${uid}`, {
        method: 'POST',
        credentials: 'include'
      });
      if (res.ok) {
        setAllUsers(allUsers.map(u => u.uid === uid ? { ...u, admin: true } : u));
        alert("Usuário promovido com sucesso!");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleDemoteUser = async (uid: string) => {
    try {
      const res = await fetch(`http://localhost:3000/remove-admin/${uid}`, {
        method: 'POST',
        credentials: 'include'
      });
      if (res.ok) {
        setAllUsers(allUsers.map(u => u.uid === uid ? { ...u, admin: false } : u));
        alert("Usuário despromovido com sucesso!");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleLogout = async () => {
    try {
      // Desloga do Firebase
      await auth.signOut();
    } catch (error) {
      console.error("Erro ao deslogar do Firebase:", error);
    }

    // Limpa localStorage
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    // Redireciona para login
    navigate("/");
  };

  return (
    <>
      <section id={style.s1InfoUser}>
        <h2>Bem-vindo {user.displayName}</h2>
        <p>Email: {user.email}</p>
        <p>Admin: {user.admin ? "Sim" : "Não"}</p>
        <div className={style.container}>
          <button onClick={handleLogout} style={{ marginTop: "20px", backgroundColor: "#c0392b", color: "#fff" }}>Logout</button>
        </div>

      </section>

      <section id={style.s2ListUsers}>
        <h3>Usuários cadastrados</h3>
        <ul>
          {allUsers.map(u => (
            <li key={u.uid}>
              {u.email} | UID: {u.uid} | Admin: {u.admin ? "Sim" : "Não"}
              {user.admin && (
                <>
                  <button onClick={() => handlePromoteUser(u.uid)}>Promover</button>
                  <button onClick={() => handleDemoteUser(u.uid)}>Despromover</button>
                  <button onClick={() => handleDeleteUser(u.uid)}>Deletar</button>

                </>
              )}
            </li>
          ))}
        </ul>
      </section>

      <section id={style.s3CreateUser}>

        <div className={style.container}>
          {user.admin && (
            <>
              <h3>Criar novo usuário</h3>
              <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
              <input type="password" placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)} />
              <button onClick={handleCreateUser}>Criar usuário</button>
            </>
          )}

          {message && <p>{message}</p>}
        </div>

      </section>
    </>
  );
}

export default LoginSuccessful;
