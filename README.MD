# 🚀 CRUD Lab

> Laboratório de estudos Back-End para desenvolvimento de **APIs REST com Node.js e Express**, evoluindo de CRUDs simples em memória até APIs com persistência em banco de dados SQLite.

<!-- MODELO MENU DE NAVEGAÇÃO -->

<p align="center">
•
 <a href="#-descrição-do-entregável">Descrição do Entregável</a> •
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

O **crud-lab** é um laboratório prático de estudos voltado ao desenvolvimento **Back-End com Node.js e Express**.

O repositório funciona como um **monorepo de APIs independentes**, onde cada projeto possui um domínio diferente e introduz novos conceitos de desenvolvimento de APIs REST.

A proposta é evoluir gradualmente desde operações CRUD básicas utilizando arrays em memória até aplicações utilizando **banco de dados SQLite**, validações, regras de negócio e atualizações parciais.

Atualmente, o laboratório conta com:

* 📚 **BookAPI** — CRUD de livros utilizando armazenamento em memória.
* 📝 **TasksAPI** — CRUD de tarefas com validações e atualização parcial.
* 🛍️ **ProductsAPI** — CRUD de produtos com validações de tipos e regras de negócio.
* 🛒 **ShopAPI** — CRUD de produtos utilizando SQLite para persistência real.

---

## 💻 Sobre o projeto

O projeto foi desenvolvido com foco em **prática deliberada de desenvolvimento Back-End**.

A ideia não é apenas fazer as APIs funcionarem, mas compreender como uma aplicação Back-End é estruturada e como diferentes partes do sistema se comunicam durante o processamento de uma requisição HTTP.

Ao longo das APIs, são praticados conceitos como:

* Criação e configuração de servidores Express;
* Arquitetura REST;
* Rotas e Controllers;
* Middlewares personalizados;
* Separação de responsabilidades;
* `req.params`;
* `req.body`;
* `req.query`;
* Validação de dados;
* Validação de tipos;
* Regras de negócio;
* Status Codes HTTP;
* Tratamento de erros;
* Manipulação de arrays e objetos;
* Atualização parcial de recursos;
* Persistência de dados;
* Integração com SQLite;
* Conversão de tipos entre JavaScript e SQLite;
* Prevenção de SQL Injection;
* Seed de dados.

A evolução das APIs permite aumentar a complexidade gradualmente, consolidando os fundamentos antes da introdução de novas tecnologias e camadas.

---

## ⚙️ Funcionalidades

Cada pasta dentro do repositório representa uma API independente.

### 📚 BookAPI — Concluída

* [x] CRUD completo de livros.
* [x] `GET /api/books` — Lista todos os livros.
* [x] `GET /api/books/:id` — Busca um livro pelo ID.
* [x] `POST /api/books` — Cadastra um novo livro.
* [x] `PUT /api/books/:id` — Atualiza um livro.
* [x] `DELETE /api/books/:id` — Remove um livro.
* [x] Middleware de log de requisições.
* [x] Validação de campos obrigatórios.
* [x] Tratamento de recursos inexistentes.
* [x] Persistência temporária em array.

---

### 📝 TasksAPI — Concluída

* [x] CRUD completo de tarefas.
* [x] Campo `description`.
* [x] Campo `status`.
* [x] Campo `priority`.
* [x] Status disponíveis: `pending`, `in_progress` e `completed`.
* [x] Prioridades disponíveis: `low`, `medium` e `high`.
* [x] Validação de enums.
* [x] Geração automática de `createdAt`.
* [x] Persistência em memória.
* [x] Atualização parcial utilizando `Object.keys()`.

---

### 🛍️ ProductsAPI — Concluída

API REST desenvolvida para praticar o gerenciamento de produtos, com foco em **CRUD, validação de dados, tipos e regras de negócio**.

