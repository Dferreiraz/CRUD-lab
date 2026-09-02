# 🛍️ ProductsAPI

> API REST para Gerenciamento de Produtos, desenvolvida como parte do laboratório de estudos **crud-lab**.

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

A **ProductsAPI** é uma API REST desenvolvida para praticar conceitos de desenvolvimento Back-End utilizando **Node.js e Express**.

O projeto faz parte do repositório **crud-lab**, criado com o objetivo de evoluir os conhecimentos em construção de APIs CRUD, validação de tipos de dados, regras de negócio, middlewares e tratamento de respostas HTTP.

---

## 💻 Sobre o projeto

A **ProductsAPI** foi desenvolvida como um projeto de estudo para aprofundar os conhecimentos em desenvolvimento de APIs REST.

O projeto simula um sistema de gerenciamento de produtos, permitindo criar, consultar, atualizar e excluir produtos.

Durante o desenvolvimento, foram trabalhados conceitos como **rotas, métodos HTTP, controllers, middlewares, parâmetros de rota, validação de tipos de dados e regras de negócio**.

Diferente de um CRUD básico, a API possui validações específicas para garantir que os dados recebidos estejam de acordo com as regras definidas pela aplicação.

---

## ⚙️ Funcionalidades

* Criar novos produtos.
* Listar todos os produtos.
* Buscar um produto específico pelo ID.
* Atualizar um produto.
* Excluir um produto.
* Validação dos tipos de dados recebidos.
* Validação do campo `price`.
* Validação do campo `stock`.
* Validação do campo `isActive`.
* O campo `price` deve ser maior que `0`.
* O campo `stock` deve ser maior ou igual a `0`.
* O campo `isActive` deve receber um valor booleano.
* Geração automática do campo `createdAt`.
* Registro das requisições através de middleware de log.
* Tratamento de erros e respostas HTTP.

---

## 📡 Endpoints

| Método   | Endpoint            | Descrição                |
| -------- | ------------------- | ------------------------ |
| `GET`    | `/api/products`     | Lista todos os produtos  |
| `GET`    | `/api/products/:id` | Busca um produto pelo ID |
| `POST`   | `/api/products`     | Cria um novo produto     |
| `PUT`    | `/api/products/:id` | Atualiza um produto      |
| `DELETE` | `/api/products/:id` | Exclui um produto        |

---

## 🎨 Layout

Por se tratar de uma **API REST**, o projeto não possui uma interface gráfica própria.

Os endpoints podem ser testados utilizando ferramentas como **Postman** ou **Insomnia**.

### Exemplos de respostas

**GET `/api/products`**

```json
{
  "products": [
    {
      "id": 1,
      "name": "Teclado Mecânico",
      "price": 299.90,
      "stock": 15,
      "isActive": true,
      "createdAt": "2026-08-12"
    }
  ]
}
```

### Exemplo de validação

A API possui regras para impedir o cadastro de dados inválidos.

Por exemplo, um produto com preço negativo:

```json
{
  "name": "Teclado Mecânico",
  "price": -100,
  "stock": 15,
  "isActive": true
}
```

Nesse caso, a requisição será rejeitada, pois o campo `price` deve possuir um valor maior que `0`.

---

## 🚀 Como executar o projeto

### 1 - Baixar o projeto

```bash
git clone <https://github.com/Dferreiraz/Crud-lab>
```

### 2 - Entrar na pasta

```bash
cd ProductsAPI
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

Você pode utilizar **Postman** ou **Insomnia** para realizar as requisições e testar as validações da API.

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
* Validação de tipos
* Regras de negócio
* Parâmetros de rota
* Manipulação de arrays e objetos
* Desestruturação
* Arrow Functions
* `typeof`

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

[![Gmail Badge](https://img.shields.io/badge/-davi2580vege@gmail.com-c14438?style=flat-square\&logo=Gmail\&logoColor=white\&link=mailto\:davi2580vege@gmail.com)](mailto:davi2580@gmail.com)

---

<!-- MODELO DE LICENÇA -->

<!--

## 📝 Licença

Este projeto esta sobe a licença [MIT](./LICENSE).

-->

---

Feito com dedicação por Davi Ferreira 👋🏽 [Entre em contato!](https://www.linkedin.com/in/davirobertoferreira/)
