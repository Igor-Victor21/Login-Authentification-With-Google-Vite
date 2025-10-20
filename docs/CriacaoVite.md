# Criando um projeto com Vite

Clone seu repositório do github, ou, crie uma nova pasta na sua área de trabalho

Abra com a pasta com o git bash

1 - Criando o projeto
```bash
npm create vite@latest
```

2 - Digite o nome do projeto

3 - Nome da pasta

4 - Selecione o framework (React)

5 - Selecione a linguagem TypeScript

6 - Acesse a pasta do projeto

```bash
cd nome_do_projeto/
```

7 - Instale o node_modules

```bash
npm install
```

8 - Acesse o projeto no vs code

```bash
code .
```

9 - Rode o Projeto 
```bash
npm run dev
```

## Configuração do projeto 
Para o projeto funcionar ele precisa de algumas depedências.

axios

```bash
npm install axios
```

react-router-dom
```bash
npm install react-router-dom
```

firebase

```bash
npm install firebase
```

Olhe o seu package.json tem que estar assim:

```bash
"dependencies": {
    "firebase": "^0.0.0",
    "react": "^0.0.0",
    "react-dom": "^0.0.0",
    "react-router-dom": "^0.0.0"
  },
```

"O projeto foi criado com sucesso! Agora é necessário realizar alguns ajustes nos arquivos para preparar o sistema e implementar a funcionalidade de login. Para continuar, siga os passos em [Ajustar o Projeto em Vite](./AjustesProjeto.md).
