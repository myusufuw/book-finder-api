import { Hono } from 'hono'
import { bookList } from './data/books'

let books = bookList

const app = new Hono()

app.get('/', (c) => {
  return c.text('Book Finder 📚')
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

  const newBook = {
    id: nextId,
    title: body?.title,
    author: body?.author,
    publisher: body?.publisher,
    publicationDate: body?.publicationDate,
    numberOfPages: body?.numberOfPages,
    length: body?.numberOfPages,
    width: body?.width,
    weight: body?.weight,
    language: body?.language,
    description: body?.description,
    urlImage: body?.urlImage,
    isbn: body?.isbn,
  }

  books = [...books, newBook]
  return c.json({ book: newBook })
})

export default app
