import { Hono } from 'hono'
import { bookList } from './data/books'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Book Finder 📚')
})

app.get('/books', (c) => {
  return c.json(bookList)
})

export default app
