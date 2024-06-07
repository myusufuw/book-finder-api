# Book Finder Backend Rest API

Book Finder API is a RESTful API service designed to help users manage
book information. This application allows users to create, read, update,
and delete (CRUD) book data.

The primary goal of Book Finder API is to provide an easily accessible
platform for managing book information. This application is designed for
developers who want to build applications or services that require book
data management features.

## Features

- Perform CRUD (Create, Read, Update, Delete) operations on books.
- Detailed information about books including title, author, publisher, publication date, etc.

## REST API Endpoints

- Production:

  - [Book Finder](https://book-finder-api.myusufuw.com/)
  - [API Docs](https://book-finder-api.myusufuw.com/docs)
  - [Swagger UI](https://book-finder-api.myusufuw.com/ui)

- Local:
  - App: `http://localhost:3000`
  - API Docs: `http://localhost:3000/docs`
  - Swagger UI: `http://localhost:3000/ui`

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
