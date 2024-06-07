import { booksRoute } from "./books/route"
import { publisherRoute } from "./publisher/route"
import { OpenAPIHono } from "@hono/zod-openapi"
import { swaggerUI } from "@hono/swagger-ui"
import { HomePage } from "./home-page"

const app = new OpenAPIHono()
  // API ROUTES
  .route("/books", booksRoute)
  .route("/publishers", publisherRoute)

  // OPEN API
  .doc31("/docs", {
    openapi: "3.0.0",
    info: {
      version: "1.0.0",
      title: "Book Finder REST API",
      description:
        "Book Finder API is a backend application that provides various information about books through an API. This application allows users to search for books by title, author, ISBN, and other parameters.",
    },
  })

  // SWAGGER UI
  .get("/ui", swaggerUI({ url: "/docs" }))

  // HOME PAGE
  .get("/", (c) => {
    return c.html(
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>Book Finder REST API</title>
          <meta name="description" content="Web API about books" />
          <script src="https://cdn.tailwindcss.com"></script>
        </head>
        <body>
          <HomePage />
        </body>
      </html>
    )
  })

export default app
