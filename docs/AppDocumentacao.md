# Arquivo App.tsx

Este arquivo é responsável pelo login do usuário dentro do sistema.

Como todas as verificações de autenticação estão concentradas na API, o código nesta interface é mais simples de compreender e focado apenas na comunicação com o backend e na navegação do usuário.

Descrição da interface

A tela de login é composta por:

- 1 formulário (form) — que dispara a função handleLogin ao ser submetido.

- 2 campos de entrada (input) — para receber o e-mail e a senha do usuário.

- 1 botão (button) — do tipo submit, que envia os dados para o sistema.

Ao clicar no botão, os dados inseridos são armazenados no localStorage e enviados para a API através da função handleLogin.

##

### Função handleLogin

A função handleLogin realiza uma requisição HTTP POST para a rota /login da API, enviando o e-mail e a senha informados.
A API, por sua vez, valida as credenciais e retorna os dados do usuário, incluindo o nível de permissão (usuário comum ou administrador).

Após a validação:

- Se o usuário for admin, o sistema redireciona para /loginSuccessful.

- Se for usuário comum, redireciona para /loginSuccessfulUsers.

- Caso contrário, exibe uma mensagem de erro na tela.

```bash
const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setMessage('');

    try {
      const response = await api.post('/login', { email, password }, { withCredentials: true });
      const user = response.data.user;

      localStorage.setItem("user", JSON.stringify({
        uid: user.uid,
        email: user.email,
        displayName: user.displayName
      }));

      const adminCheck = await api.get("/admin/dashboard", { withCredentials: true });

      if (adminCheck.status === 200) {
        // Tela de admin
        navigate("/loginSuccessful"); 
      } else {
        // Tela comum
        navigate("/loginSuccessfulUsers"); 
      }
    } catch (err: any) {
      setError(err.response?.data?.message || "Erro no login");
    }
  };
```

##


### Importante

Para realizar o login com sucesso, o usuário precisa estar pré-cadastrado no sistema de Authentication do Firebase.

##

### handleForgotPassword

Função responsável por redefinir a senha do usuário em casos de esquecimento. A implementação é feita diretamente na API, utilizando os recursos do Firebase para autenticação e a biblioteca Nodemailer para o envio do e-mail de redefinição.

```bash
const handleForgotPassword = async () => {
    try {
      const response = await api.post('/forgot-password', { email });
      alert(response.data.message);
    } catch (err: any) {
      alert(err.response?.data?.message || "Erro ao enviar link");
    }
  };
```

##

### Código completo 
```bash
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
      // Faz login no backend
      const response = await api.post('/login', { email, password }, { withCredentials: true });
      const user = response.data.user;

      // Salva apenas informações seguras
      localStorage.setItem("user", JSON.stringify({
        uid: user.uid,
        email: user.email,
        displayName: user.displayName
      }));

      // Verifica admin direto no backend
      const adminCheck = await api.get("/admin/dashboard", { withCredentials: true });

      if (adminCheck.status === 200) {
        // Tela de admin
        navigate("/loginSuccessful"); 
      } else {
        // Tela comum
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

```

### Arquivo explicado.
Caso queira entender mais sobre o funcionamento geral do sistema, [Volte para a explicação da interface](./ExplicacaoInterface.md).