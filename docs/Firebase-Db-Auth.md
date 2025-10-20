# Criando o projeto Web no Firebase

## Aviso

Se você já possui um projeto Web criado no Firebase, basta ativar:

- Authentication  
- Firestore Database

##

## Sobre a autenticação com Google

Usaremos o Firebase para realizar a autenticação com o Google. Além do login social, ele oferece recursos que facilitam o gerenciamento do sistema, como:

- Banco de dados Firestore  
- Regras de segurança  
- Administração de usuários  
- Configuração simplificada

##

## Acessando o Firebase

Acesse o site oficial:

[Site do Firebase](https://firebase.google.com/?hl=pt-br)

Ao acessar:
1. Verifique se está logado com a conta correta do Google  
2. Clique em "Ir para o console"  
3. Clique em "Comece configurando um Projeto do Firebase"  
4. Insira o nome do projeto  
5. Aceite os termos do Firebase

##

## Sobre o Gemini

Você pode escolher ativar ou não o Google Gemini no projeto.

Não recomendado:

- Pode auxiliar com dúvidas e debug
- Porém é lento, sujeito a falhas e pode se tornar pago

##

## Sobre o Analytics

Você pode ativar ou não o Google Analytics.

Recomendado:

- É gratuito
- Pode fornecer dados úteis
- É necessário configurá-lo corretamente para evitar métricas genéricas

Após definir as opções, clique em Continuar, selecione a localização do Analytics (Brasil), aceite os termos e crie o projeto.

##

## Criando o App Web

Após a criação do projeto:
1. Clique em "Adicionar app"  
2. Selecione a opção Web (</>)  
3. Insira um apelido para o app  
4. Escolha se deseja ativar ou não o Firebase Hosting

Observação: o Firebase Hosting não é necessário para implementar a autenticação.

##

## Projeto Web criado

Agora é necessário ativar os serviços que serão usados pelo sistema. No menu lateral esquerdo, acesse a seção "Criação". Dentro dela, ative as seguintes opções:

##

### 1. Firestore Database

Este será o banco de dados utilizado no projeto.

Importante:  
A escolha entre os modos Produção ou Teste não é definitiva. A diferença está somente nas regras de segurança, que podem ser alteradas depois em:

Firestore Database > Rules

Recomendação:  
Use o modo Teste durante o desenvolvimento e altere as regras para Produção quando o projeto estiver pronto.

##

### 2. Authentication

Use esta seção para ativar os provedores de login, como o Google, e configurar a autenticação do sistema.

Depois de configurado o Authentication, você precisa selecionar a opção de E-mail / senha, e precisa cadastrar um usuário na opção "Usuários"

##

Projeto criado e configurado.

Depois da configuração agora vem a parte de [Criação e explicação de interface](./ExplicacaoInterface).
