# Book Finder Backend Rest API

Book Finder API is a backend application that provides various information about books through an API. This application allows users to search for books by title, author, ISBN, and other parameters.

## Features

- Search for books by title, author, and ISBN
- Detailed information about books including title, author, publisher, publication date, and description
- Perform CRUD (Create, Read, Update, Delete) operations on books

## REST API Endpoints

- Production: [Book Finder](https://book-finder-lhbt.onrender.com)
- Local: http://localhost:3000

| Endpoint      | HTTP     | Description        |
| ------------- | -------- | ------------------ |
| `/books`      | `GET`    | Get all books      |
| `/books/:id`  | `GET`    | Get book by id     |
| `/books`      | `POST`   | Add new book       |
| `/books`      | `DELETE` | Delete all books   |
| `/books/:id`  | `DELETE` | Delete book by id  |
| `/books/:id`  | `PUT`    | Update book by id  |
| `/books/seed` | `POST`   | Seeding books data |

## Database Schema

- Link: [DB Docs](https://dbdocs.io/myusufuntung/Book-Finder-API)

![Database Shcema](/src//assets/database-schema.svg)

## Tech Stacks

- [Bun](https://bun.sh/)
- [Hono](https://hono.dev/)
- [Typescript](https://www.typescriptlang.org/)
- [Prisma](https://www.prisma.io/)
- [Render](https://render.com/)
- [Neon](https://neon.tech/)

## Getting started

To install dependencies:

```sh
bun install
```

To run:

```sh
bun run dev
```

open http://localhost:3000
