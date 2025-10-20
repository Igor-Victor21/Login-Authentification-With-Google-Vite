# AVISO DE POSSÍVEL ERRO DE VERSÃO
O projeto pode apresentar erro ao utilizar , como mensagens de "Invalid hook call" ou "Cannot read properties of null (reading 'useRef')". Isso geralmente acontece quando o projeto está usando versões experimentais ou incompatíveis do React e do React Router, por exemplo React 19 e React Router 7, que ainda não têm suporte completo.

Para resolver, é necessário alinhar as versões para estáveis: React 18 e React Router 6. Também é importante limpar as dependências antigas e reinstalar os pacotes, garantindo que o e os hooks funcionem corretamente. Com essas versões, o projeto roda sem esse tipo de erro.

Prompt Modelo para usar com o ChatGPT

"ChatGPT, estou com um erro no meu projeto React/Vite. Aqui está o log do console:
[cole o erro completo aqui]
Minha versão atual do React, React DOM e React Router DOM é:
[cole npm ls react react-dom react-router-dom aqui]

Meu main.tsx é:
[cole o código do main.tsx aqui]

Pode me explicar o que está causando esse erro, resumir em poucas palavras e me indicar como resolver de forma prática?"

Até o momento, o único erro identificado foi o de versionamento mencionado acima. Caso apareça qualquer outro tipo de erro relacionado à main.tsx ou às rotas, este documento será atualizado com as devidas informações e soluções.

[Voltar aos ajustes](./AjustesProjeto.md)