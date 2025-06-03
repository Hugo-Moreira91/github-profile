<h1 align="center">GitHub Profile | devChallenges</h1>

<div align="center">
   Solução para o desafio <a href="https://devchallenges.io/challenge/github-profile" target="_blank">GitHub Profile</a> do <i>site</i> <a href="http://devchallenges.io" target="_blank">devChallenges.io</a>.
</div>

<div align="center">
  <h3>
    <a href="https://hugo-moreira91.github.io/simple-coffee-listing/">
      Solução
    </a>
    <span> | </span>
    <a href="https://devchallenges.io/challenge/github-profile">
      Desafio
    </a>
  </h3>
</div>

## Tabela de Conteúdos

- [Visão geral](#visão-geral)
  - [O que aprendi](#o-que-aprendi)
  - [Recursos úteis](#recursos-úteis)
- [Construído com](#construído-com)
- [Características](#características)
- [Autor](#autor)

## Visão geral

![demonstração](./public/medias/project-simple-coffee-listing-demonstration.gif)

Acima temos uma breve demonstração do projeto em funcionamento. 

Além da estruturação dos elementos usando flexbox e grid (para os cards dos produtos), tem-se a filtragem de acordo com o botão selecionado - *All Products* (todos os produtos serão exibidos, independente de disponibilidade no momento) e *Available Now* (somente os produtos disponíveis no momento).

### O que aprendi

Busquei desenvolver o projeto seguindo a ideia do SPA (Single Page Application) através da ferramenta [React Router](https://v5.reactrouter.com/web/guides/quick-start). Apesar do desafio conter apenas uma página, estruturei-o para receber futuras páginas sem maiores complicações.

Separei a requisição ao arquivo JSON (o qual contém as informações necessárias dos cafés - nome, imagem, popularidade, disponibilidade, preço e avaliações) para ser invocada no componente desejado (listagem dos cafés).

Componentização de partes do projeto, visando a reutilização e organização dos mesmos.

Aprimoramento da estilização via styled-components.

Filtragem dos produtos de acordo com a escolha de exibição da listagem - todos os produtos ou apenas os disponíveis.

### Recursos úteis

- [Requisições usando AXIOS](https://axios-http.com/docs/intro): documentação completa do AXIOS;

- [Flexbox e Grid layout - quando usar?](https://dev.to/codecasts/grid-para-layout-flexbox-para-componentes-gb3): artigo que traz uma boa discussão de quando usar as duas propriedades, de acordo com o intuito do projeto;

- [Styled-components](https://styled-components.com/docs): documentação oficial, trazendo desde a explicação até exemplos de uso;

- Hooks [useState()](https://react.dev/reference/react/useState) e [useEffect()](https://react.dev/reference/react/useEffect): documentações que tratam do uso dos hooks de estado da aplicação, bem como a sincronização do componente com um sistema externo. 

### Construído com

- Marcações semânticas HTML
- Componentes
- Styled-components (estilização dos componentes)
- Flexbox
- Grid layout
- React usando VITE
- Responsividade
- SPA (Single Page Application)
- Requisição usando AXIOS

## Características

Este projeto foi desenvolvido para submissão de um desafio do *site* [DevChallenges](https://devchallenges.io/challenges-dashboard).

## Autor

<div style="display: flex; flex-direction: column; align-items: center; justify-content: center;">
  <img style="border-radius: 50%; width: 8.5rem" src="https://avatars.githubusercontent.com/u/129432443?s=400&u=ff3281ddf2cf31d4a71b01d46fcb4d8452398749&v=4" alt="Foto do autor">
  <a style="margin: 1rem 0;" href="https://github.com/Hugo-Moreira91">Hugo Moreira 🚀</a>
  <p>Feito com ❤️</p>
</div>

Entre em contato! ✍🏽

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Hugo%20Moreira-blue?style=flat-square&logo=linkedin)](https://www.linkedin.com/in/hugo-c%C3%A9sar-santos-moreira-a10823248/)
[![Gmail Badge](https://img.shields.io/badge/-hugo.cesar91@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:hugo.cesar91@gmail.com)](mailto:hugo.cesar91@gmail.com)