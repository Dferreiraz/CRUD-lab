# 🚀 BookAPI

> API REST para gerenciamento de livros, desenvolvida como parte do laboratório de estudos **crud-lab**.

<!-- MODELO MENU DE NAVEGAÇÃO -->
<p align="center">
•  
 <a href="#-Descrição-do-entregável">Descrição do Entregável</a> •
 <a href="#-sobre-o-projeto">Sobre</a> •
 <a href="#-funcionalidades">Funcionalidades</a> •
 <a href="#-layout">Layout</a> • 
 <a href="#-como-executar-o-projeto">Como executar</a> • 
 <a href="#-tecnologias">Tecnologias</a> • 
 <a href="#-autor">Autor</a> • 
 <!-- <a href="#user-content--licença">Licença</a> -->
<!-- • -->
</p>
---

## 📄 Descrição do entregável

A **BookAPI** é a primeira iteração do laboratório de estudos `crud-lab`.

Trata-se de uma **API REST funcional para gerenciamento de livros**, desenvolvida do zero com **Node.js e Express**, com o objetivo de consolidar conceitos fundamentais do desenvolvimento Back-End, como:

* Roteamento;
* Controllers;
* Middlewares;
* Requisições e respostas HTTP;
* Status Codes;
* Validação de dados;
* Manipulação de parâmetros;
* Tratamento de erros.

Nesta primeira versão, os dados são armazenados temporariamente em um **array em memória**, sem utilização de banco de dados.

---

## 💻 Sobre o projeto

O projeto foi desenvolvido com foco em **prática deliberada de desenvolvimento Back-End**.

A proposta não foi apenas fazer a API funcionar, mas entender na prática o fluxo completo de uma requisição HTTP e como organizar uma aplicação utilizando **separação de responsabilidades**.

A ausência de um banco de dados nesta versão é intencional. Dessa forma, o foco permanece nos fundamentos da construção de uma API REST antes da introdução de novas camadas de complexidade.

### Principais conceitos praticados

* Organização e estruturação de uma API;
* Separação entre Routes e Controllers;
* Utilização de `req.params`;
* Utilização de `req.body`;
* Retorno adequado de Status Codes;
* Criação de middlewares personalizados;
* Validação de dados recebidos;
* Manipulação de arrays com métodos como `.find()` e `.splice()`.

---

## ⚙️ Funcionalidades

* [x] **GET `/api/books`** — Retorna todos os livros cadastrados.
* [x] **GET `/api/books/:id`** — Retorna um livro específico pelo ID.
* [x] **POST `/api/books`** — Cadastra um novo livro com validação dos campos obrigatórios.
* [x] **PUT `/api/books/:id`** — Atualiza os dados de um livro existente.
* [x] **DELETE `/api/books/:id`** — Remove um livro pelo ID.
* [x] **Middleware de Log** — Registra timestamp, método HTTP e URL das requisições.
* [x] **Tratamento de erros** — Retorna respostas adequadas para recursos inexistentes e dados inválidos.

### Status Codes utilizados

| Status | Significado | Utilização                               |
| ------ | ----------- | ---------------------------------------- |
| `200`  | OK          | Requisições realizadas com sucesso       |
| `201`  | Created     | Livro criado com sucesso                 |
| `400`  | Bad Request | Dados obrigatórios ausentes ou inválidos |
| `404`  | Not Found   | Livro não encontrado                     |

---

## 🏗️ Arquitetura

A BookAPI utiliza uma arquitetura baseada em **separação de responsabilidades**, evitando concentrar toda a lógica em um único arquivo.

O fluxo de uma requisição é:

```text
┌──────────────────────┐
│    Cliente HTTP      │
│ Postman / Insomnia   │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│     Middlewares      │
│ Logger + express.json│
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│       Router         │
│   bookRoutes.js      │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│      Controller      │
│  bookController.js   │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│     Resposta HTTP    │
│     JSON + Status    │
└──────────────────────┘
```

### Responsabilidade de cada camada

**Routes**
Define os endpoints disponíveis e direciona as requisições para os controllers.

**Controllers**
Contém a lógica responsável por validar os dados, processar as requisições e construir as respostas.

**Middlewares**
Executam funções intermediárias antes que a requisição chegue ao controller, como o registro das requisições e o processamento do JSON.

---

## 📁 Estrutura do projeto

```text
BookAPI/
│
├── src/
│   ├── controllers/
│   │   └── bookController.js
│   │
│   ├── middlewares/
│   │   └── loggerMiddleware.js
│   │
│   ├── routes/
│   │   └── bookRoutes.js
│   │
│   ├── data/
│   │   └── books.js
│   │
│   └── server.js
│
├── package.json
├── package-lock.json
└── README.md
```

> A estrutura pode variar de acordo com a implementação atual do projeto.

---

## 🚀 Como executar o projeto

### Pré-requisitos

Antes de começar, certifique-se de ter instalado:

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) **v20 ou superior**
* Um editor de código, como o **VS Code**
* Uma ferramenta para testes de API, como **Postman** ou **Insomnia**

### 1. Clone o repositório

```bash
git clone <https://github.com/Dferreiraz/CRUD-lab>
```

### 2. Entre na pasta do projeto

```bash
cd BookAPI
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Inicie o servidor

```bash
npm start
```

O servidor estará disponível em:

```text
http://localhost:3000
```

### 5. Teste a API

Com o servidor em execução, utilize o **Postman** ou **Insomnia** para testar os endpoints:

```text
GET    http://localhost:3000/api/books
GET    http://localhost:3000/api/books/:id
POST   http://localhost:3000/api/books
PUT    http://localhost:3000/api/books/:id
DELETE http://localhost:3000/api/books/:id
```

---

## 🛠️ Tecnologias

### Runtime e Framework

* **Node.js** — Runtime JavaScript utilizado no Back-End.
* **Express.js** — Framework utilizado para criação da API REST.
* **JavaScript (ES6+)** — Linguagem utilizada no desenvolvimento da aplicação.

### Ferramentas

* **Postman** — Testes e validação dos endpoints.
* **Git** — Controle de versão.
* **GitHub** — Hospedagem e gerenciamento do código.

### Conceitos praticados

* REST API;
* HTTP Methods;
* HTTP Status Codes;
* Routing;
* Controllers;
* Middlewares;
* `req.params`;
* `req.body`;
* Validação de dados;
* Tratamento de erros;
* Separação de responsabilidades.

---

## 🤝 Como contribuir

Este é um repositório pessoal de estudos, mas sugestões e melhorias são sempre bem-vindas.

Caso queira contribuir:

1. Faça um fork do projeto.
2. Crie uma nova branch:

```bash
git checkout -b minha-feature
```

3. Faça suas alterações.
4. Crie um commit seguindo o padrão **Conventional Commits**:

```bash
git commit -m "feat: add new validation to BookAPI"
```

5. Envie a branch:

```bash
git push origin minha-feature
```

6. Abra um **Pull Request**.

---

<!-- MODELO DE AUTOR-->
## 🦸 Autor

<a href="https://www.linkedin.com/in/davirobertoferreira/">
Davi Ferreira</a>
 <br />
 
[![Gmail Badge](https://img.shields.io/badge/-davi2580vege@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:davi2580vege@gmail.com)](mailto:davi2580@gmail.com)

---

<!-- MODELO DE LICENÇA -->
<!--

## 📝 Licença

Este projeto esta sobe a licença [MIT](./LICENSE).

-->

---

Feito com dedicação por Davi Ferreira 👋🏽 [Entre em contato!](https://www.linkedin.com/in/davirobertoferreira/)