// LoginSuccessful.tsx
import { useState } from "react";
import style from "./LoginSuccessful.module.css";

function LoginSuccessful() {
  const [uidToPromote, setUidToPromote] = useState(""); // UID do usuário que será promovido
  const [message, setMessage] = useState("");

  // Recupera token salvo no login
  const token = localStorage.getItem("token");

  const handleMakeAdmin = async () => {
    if (!uidToPromote) {
      setMessage("Digite o UID do usuário.");
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:3000/make-admin/${uidToPromote}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // usa o token do localStorage
          },
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setMessage("Erro: " + data.message);
      } else {
        setMessage("Usuário promovido a admin com sucesso!");
      }
    } catch (error) {
      console.error(error);
      setMessage("Falha ao promover usuário.");
    }
  };

  return (
    <div className={style.container}>
      <h2>Bem-vindo</h2>

      <div style={{ marginTop: "20px" }}>
        <input
          type="text"
          placeholder="UID do usuário"
          value={uidToPromote}
          onChange={(e) => setUidToPromote(e.target.value)}
        />
        <button onClick={handleMakeAdmin}>Promover a Admin</button>
      </div>

      {message && <p style={{ marginTop: "10px" }}>{message}</p>}
    </div>
  );
}

export default LoginSuccessful;
