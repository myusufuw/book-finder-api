import { Hono } from "hono"
import { prisma } from "../lib/db"
import { bookList } from "../data/books"

export const booksRoute = new Hono()
  // SEED BOOKS DATA
  .post("/seed", async (c) => {
    await prisma.book.deleteMany()
    const publisherList = await prisma.publisher.findMany()

    if (publisherList.length === 0) {
      c.status(404)
      return c.json({ message: "Please create a publisher data" })
    }

    bookList.forEach(async (book) => {
      const slug = book.publisher_slug

      delete book.publisher_slug

      await prisma.book.create({
        data: {
          ...book,
          publisher: { connect: { slug: slug } },
        },
      })
    })

    return c.json({
      message: "Successfully seeded the books data",
    })
  })

  // GET ALL BOOKS
  .get("/", async (c) => {
    const books = await prisma.book.findMany({
      include: {
        publisher: true,
      },
    })
    return c.json(books)
  })

  // GET DETAIL BOOK BY ID
  .get("/:id", async (c) => {
    const id = Number(c.req.param("id"))
    const book = await prisma.book.findUnique({
      where: { id },
      include: { publisher: true },
    })

    if (!book) {
      c.status(404)
      return c.json({ message: "Book not found" })
    }

    return c.json(book)
  })

  // POST ADD NEW BOOK
  .post("/", async (c) => {
    const body = await c.req.json()

    const createNewBook = await prisma.book.create({
      data: {
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
        publisher: { connect: { slug: body?.publisher_slug } },
      },
    })

    return c.json({ book: createNewBook })
  })

  // DELETE ALL BOOKS
  .delete("/", async (c) => {
    const result = await prisma.book.deleteMany()

    return c.json({
      message: "Successfully removed all books data.",
      result,
    })
  })

  // DELETE BOOK BY ID
  .delete("/:id", async (c) => {
    const id = Number(c.req.param("id"))

    const deletedBook = await prisma.book.delete({ where: { id } })

    return c.json({
      message: `Successfully deleted ${deletedBook.title}`,
      deletedBook,
    })
  })

  // UPDATE BOOK BY ID
  .put("/:id", async (c) => {
    const id = Number(c.req.param("id"))
    const body = await c.req.json()

    const currentPublisher = await prisma.book.findUnique({
      where: { id },
      include: { publisher: true },
    })

    const updatedBook = await prisma.book.update({
      where: { id },
      data: {
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
        publisher: {
          connect: {
            slug: body?.publisher_slug ?? currentPublisher?.publisher?.slug,
          },
        },
      },
    })

    return c.json({
      message: "Successfully updated the book",
      updatedBook,
    })
  })
