# Aplicação com Nest, Docker, MySQL e Jest
Simples CRUD (create-read-update-delete) desenvolvido com Nest, Docker, MySQL e Jest para testes unitários.

## Tecnologias Utilizadas
- [Node.js](https://nodejs.org/en/)
- [NestJS](https://nestjs.com/)
- [MySQL](https://www.mysql.com/)
- [Docker](https://www.docker.com/)
- [Jest](https://jestjs.io/pt-BR/)

## 🚀 Como Iniciar

Instale as dependências

~~~bash
npm install
~~~

Testes (opcional): 

~~~bash
npm run test
~~~

Execute o docker compose para executar o container do banco de dados MySQL:

~~~bash
docker compose up
~~~

Inicie a aplicação:

~~~bash
npm run start:dev
~~~

## Exemplo de Apis

### Create Task

Endpoint:
~~~bash
http://localhost:3000/task
~~~

Body request:
~~~json
{
  "author": "Author",
  "description": "Description"
}
~~~


## Desenvolvedor
Otávio Augusto Souza Silva.

[![Linkedin Badge](https://img.shields.io/badge/-LinkedIn-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/otaviosilva22/)](https://www.linkedin.com/in/otaviosilva22/)
[![Gmail Badge](https://img.shields.io/badge/-Gmail-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:otavio.ssilva22@gmail.com)](mailto:otavio.ssilva22@gmail.com)