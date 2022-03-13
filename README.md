# dsmovie
Projeto criado por Sivoney na Semana Spring React

https://dsmovie-sivoney.netlify.app/

Evento promovido pela escola DevSuperior: https://devsuperior.com.br

### Aprendizados:

- Criar projetos backend e frontend
- Salvar os projeto no Github em monorepo
- Montar o visual estático do front end
- Implementar o back end
- Modelo de domínio
- Acesso a banco de dados
- Estruturar o back end no padrão camadas
- Criar endpoints da API REST
- Implantação na nuvem
- Integrar back end e front end
- Três pilares do React
  - Componentes
  - Props
  - Estado
- React Hooks
  - useState
  - useEffect
  - useParams
  - useNavigate
- Libs
  - React Router DOM
  - Axios

### Instalações das ferramentas:

- JDK 17 (usei a versão 11)
- STS
- Postman
- Postgresql 12 e pgAdmin
- Heroku CLI
- NPM
- VS Code
- Git

### AULA 01:

Passo 1: criar projetos
- Criar projeto ReactJS
- Criar projeto Spring Boot com as seguintes dependências:
- Web
- JPA
- H2
- Postgres
- Security

Passo 2: "limpar" o projeto ReactJS

Passo 3: adicionar Bootstrap e CSS ao projeto

Passo 4: adicionar componente Navbar

Passo 5: configurar Rotas
- instalar React Router DOM

Passo 6: Tela de formulário 

Passo 7: adicionar componentes estáticos básicos
- Pagination
- MovieCard
  - MovieStars
  - MovieScore
  - MovieCard

### AULA 02

Passo 1: configuração de segurança

Passo 2: criar as entidades e o seed do banco

Passo 3: Estruturar o projeto em camadas 
- Criar repositories
- Criar DTO's
- Criar service
- Criar controller

Passo 4: Busca de filmes

Passo 5: Salvar avaliação

Passo 6: Validação no Postgres local
- Criar três perfis de projeto: test, dev, prod
- Gerar script SQL no perfil dev
- Testar projeto no banco Postgres local

Passo 7: Implantação no Heroku
- Criar app no Heroku
- Provisionar banco Postgres
- Definir variável APP_PROFILE=prod
- Conectar ao banco via pgAdmin
- Criar seed do banco

Passo 8: Implantação no Netlify
- Deploy básico
- Configurações adicionais

### AULA 03

Passo 1: Primeira requisição
- Instalar Axios
- Definir BASE_URL
- Definir os tipos Movie e MoviePage
- Fazer a requisição

Passo 2: React hooks: useState e useEffect

Passo 3: Props

Passo 4: Hook: useParams

Passo 5: Mostrar estrelinhas

Passo 6: Pagination
- Controlar botão habilitado/desabilitado
- Trocar página ao clique do botãoCriar componente Pagination

Passo 7: Salvando score, useNavigate
