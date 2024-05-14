import { Hono } from 'hono'
import { bookList } from './data/books'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Book Finder 📚')
})

app.get('/books', (c) => {
  return c.json(bookList)
})

app.get('/books/:id', (c) => {
  const id = Number(c.req.param('id'))

  const book = bookList.find((book) => book.id === id)

  if (!book) {
    c.status(404)
    return c.json({ message: 'Book not found' })
  }

  return c.json(book)
})

export default app
