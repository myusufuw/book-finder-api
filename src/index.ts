import { Hono } from 'hono'
import { bookList, TypeBook } from './data/books'

let books = bookList

const app = new Hono()

app.get('/', (c) => {
  return c.text('Book Finder API 📚')
})

// GET ALL BOOKS
app.get('/books', (c) => {
  return c.json(books)
})

// GET DETAIL BOOK BY ID
app.get('/books/:id', (c) => {
  const id = Number(c.req.param('id'))
  const book = books.find((book) => book.id === id)

  if (!book) {
    c.status(404)
    return c.json({ message: 'Book not found' })
  }

  return c.json(book)
})

// POST ADD NEW BOOK
app.post('/books', async (c) => {
  const body = await c.req.json()
  const nextId = books[books.length - 1].id + 1

  const newBook: TypeBook = {
    id: nextId,
    title: body?.title || null,
    author: body?.author || null,
    publisher: body?.publisher || null,
    publicationDate: body?.publicationDate || null,
    numberOfPages: body?.numberOfPages || null,
    length: body?.numberOfPages || null,
    width: body?.width || null,
    weight: body?.weight || null,
    language: body?.language || null,
    description: body?.description || null,
    imageUrl: body?.imageUrl || null,
    isbn: body?.isbn || null,
  }

  books = [...books, newBook]
  return c.json({ book: newBook })
})

// DELETE ALL BOOKS
app.delete('/books', (c) => {
  books = []

  return c.json({ message: 'Successfully removed all books data.' })
})

// DELETE BOOK BY ID
app.delete('/books/:id', (c) => {
  const id = Number(c.req.param('id'))
  const book = books.find((book) => book.id === id)

  if (!book) {
    c.status(404)
    return c.json({ message: 'Book not found' })
  }

  const udpatedBooks = books.filter((book) => book.id !== id)
  books = udpatedBooks

  return c.json({ message: `Successfully deleted ${book.title}` })
})

// UPDATE BOOK BY ID
app.put('books/:id', async (c) => {
  const id = Number(c.req.param('id'))
  const body = await c.req.json()
  const book = books.find((book) => book.id === id)

  if (!book) {
    c.status(404)
    return c.json({ message: 'Book not found' })
  }

  const newBook: TypeBook = {
    ...book,
    title: body?.title || book.title,
    author: body?.author || book.author,
    publisher: body?.publisher || book.publisher,
    publicationDate: body?.publicationDate || book.publicationDate,
    numberOfPages: body?.numberOfPages || book.numberOfPages,
    length: body?.numberOfPages || book.length,
    width: body?.width || book.width,
    weight: body?.weight || book.weight,
    language: body?.language || book.language,
    description: body?.description || book.description,
    imageUrl: body?.imageUrl || book.imageUrl,
    isbn: body?.isbn || book.isbn,
  }

  const updatedBooks = books.map((book) => {
    if (book.id === id) book = newBook
    return book
  })

  books = updatedBooks

  return c.json({
    message: `Successfully updated ${book.title}`,
    book: newBook,
  })
})

export default app
