# D&D MonsterDex React

Aplicação web desenvolvida em React para a disciplina Desenvolvimento de Software para Web I.

## Descrição

O D&D MonsterDex React é uma aplicação que consome a API pública D&D 5e API para listar monstros do universo Dungeons & Dragons. O projeto possui navegação interna, rotas dinâmicas, página de detalhes dos monstros, busca por nome e página de erro 404.

## Funcionalidades

- Listagem de monstros consumindo API externa
- Busca de monstros por nome
- Página de detalhes com rota dinâmica
- Links internos de navegação
- Página Sobre
- Página Not Found / 404
- Aplicação hospedada online com GitHub Pages

## API utilizada

D&D 5e API:

https://www.dnd5eapi.co/api/2014/monsters

Exemplo de rota dinâmica usada no projeto:

https://www.dnd5eapi.co/api/2014/monsters/adult-black-dragon

## Tecnologias utilizadas

- React
- JavaScript
- Vite
- React Router DOM
- HTML
- CSS
- Git
- GitHub Pages
- D&D 5e API

## Link da aplicação online

https://patricksoaresvitor.github.io/dnd-monsterdex-react/

## Repositório GitHub

https://github.com/PatrickSoaresVitor/dnd-monsterdex-react

## Como executar o projeto

Clone o repositório:

git clone https://github.com/PatrickSoaresVitor/dnd-monsterdex-react.git

Entre na pasta do projeto:

cd dnd-monsterdex-react

Instale as dependências:

npm install

Execute o projeto:

npm run dev

Acesse no navegador:

http://localhost:5173/

## Como gerar a versão de produção

Execute:

npm run build

## Como publicar no GitHub Pages

Execute:

npm run deploy

## Estrutura do projeto

src/
- components/
  - Header.jsx
- pages/
  - Home.jsx
  - MonsterDetails.jsx
  - About.jsx
  - NotFound.jsx
- services/
  - api.js
- App.jsx
- main.jsx
- index.css

## Arquitetura da aplicação

Interface do Usuário → Componentes/Páginas → Serviços → API Externa → Renderização dos Dados

## Explicação da arquitetura

- Components: componentes reutilizáveis da aplicação, como o Header.
- Pages: páginas principais da aplicação, como Home, Sobre, Detalhes e NotFound.
- Services: camada responsável pelas requisições para a API externa.
- React Router DOM: responsável pela navegação interna e pelas rotas dinâmicas.
- API D&D 5e: fonte dos dados exibidos na aplicação.

## Rotas da aplicação

- /  
  Página inicial com listagem dos monstros.

- /about  
  Página com informações sobre o projeto.

- /monster/:index  
  Página dinâmica de detalhes de cada monstro.

- *  
  Página de erro 404 para rotas inexistentes.

## Prints da aplicação

### Tela inicial

src\assets paginal inicial.png

### Página de detalhes

src\assets monstros dados.png

### Página Sobre

src\assets sobre.png

### Página 404

src\assets 404.png

## Autor

Patrick Soares Vitor

## Observação

Projeto desenvolvido com fins acadêmicos para demonstrar consumo de API externa, navegação com rotas dinâmicas e hospedagem online de uma aplicação React.