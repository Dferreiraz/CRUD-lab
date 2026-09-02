# 📝 TasksAPI 

> API REST para Gerenciamento de Tarefas, desenvolvida como parte do laboratório de estudos **crud-lab**.

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

A **TasksAPI** é uma API REST desenvolvida para praticar os principais conceitos de desenvolvimento Back-End utilizando **Node.js e Express**.

O projeto faz parte do repositório **crud-lab**, criado com o objetivo de praticar a construção de APIs CRUD, organização de código, validação de dados, middlewares e tratamento de respostas HTTP.

---

## 💻 Sobre o projeto

A **TasksAPI** foi desenvolvida como um projeto de estudo para colocar em prática conceitos fundamentais do desenvolvimento de APIs REST.

O projeto simula um sistema de gerenciamento de tarefas, permitindo criar, consultar, atualizar e excluir tarefas.

Durante o desenvolvimento, foram trabalhados conceitos como **rotas, métodos HTTP, controllers, middlewares, validação de dados, parâmetros de rota e códigos de status HTTP**.

O objetivo principal foi compreender na prática como funciona o fluxo de uma requisição dentro de uma API e como organizar suas responsabilidades no Back-End.

---

## ⚙️ Funcionalidades

* Criar novas tarefas.
* Listar todas as tarefas.
* Buscar uma tarefa específica pelo ID.
* Atualizar uma tarefa.
* Excluir uma tarefa.
* Validação do campo `status`.
* Controle dos valores permitidos para o status:

  * `pending`
  * `in_progress`
  * `completed`
* Geração automática do campo `createdAt`.
* Registro das requisições através de middleware de log.
* Tratamento de erros e respostas HTTP.

---

## 📡 Endpoints

| Método   | Endpoint         | Descrição                |
| -------- | ---------------- | ------------------------ |
| `GET`    | `/api/tasks`     | Lista todas as tarefas   |
| `GET`    | `/api/tasks/:id` | Busca uma tarefa pelo ID |
| `POST`   | `/api/tasks`     | Cria uma nova tarefa     |
| `PUT`    | `/api/tasks/:id` | Atualiza uma tarefa      |
| `DELETE` | `/api/tasks/:id` | Exclui uma tarefa        |

---

## 🎨 Layout

Por se tratar de uma **API REST**, o projeto não possui uma interface gráfica própria.

Os endpoints podem ser testados utilizando ferramentas como **Postman** ou **Insomnia**.

### Exemplos de respostas

**GET `/api/tasks`**

```json
{
  "tasks": [
    {
      "id": 1,
      "title": "Finalizar documentação da API",
      "description": "Criar e revisar a documentação dos endpoints disponíveis.",
      "status": "completed",
      "priority": "high",
      "createdAt": "2026-08-12"
    }
  ]
}
```

---

## 🚀 Como executar o projeto

### 1 - Baixar o projeto

```bash
git clone <https://github.com/Dferreiraz/Crud-lab>
```

### 2 - Entrar na pasta

```bash
cd TasksAPI
```

### 3 - Instalar as dependências

```bash
npm install
```

### 4 - Iniciar o servidor

```bash
node src/server.js
```

A API estará disponível em:

```text
http://localhost:3000
```

Você pode utilizar **Postman** ou **Insomnia** para realizar as requisições.

---

## 📋 Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina:

* Git
* Node.js
* npm

Também é recomendado utilizar um editor de código como o **Visual Studio Code**.

---

## 🛠 Tecnologias

As seguintes tecnologias foram utilizadas na construção do projeto:

### Back-End

* Node.js
* Express.js
* JavaScript (ES6+)

### Conceitos praticados

* API REST
* CRUD
* Métodos HTTP
* Status Codes
* Middlewares
* Controllers
* Rotas
* Validação de dados
* Parâmetros de rota
* Manipulação de arrays e objetos
* Desestruturação
* Arrow Functions

---

## 💪 Como contribuir para o projeto

1. Faça um fork do projeto.
2. Crie uma nova branch:

```bash
git checkout -b minha-feature
```

3. Faça suas alterações.
4. Crie um commit:

```bash
git commit -m "feat: adiciona nova funcionalidade"
```

5. Envie as alterações:

```bash
git push origin minha-feature
```

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