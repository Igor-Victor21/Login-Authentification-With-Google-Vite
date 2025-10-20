import style from "./LoginSuccessfulUsers.module.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { auth } from "./firebase";

function LoginSuccessfulUsers() {
  const navigate = useNavigate();
  const storedUser = localStorage.getItem("user");
  const user = storedUser ? JSON.parse(storedUser) : null;

  useEffect(() => {
    if (!user) navigate("/");
  }, [user, navigate]);

  if (!user) return <div>Carregando...</div>;

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
    <div className={style.container}>
      <h2>Bem-vindo, {user.email}</h2>
      <p>Você está logado como usuário comum.</p>
      <button onClick={handleLogout} style={{ marginTop: "20px", backgroundColor: "#c0392b", color: "#fff" }}>Logout</button>
    </div>
  );
}

export default LoginSuccessfulUsers;
