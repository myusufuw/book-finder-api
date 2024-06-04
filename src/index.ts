import { Hono } from "hono"
import { bookList } from "./data/books"
import { prisma } from "./lib/db"
import { booksRoute } from "./books/route"

const app = new Hono()

app.get("/", (c) => {
  return c.text("Book Finder API 📚")
})

app.route("/books", booksRoute)

export default app
