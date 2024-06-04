import { Hono } from "hono"
import { booksRoute } from "./books/route"
import { publisher } from "./publisher/route"

const app = new Hono()

app.get("/", (c) => {
  return c.text("Book Finder API 📚")
})

app.route("/books", booksRoute)
app.route("/publishers", publisher)

export default app
