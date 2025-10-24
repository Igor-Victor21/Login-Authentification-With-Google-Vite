# Login-Authentification-With-Google-Vite

## Descrição
Esta aplicação web foi desenvolvida com fins didáticos, com o objetivo de servir como base para projetos futuros na minha carreira como desenvolvedor. Decidi documentá-la de forma organizada para facilitar o entendimento completo do sistema que estou construindo, garantindo melhor estruturação dos meus projetos. Além disso, optei por deixá-la pública para que outras pessoas que tenham interesse possam aprender ou desenvolver um sistema de login semelhante.

O sistema de login foi desenvolvido utilizando o Firebase para autenticação via Google e geração de tokens JWT, permitindo acesso ao sistema, criação de rotas privadas e definição de permissões conforme o tipo de usuário.
O frontend foi construído em TypeScript, por ser mais seguro e eficiente que o JavaScript. Embora não seja a solução mais robusta para empresas de grande porte, esse modelo é totalmente viável para sistemas de pequeno e médio porte.

Para garantir a máxima segurança do usuário, todas as regras de autenticação, permissões, rotas privadas e validação de token foram implementadas no backend, diretamente na API do sistema. Inclusive, o acesso às rotas exige autorização por meio do token gerado.
A documentação da API está em um projeto separado, que pode ser acessado [CLICANDO AKI](https://github.com/Igor-Victor21/Complete-API-In-NodeJs-FireBase-Auth/blob/main/README.md).

## Recomendação
Recomendo que você crie o projeto do zero por três motivos:

1 - Compreensão completa do código

2 - Organização personalizada

3 - Facilidade para manutenção e escalabilidade

Para criar um projeto novo e facíl, para saber clique em [Saiba mais](./docs/CriacaoVite.md)

## Sobre a instalação 

Recomenda-se não clonar este repositório. Em vez disso, utilize esta documentação como referência para construir seu próprio sistema de login.
Dessa forma, além de compreender melhor o funcionamento do projeto, você poderá estruturar e organizar o sistema conforme suas próprias necessidades.

## O que é necessário para o sistema funcionar

Para que o projeto funcione corretamente, você precisa ter:

1 - Um banco de dados configurado no Firebase

2 - A autenticação do Firebase ativada

3 - É necessário que o usuário esteja pré-cadastrado no sistema de Authentication do Firebase para conseguir acessar o sistema.

Se ainda não configurou esses dois recursos, acesse a documentação completa:
[Clique aqui para configurar o Firebase](./docs/Firebase-Db-Auth.md)
## 

### Caso ja tenha o necessário

Se você está começando agora e deseja entender a função de cada pasta na raiz do projeto, acesse o link abaixo:

[Explicação da raiz do projeto](./docs/ExplicacaoSistema.md)

### Explicação do projeto 

Nesta seção, vamos explicar como o sistema está estruturado e qual é a função de cada arquivo dentro do projeto.
O objetivo é apresentar de forma clara o papel de cada componente, pasta e configuração, facilitando o entendimento geral do funcionamento do sistema.

[Criação e explicação de interface](./docs/ExplicacaoInterface.md).










