import style from './LoginSuccessful.module.css'

function LoginSuccessful() {
  // Recupera o que está no localStorage
  const storedUser = localStorage.getItem("user");

  // Converte para objeto (se existir)
  const user = storedUser ? JSON.parse(storedUser) : null;

  if (!user) {
    return (
      <div className={style.container}>
        <h2>Nenhum usuário encontrado 😢</h2>
      </div>
    );
  }

  return (
    <div className={style.container}>
      <img 
        src={user.photoURL} 
        alt="Foto do usuário" 
        className={style.profileImage}
        referrerPolicy="no-referrer"
      />
      <h2>Bem-vindo {user.displayName}</h2>
      <p><strong>E-mail:</strong> {user.email}</p>
    </div>
  );
}

export default LoginSuccessful;
