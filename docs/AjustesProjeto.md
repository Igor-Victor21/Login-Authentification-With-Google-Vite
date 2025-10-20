# Renomear os arquivos 

App.css => App.module.css

## Limpando o projeto

### App.tsx

Deixe somente o importe do css

```bash
import style from './App.module.css';
```

Retire tudo que está dentro do frangment (<></>) 

Código final 

```bash
import style from './App.module.css';

function App(){
    return(
        <>
            
        </>
    );
}

export default App
```

### index.css

Esse arquivo funciona como o CSS global do projeto. Tudo o que for definido aqui será aplicado em todo o sistema. É o local ideal para declarar variáveis no :root, como a paleta de cores padrão.

No entanto, é recomendado manter esse arquivo limpo e minimalista. Fora as variáveis globais (como cores, fontes ou tamanhos), evite adicionar estilos diretos aqui para não afetar todos os componentes de maneira indesejada.

### Organizando as rotas da main.tsx

Baixar a biblioteca react-router-dom

```bash
npm i react-router-dom
```

- Imports da main

```bash
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
```

### Imports das rotas da main

Para que o sistema de rotas funcione no frontend, é necessário importar o arquivo de rotas dentro do main.tsx. É nesse arquivo que a aplicação é inicializada e onde as rotas são configuradas, permitindo o acesso às páginas, como a App.tsx, que geralmente é o ponto de entrada do projeto e a primeira interface exibida ao usuário.

Todas as telas que você deseja renderizar para o usuário precisam estar acessíveis a partir dessa configuração.

Além disso, como o index.css representa o CSS global do sistema, ele também deve ser importado no main.tsx para que os estilos sejam aplicados corretamente em toda a aplicação.

```bash
import './index.css'
import App from './App.tsx'
```

- Organize o Root para que fique desta maneira
```bash
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
```
### Código final 

```bash
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//Import das Rotas 
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
```

PS: Sempre que você criar uma nova interface (página/componente) que será acessada por rota, é obrigatório adicioná-la no main.tsx. Isso envolve duas etapas:

Importar o componente da interface

Adicionar a rota correspondente dentro do Route

```bash
<Route path="/NOME_DA_ROTA" element={<NomeDoComponente />} />
```

path → define o endpoint da interface no navegador

element → recebe o componente que será renderizado naquela rota

### Fim dos ajustes

Caso ocorra algum erro relacionado ao main.tsx, consulte a documentação a seguir, onde explico uma possível causa e como resolver:

[Possível erro de versionamento na main](./ErroNaMain.md)

Caso rode o projeto normalmente, vamos seguir para o proxímo passo:

[Saiba mais](./ExplicacaoSistema.md)








