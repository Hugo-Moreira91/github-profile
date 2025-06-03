<h1 align="center">GitHub Profile | devChallenges</h1>

<div align="center">
   Solução para o desafio <a href="https://devchallenges.io/challenge/github-profile" target="_blank">GitHub Profile</a> do <i>site</i> <a href="http://devchallenges.io" target="_blank">devChallenges.io</a>.
</div>

<div align="center">
  <h3>
    <a href="https://hugo-moreira91.github.io/github-profile/">
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

![demonstração](./public/medias/project-github-profile-demonstration.gif)

Acima temos uma breve demonstração do projeto em funcionamento. 

Estruturei os elementos utilizando *flexbox* e *grid* (para os repositórios do usuário pesquisado, caso tenha). Seguindo os designs apresentados pelo desafio, resolvi iniciar a aplicação com o usuário do próprio GitHub. Quanto aos repositórios, limitei a exibição para os quatro mais recentes do perfil. Caso seja do interesse em visualizar todos, o link *View all repositories* pode ser clicado, levando-o(a) para a página de repositórios do usuário no GitHub. Cada card dos repositórios também são clicáveis, levando-o(a) ao respectivo projeto.
Nessa primeira versão do projeto desenvolvido utilizei a ideia de, a cada alteração no campo de entrada do usuário, uma requisição à API do GitHub é realizada. Isso pode ser um problema, já que a API limita o número de requisições por hora (em caso de não termos um token). Para as próximas versões, buscarei alterar o método de requisição com a implementação de um botão, juntamente com a possibilidade de apertar a tecla *Enter*.

### O que aprendi

Trabalhar com a API do GitHub foi um desafio na medida em que temos dois *endpoints* distintos - um para buscar o perfil do usuário (apenas público, no meu caso) e outro para buscar os repositórios do mesmo. A documentação oficial, para mim, não é intuitiva e de fácil compreensão. Busquei utilizar anotações próprias para auxiliar no desenvolvimento do projeto.

Podemos acrescentar ao *endpoint* dos repositórios um número máximo retornado, o que ajuda a não retornar dezenas (ou até mais) sem necessidade.

Busquei trabalhar novamente com o *grid layout* para assimilar ainda mais os conceitos e sua construção. Utilizar o parâmetro *auto-fit* ajuda bastante na resposividade da aplicação, uma vez que não precisamos fazer uso de *media queries*.

Uso de *hooks* de estado e de efeito para gerenciar e atualizar variáveis que armazenam o usuário pesquisado, bem como o seu perfil no GitHub.

Uso da biblioteca *date-fns* para manipular e exibir o tempo da última atualização de cada repositório exibido.

Componentização de partes do projeto, visando a reutilização e organização dos mesmos.

Aprimoramento da estilização via styled-components.

### Recursos úteis

- [API REST do GitHub](https://docs.github.com/pt/rest?apiVersion=2022-11-28): documentação oficial da API utilizada neste projeto;

- [Requisições usando AXIOS](https://axios-http.com/docs/intro): documentação completa do AXIOS;

- [Flexbox e Grid layout - quando usar?](https://dev.to/codecasts/grid-para-layout-flexbox-para-componentes-gb3): artigo que traz uma boa discussão de quando usar as duas propriedades, de acordo com o intuito do projeto;

- [Date-fns](https://date-fns.org/docs/Getting-Started): documentação oficial da biblioteca em questão;

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
- Requisição usando AXIOS
- Hooks de estado e de efeito

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