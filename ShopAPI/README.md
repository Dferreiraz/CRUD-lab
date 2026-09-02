# 🛒 ShopAPI

> API REST para gerenciamento de produtos com **persistência em banco de dados SQLite**, desenvolvida como parte do laboratório de estudos **crud-lab**.

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

A **ShopAPI** é uma API REST desenvolvida para praticar conceitos de desenvolvimento Back-End utilizando **Node.js, Express e SQLite**.

O projeto faz parte do repositório **crud-lab**, um laboratório de estudos criado para evoluir gradualmente os conhecimentos em construção de APIs REST.

Nesta etapa, o projeto introduz **persistência real de dados utilizando SQLite**, substituindo o armazenamento temporário em memória utilizado nas APIs anteriores.

Além do CRUD, a API trabalha com:

* Validação de dados;
* Regras de negócio;
* Atualização parcial;
* Conversão de tipos;
* Queries parametrizadas;
* Prevenção contra SQL Injection;
* Seed automático de dados.

---

## 💻 Sobre o projeto

A **ShopAPI** simula uma API de gerenciamento de produtos de uma loja.

O projeto permite criar, consultar, atualizar e excluir produtos, armazenando os dados de forma persistente em um banco de dados **SQLite**.

Diferente das APIs anteriores do laboratório, os dados não são mantidos apenas em arrays em memória. As informações são armazenadas em um banco de dados real, permitindo que os dados continuem disponíveis mesmo após o servidor ser encerrado.

Durante o desenvolvimento, foram trabalhados conceitos como **rotas, controllers, middlewares, banco de dados, SQL, validação de dados, regras de negócio e atualização parcial**.

A API também utiliza o pacote **better-sqlite3** para realizar a comunicação entre o Node.js e o SQLite.

---

## ⚙️ Funcionalidades

* Criar novos produtos.
* Listar todos os produtos.
* Buscar um produto específico pelo ID.
* Atualizar um produto.
* Excluir um produto.
* Persistência real utilizando SQLite.
* Validação dos tipos de dados recebidos.
* Validação do campo `name`.
* Validação do campo `price`.
* Validação do campo `stock`.
* Validação do campo `isActive`.
* O campo `price` deve ser maior que `0`.
* O campo `stock` deve ser maior ou igual a `0`.
* O campo `isActive` deve receber um valor booleano.
* Conversão entre valores booleanos do JavaScript e `INTEGER` utilizado pelo SQLite.
* Geração de ID único baseada em timestamp.
* Geração automática de dados de teste através de seed.
* Atualização parcial segura.
* Campos não enviados durante uma atualização são preservados.
* Utilização de parâmetros posicionais (`?`) nas queries.
* Prevenção contra SQL Injection.
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

### Exemplo de resposta

**GET `/api/products`**

```json
{
  "products": [
    {
      "id": 1755000000000,
      "name": "Teclado Mecânico",
      "price": 299.90,
      "stock": 15,
      "isActive": true,
      "createdAt": "2026-08-12"
    }
  ]
}
```

### Exemplo de criação

**POST `/api/products`**

```json
{
  "name": "Mouse Gamer",
  "price": 149.90,
  "stock": 20,
  "isActive": true
}
```

### Exemplo de atualização parcial

A API permite atualizar apenas os campos desejados sem precisar enviar o objeto completo.

Por exemplo:

```json
{
  "price": 129.90
}
```

Nesse caso, apenas o preço será alterado. Os demais dados do produto permanecerão armazenados no banco de dados.

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

## 🗄️ Banco de dados

A **ShopAPI** utiliza **SQLite** para armazenar os produtos.

O banco é criado localmente pela aplicação e permite que os dados sejam mantidos mesmo após o encerramento do servidor.

O projeto utiliza o pacote:

```text
better-sqlite3
```

### Conversão de booleanos

Como o SQLite não possui um tipo `BOOLEAN` nativo, o campo `isActive` é armazenado como:

```text
true  → 1
false → 0
```

A API realiza automaticamente a conversão entre o formato utilizado pelo JavaScript e o formato armazenado no banco.

### Queries parametrizadas

As operações com o banco utilizam parâmetros posicionais:

```sql
WHERE id = ?
```

Essa abordagem evita a inserção direta de valores fornecidos pelo usuário dentro das queries e ajuda a proteger a aplicação contra **SQL Injection**.

---

## 🚀 Como executar o projeto

### 1 - Baixar o projeto

```bash
git clone https://github.com/Dferreiraz/crud-lab.git
```

### 2 - Entrar na pasta

```bash
cd crud-lab/ShopAPI
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

Você pode utilizar **Postman** ou **Insomnia** para realizar as requisições e testar os endpoints.

---

## 📋 Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina:

* Git
* Node.js **v20 ou superior**
* npm

Também é recomendado utilizar um editor de código como o **Visual Studio Code**.

---

## 🛠 Tecnologias

As seguintes tecnologias foram utilizadas na construção do projeto:

### Back-End

* **Node.js**
* **Express.js**
* **JavaScript (ES6+)**

### Banco de dados

* **SQLite**
* **better-sqlite3**

### Ferramentas

* **Postman**
* **Git**
* **GitHub**
* **Visual Studio Code**

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
* `req.body`
* Manipulação de arrays e objetos
* Desestruturação
* Arrow Functions
* `typeof`
* SQLite
* SQL
* Queries parametrizadas
* SQL Injection Prevention
* Persistência de dados
* Conversão de tipos
* Atualização parcial
* Database Seeding

---

## 💪 Como contribuir para o projeto

1. Faça um fork do projeto.
2. Crie uma nova branch:

```bash
git checkout -b minha-feature
```

3. Faça suas alterações.
4. Crie um commit seguindo o padrão **Conventional Commits**:

```bash
git commit -m "feat: adiciona nova funcionalidade"
```

5. Envie as alterações:

```bash
git push origin minha-feature
```

6. Abra um Pull Request.

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
