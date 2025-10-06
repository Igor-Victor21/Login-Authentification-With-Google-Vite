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

##

### Importante

Para realizar o login com sucesso, o usuário precisa estar pré-cadastrado no sistema de Authentication do Firebase.

##

### Código
```bash
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from './api/api';
import style from './App.module.css';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post('/login', { email, password }, {
      withCredentials: true });
      const user = response.data.user;

      localStorage.setItem('user', JSON.stringify(user));

      // Verifica se é admin
      if (user.admin) {
        navigate('/loginSuccessful');
      } else {
        navigate('/loginSuccessfulUsers');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Erro no login');
    }
  };

  return (
    <div className={style.container}>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default App;
```

### Arquivo explicado.
Caso queira entender mais sobre o funcionamento geral do sistema, [Volte para a explicação da interface](./ExplicacaoInterface.md).