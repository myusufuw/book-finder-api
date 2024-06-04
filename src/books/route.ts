import { Hono } from "hono"
import { prisma } from "../lib/db"
import { bookList } from "../data/books"

export const booksRoute = new Hono()
  // SEED BOOKS DATA
  .post("/seed", async (c) => {
    const result = await prisma.books.createMany({
      data: bookList,
    })

    return c.json(result)
  })

  // GET ALL BOOKS
  .get("/", async (c) => {
    const books = await prisma.books.findMany()
    return c.json(books)
  })

  // GET DETAIL BOOK BY ID
  .get("/:id", async (c) => {
    const id = Number(c.req.param("id"))
    const book = await prisma.books.findUnique({ where: { id } })

    if (!book) {
      c.status(404)
      return c.json({ message: "Book not found" })
    }

    return c.json(book)
  })

  // POST ADD NEW BOOK
  .post("/", async (c) => {
    const body = await c.req.json()

    const newBook = {
      title: body?.title || null,
      author: body?.author || null,
      publication_date: body?.publication_date || null,
      number_of_pages: body?.number_of_pages || null,
      length: body?.length || null,
      width: body?.width || null,
      weight: body?.weight || null,
      language: body?.language || null,
      description: body?.description || null,
      image_url: body?.image_url || null,
      isbn: body?.isbn || null,
    }

    const createNewBook = await prisma.books.create({
      data: newBook,
    })

    return c.json({ book: createNewBook })
  })

  // DELETE ALL BOOKS
  .delete("/", async (c) => {
    const result = await prisma.books.deleteMany()

    return c.json({
      message: "Successfully removed all books data.",
      result,
    })
  })

  // DELETE BOOK BY ID
  .delete("/:id", async (c) => {
    const id = Number(c.req.param("id"))

    const deletedBook = await prisma.books.delete({ where: { id } })

    return c.json({
      message: `Successfully deleted ${deletedBook.title}`,
      deletedBook,
    })
  })

  // UPDATE BOOK BY ID
  .put("/:id", async (c) => {
    const id = Number(c.req.param("id"))
    const body = await c.req.json()

    const newBook = {
      title: body?.title,
      author: body?.author,
      publication_date: body?.publication_date,
      number_of_pages: body?.number_of_pages,
      length: body?.length,
      width: body?.width,
      weight: body?.weight,
      language: body?.language,
      description: body?.description,
      image_url: body?.image_url,
      isbn: body?.isbn,
    }

    const updatedBook = await prisma.books.update({
      where: { id },
      data: newBook,
    })

    return c.json({
      message: "Successfully updated the book",
      updatedBook,
    })
  })
