import { booksRoute } from "./books/route"
import { publisherRoute } from "./publisher/route"
import { OpenAPIHono } from "@hono/zod-openapi"
import { swaggerUI } from "@hono/swagger-ui"

const app = new OpenAPIHono()
  .doc31("/doc", {
    openapi: "3.0.0",
    info: {
      version: "1.0.0",
      title: "Book Finder REST API",
      description:
        "Book Finder API is a backend application that provides various information about books through an API. This application allows users to search for books by title, author, ISBN, and other parameters.",
    },
  })

  .get("/ui", swaggerUI({ url: "/doc" }))

  .get("/", (c) => {
    return c.text("Book Finder API 📚")
  })

  .route("/books", booksRoute)
  .route("/publishers", publisherRoute)

export default app
