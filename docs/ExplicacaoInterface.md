## Explicação sobre a interface

### Pasta api 

Dentro desta pasta está localizada a API do sistema, que é responsável por todas as operações relacionadas a dados, incluindo:

- Login de usuários

- Validações com Google

- Geração de tokens JWT

- Verificação de permissões de administrador

-  Validação de cookies

Em resumo, tudo que envolve manipulação ou validação de dados acontece nesta pasta.

Biblioteca Axios

Para que o frontend consiga se comunicar com a API, utilizamos a biblioteca Axios, que permite realizar requisições HTTP passando credenciais quando necessário.

Importando o Axios:

```bash
import axios from 'axios'
```

Criando uma instância para usar em todo o sistema:

```bash
export const api = axios.create({
    baseURL: 'SUA_URL_DA_API',
    withCredentials: true
});
```

Com isso, você consegue centralizar as chamadas à API e manter a autenticação e configuração consistentes em todo o projeto.

## 

### Pasta assets 

Esta pasta contém todos os arquivos de mídia do sistema, como imagens, ícones e outros recursos visuais utilizados na aplicação.

##

### App.tsx

Este arquivo é responsável pela interface de login do sistema. Para acessar o sistema, o usuário precisa estar previamente cadastrado no Firebase Authentication, que gerencia o registro e autenticação de usuários.

[Código explicado](./AppDocumentacao.md).

##

### firebase.tsx
Este arquivo é responsável por conectar o sistema ao Firebase, permitindo a execução de funções como o logout do usuário autenticado, obter as informações do usuário, criar uma nova conta de usuário, enviar e-mail de redefinição de senha, entre outras interações com os serviços do Firebase.

Este arquivo é responsável apenas pela configuração do projeto no Firebase. O código utilizado nele já é gerado automaticamente pelo próprio site do Firebase, dentro das configurações do projeto.

Como acessar as configurações do Firebase:

- Acesse o console do Firebase.

- Selecione o seu projeto.

- Clique no ícone de engrenagem ao lado do nome do projeto e escolha Configurações do projeto.

- Na seção Seus apps, selecione a plataforma (Web, Android ou iOS) e copie o código de configuração exibido, ele é o que deve ser inserido no arquivo firebase.tsx.

##

### LoginSuccessful.tsx

Este arquivo é acessível somente pelo administrador do sistema, permitindo cadastrar novos usuários.

[Código explicado](./LoginSuccessfulDocumentacao.md).

##

### LoginSuccessfulUsers.tsx

Este arquivo é acessível pelos usuários comuns do sistema, controlando o acesso às funcionalidades disponíveis para eles.

[Código explicado](./LoginSuccessfulDocumentacaoUsers.md).

##

Outros arquivos

O restante dos arquivos são CSS, utilizados para estilizar e melhorar a aparência visual do site.

O arquivo main.tsx é uma exceção, pois é nele que as rotas do projeto são configuradas, determinando como os usuários navegam entre as diferentes telas da aplicação.

## Conclusão

Este sistema de login foi desenvolvido para demonstrar a integração completa entre **frontend e backend**, utilizando **Firebase** para autenticação e **Axios** para comunicação com a API.  
Seguindo esta documentação, é possível configurar, rodar e entender todo o fluxo do projeto.

##

## Contato

Para dúvidas, sugestões ou contribuições, você pode entrar em contato através do email:  
`igor.victorcontato@gmail.com`  
Ou abrir uma issue no repositório do GitHub.

---

## Agradecimentos

Este projeto utiliza as seguintes tecnologias e bibliotecas:

- **Firebase**: banco de dados e autenticação  
- **React / TypeScript**: frontend  
- **Axios**: comunicação com a API  

Agradecimentos à documentação oficial e à comunidade de desenvolvedores por fornecer recursos e tutoriais que auxiliaram no desenvolvimento deste projeto.