* [x] CRUD completo de produtos.
* [x] `GET /api/products` — Lista todos os produtos.
* [x] `GET /api/products/:id` — Busca um produto pelo ID.
* [x] `POST /api/products` — Cadastra um novo produto.
* [x] `PUT /api/products/:id` — Atualiza um produto.
* [x] `DELETE /api/products/:id` — Remove um produto.
* [x] Validação de tipos de dados.
* [x] Validação do campo `price`.
* [x] Validação do campo `stock`.
* [x] Validação do campo `isActive`.
* [x] Regra de negócio: `price` deve ser maior que `0`.
* [x] Regra de negócio: `stock` deve ser maior ou igual a `0`.
* [x] Validação de `isActive` como booleano.
* [x] Geração automática de `createdAt`.
* [x] Middleware para registro das requisições.
* [x] Tratamento de erros.
* [x] Respostas HTTP adequadas.
* [x] Manipulação de arrays e objetos.
* [x] Utilização de `typeof`.
* [x] Utilização de desestruturação.
* [x] Utilização de Arrow Functions.

#### Endpoints

| Método   | Endpoint            | Descrição                |
| -------- | ------------------- | ------------------------ |
| `GET`    | `/api/products`     | Lista todos os produtos  |
| `GET`    | `/api/products/:id` | Busca um produto pelo ID |
| `POST`   | `/api/products`     | Cria um novo produto     |
| `PUT`    | `/api/products/:id` | Atualiza um produto      |
| `DELETE` | `/api/products/:id` | Exclui um produto        |

---

### 🛒 ShopAPI — Concluída

> Primeira API do laboratório utilizando **persistência real com SQLite**.

* [x] CRUD completo de produtos.
* [x] Integração com banco de dados SQLite.
* [x] Utilização do `better-sqlite3`.
* [x] Validação de tipos de dados.
* [x] Validação de preço maior que zero.
* [x] Validação de estoque maior ou igual a zero.
* [x] Conversão entre `boolean` e `INTEGER`.
* [x] Geração de ID único baseada em timestamp.
* [x] Atualização parcial segura.
* [x] Preservação de campos não enviados durante atualizações.
* [x] Prevenção contra SQL Injection através de parâmetros posicionais.
* [x] Seed automático de dados para testes.

---

## 🏗️ Arquitetura

O `crud-lab` utiliza o princípio de **Separação de Responsabilidades**, evitando concentrar toda a lógica da aplicação em um único arquivo.

