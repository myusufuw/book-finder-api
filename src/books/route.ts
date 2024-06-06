import { OpenAPIHono, z } from "@hono/zod-openapi"
import { prisma } from "../lib/db"
import { bookList } from "../data/books"

import * as bookService from "./service"
import { BookIdSchema, CreateBookSchema, UpdateBookSchema } from "./schema"

const API_TAG = ["Book"]

export const booksRoute = new OpenAPIHono()
  // SEED BOOKS DATA
  .openapi(
    {
      method: "post",
      path: "/seed",
      description: "Seed the books data",
      responses: {
        200: {
          description: "Successfully seeded the books data",
        },
      },
      tags: API_TAG,
    },
    async (c) => {
      const publisherList = await bookService.checkPublisher()

      if (publisherList.length === 0) {
        c.status(404)
        return c.json({ message: "Please create a publisher data" })
      }

      await bookService.seed()

      return c.json({
        message: "Successfully seeded the books data",
      })
    }
  )

  // GET ALL BOOKS
  .openapi(
    {
      method: "get",
      path: "/",
      description: "Get all books",
      responses: {
        200: {
          description: "Successfully get all books",
        },
      },
      tags: API_TAG,
    },
    async (c) => {
      const publisher = await bookService.getAll()
      return c.json(publisher)
    }
  )

  // GET DETAIL BOOK BY ID
  .openapi(
    {
      method: "get",
      path: "/{id}",
      request: {
        params: BookIdSchema,
      },
      description: "Get detail book by id",
      responses: {
        200: {
          description: "Successfully get book details",
        },
        400: {
          description: "Book not found",
        },
      },
      tags: API_TAG,
    },
    async (c) => {
      const id = Number(c.req.param("id"))

      const book = await bookService.getDetailById(id)

      if (!book) {
        c.status(404)
        return c.json({ message: "Book not found" })
      }

      return c.json(book)
    }
  )

  // POST ADD NEW BOOK
  .openapi(
    {
      method: "post",
      path: "/",
      request: {
        body: {
          content: {
            "application/json": {
              schema: CreateBookSchema,
            },
          },
        },
      },
      description: "Create new book",
      responses: {
        200: {
          description: "Successfully created the book",
        },
      },
      tags: API_TAG,
    },
    async (c) => {
      const body = await c.req.json()

      const createNewBook = await bookService.createBook(body)

      return c.json({ book: createNewBook })
    }
  )

  // DELETE ALL BOOKS
  .openapi(
    {
      method: "delete",
      path: "/",
      description: "Delete all books",
      responses: {
        200: {
          description: "Successfully deleted all books data.",
        },
      },
      tags: API_TAG,
    },
    async (c) => {
      const result = await bookService.deleteAll()

      return c.json({
        message: "Successfully deleted all books data.",
        result,
      })
    }
  )

  // // DELETE BOOK BY ID
  .openapi(
    {
      method: "delete",
      path: "/{id}",
      request: {
        params: BookIdSchema,
      },
      description: "Delete the book by id",
      responses: {
        200: {
          description: "Successfully delete the book",
        },
        400: {
          description: "Book not found",
        },
      },
      tags: API_TAG,
    },
    async (c) => {
      const id = Number(c.req.param("id"))

      const book = await bookService.getDetailById(id)

      if (!book) {
        c.status(404)
        return c.json({ message: "Book not found" })
      }

      const deletedBook = await bookService.deleteById(id)

      return c.json({
        message: `Successfully deleted ${deletedBook.title}`,
        deletedBook,
      })
    }
  )

  // UPDATE BOOK BY ID
  .openapi(
    {
      method: "put",
      path: "/{id}",
      request: {
        params: BookIdSchema,
        body: {
          content: {
            "application/json": {
              schema: UpdateBookSchema,
            },
          },
        },
      },
      description: "Update the book",
      responses: {
        200: {
          description: "Successfully updated the book",
        },
        400: {
          description: "Book not found",
        },
      },
      tags: API_TAG,
    },
    async (c) => {
      const id = Number(c.req.param("id"))
      const body = await c.req.json()

      const book = await prisma.book.findUnique({
        where: { id },
      })

      const currentPublisher = await prisma.book.findUnique({
        where: { id },
        include: { publisher: true },
      })

      if (!book) {
        c.status(404)
        return c.json({ message: "Publisher not found" })
      }

      const updatedPublisher = await bookService.updateBook(
        id,
        body,
        book,
        currentPublisher?.publisher?.slug
      )

      return c.json({
        message: "Successfully updated the book",
        updatedPublisher,
      })
    }
  )