O fluxo geral de uma requisição segue o seguinte modelo:

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
│   Define endpoints   │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│      Controller      │
│ Validação + lógica   │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│       Dados          │
│ Array / SQLite       │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│    Resposta HTTP     │
│    JSON + Status     │
└──────────────────────┘
```

### Responsabilidade de cada camada

**Routes**

Define os endpoints disponíveis e direciona cada requisição para o Controller responsável.

**Controllers**

Recebem `req` e `res`, validam os dados, executam a lógica da operação e constroem a resposta HTTP.

**Middlewares**

Executam operações intermediárias durante o processamento da requisição, como logging e processamento do JSON.

**Database**

Na `ShopAPI`, é responsável pela persistência dos dados utilizando SQLite. Nas APIs anteriores, os dados são armazenados temporariamente em arrays.

---

## 📁 Estrutura do projeto

O repositório possui uma estrutura de monorepo, onde cada API é independente:

```text
crud-lab/
│
├── BookAPI/
│   ├── src/
│   │   ├── controllers/
│   │   ├── middlewares/
│   │   ├── routes/
│   │   ├── data/
│   │   └── server.js
│   │
│   ├── package.json
│   └── README.md
│
├── TasksAPI/
│   ├── src/
│   │   ├── controllers/
│   │   ├── middlewares/
│   │   ├── routes/
│   │   ├── data/
│   │   └── server.js
│   │
│   ├── package.json
│   └── README.md
│
├── ProductsAPI/
│   ├── src/
│   │   ├── controllers/
│   │   ├── middlewares/
│   │   ├── routes/
│   │   ├── data/
│   │   └── server.js
│   │
│   ├── package.json
│   └── README.md
│
├── ShopAPI/
│   ├── src/
│   │   ├── controllers/
│   │   ├── middlewares/
│   │   ├── routes/
│   │   ├── database/
│   │   └── server.js
│   │
│   ├── package.json
│   └── README.md
│
└── README.md
```

> A estrutura interna pode variar entre as APIs conforme os conceitos trabalhados em cada etapa do laboratório.

---

## 🚀 Como executar o projeto

Cada API dentro do `crud-lab` funciona de maneira independente.

### Pré-requisitos

Antes de começar, certifique-se de ter instalado:

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) **v20 ou superior**
* Um editor de código, como o **VS Code**
* Uma ferramenta para testes de API, como **Postman** ou **Insomnia**

### 1. Clone o repositório

```bash
git clone https://github.com/Dferreiraz/crud-lab.git
```

### 2. Entre na pasta do projeto

```bash
cd crud-lab
```

### 3. Escolha a API

Por exemplo:

```bash
cd ProductsAPI
```

Você também pode utilizar:

```bash
cd BookAPI
```

```bash
cd TasksAPI
```

ou:

```bash
cd ShopAPI
```

### 4. Instale as dependências

```bash
npm install
```

### 5. Inicie o servidor

Dependendo da configuração da API:

```bash
npm start
```

ou:

```bash
node src/server.js
```

O servidor estará disponível, por padrão, em:

```text
http://localhost:3000
```

### 6. Teste os endpoints

Utilize o **Postman** ou **Insomnia** para realizar as requisições.

Exemplo da ProductsAPI:

```text
GET    http://localhost:3000/api/products
GET    http://localhost:3000/api/products/:id
POST   http://localhost:3000/api/products
PUT    http://localhost:3000/api/products/:id
DELETE http://localhost:3000/api/products/:id
```

Os endpoints disponíveis variam de acordo com a API escolhida.

### ⚠️ Conflito de portas

Como cada API possui seu próprio servidor, caso queira executar várias simultaneamente, utilize portas diferentes.

Exemplo:

```text
BookAPI      → 3000
TasksAPI     → 3001
ProductsAPI  → 3002
ShopAPI      → 3003
```

---

## 🛠️ Tecnologias

### Runtime e Framework

* **Node.js** — Runtime JavaScript utilizado no Back-End.
* **Express.js** — Framework utilizado para criação das APIs REST.
* **JavaScript (ES6+)** — Linguagem utilizada no desenvolvimento.

### Banco de dados

* **SQLite** — Banco de dados relacional utilizado na ShopAPI.
* **better-sqlite3** — Driver utilizado para comunicação entre Node.js e SQLite.

### Ferramentas

* **Postman** — Testes e validação dos endpoints.
* **Git** — Controle de versão.
* **GitHub** — Hospedagem do código.
* **VS Code** — Editor utilizado no desenvolvimento.

### Conceitos praticados

* REST API;
* CRUD;
* HTTP Methods;
* HTTP Status Codes;
* Routing;
* Controllers;
* Middlewares;
* `req.params`;
* `req.body`;
* `req.query`;
* Validação de dados;
* Validação de tipos;
* Regras de negócio;
* Tratamento de erros;
* Separação de responsabilidades;
* Manipulação de arrays e objetos;
* Desestruturação;
* Arrow Functions;
* `typeof`;
* Partial Update;
* SQLite;
* SQL Injection Prevention;
* Type Conversion;
* Database Seeding.

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
git commit -m "feat: add new feature"
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

[![Gmail Badge](https://img.shields.io/badge/-davi2580vege@gmail.com-c14438?style=flat-square\&logo=Gmail\&logoColor=white\&link=mailto\:davi2580vege@gmail.com)](mailto:davi2580@gmail.com)

---

<!-- MODELO DE LICENÇA -->

<!--

## 📝 Licença

Este projeto esta sobe a licença [MIT](./LICENSE).

-->

---

Feito com dedicação por Davi Ferreira 👋🏽 [Entre em contato!](https://www.linkedin.com/in/davirobertoferreira/)
