import { OpenAPIHono, z } from "@hono/zod-openapi"
import { prisma } from "../lib/db"
import {
  PublisherIdSchema,
  CreatePublisherSchema,
  UpdatePublisherSchema,
} from "./schema"

import * as publisherService from "./service"

const API_TAG = ["Publisher"]

export const publisherRoute = new OpenAPIHono()
  // SEED PUBLISHER DATA
  .openapi(
    {
      method: "post",
      path: "/seed",
      description: "Seed the publishers data",
      responses: {
        200: {
          description: "Successfully seeded the publisher data",
        },
      },
      tags: API_TAG,
    },
    async (c) => {
      const result = await publisherService.seed()

      return c.json(result)
    }
  )

  // GET ALL PUBLISHER
  .openapi(
    {
      method: "get",
      path: "/",
      description: "Get all publishers",
      responses: {
        200: {
          description: "List of publishers",
        },
      },
      tags: API_TAG,
    },
    async (c) => {
      const publisher = await publisherService.getAll()
      return c.json(publisher)
    }
  )

  // GET DETAIL PUBLISHER BY ID
  .openapi(
    {
      method: "get",
      path: "/{id}",
      request: {
        params: PublisherIdSchema,
      },
      description: "Get detail publisher by id",
      responses: {
        200: {
          description: "Publiser details",
        },
        400: {
          description: "Publisher not found",
        },
      },
      tags: API_TAG,
    },
    async (c) => {
      const id = Number(c.req.param("id"))

      const publisher = await publisherService.getDetailById(id)

      if (!publisher) {
        c.status(404)
        return c.json({ message: "Publisher not found" })
      }

      return c.json(publisher)
    }
  )

  // POST ADD NEW PUBLISHER
  .openapi(
    {
      method: "post",
      path: "/",
      request: {
        body: {
          content: {
            "application/json": {
              schema: CreatePublisherSchema,
            },
          },
        },
      },
      description: "Create new publisher",
      responses: {
        200: {
          description: "Successfully created the publisher",
        },
      },
      tags: API_TAG,
    },
    async (c) => {
      const body = await c.req.json()

      const createNewPublisher = publisherService.createPublisher(body)

      return c.json({ book: createNewPublisher })
    }
  )

  // DELETE ALL PUBLISHER
  .openapi(
    {
      method: "delete",
      path: "/",
      description: "Delete all publishers",
      responses: {
        200: {
          description: "Successfully deleted all publishers data.",
        },
      },
      tags: API_TAG,
    },
    async (c) => {
      const result = publisherService.deleteAll()

      return c.json({
        message: "Successfully deleted all publishers data.",
        result,
      })
    }
  )

  // DELETE PUBLISHER BY ID
  .openapi(
    {
      method: "delete",
      path: "/{id}",
      request: {
        params: PublisherIdSchema,
      },
      description: "Delete the publisher by id",
      responses: {
        200: {
          description: "Successfully delete the publisher",
        },
        400: {
          description: "Publisher not found",
        },
      },
      tags: API_TAG,
    },
    async (c) => {
      const id = Number(c.req.param("id"))

      const publisher = await publisherService.getDetailById(id)

      if (!publisher) {
        c.status(404)
        return c.json({ message: "Publisher not found" })
      }

      const deletedBook = await publisherService.deleteById(id)

      return c.json({
        message: `Successfully deleted ${deletedBook.name}`,
        deletedBook,
      })
    }
  )

  // UPDATE PUBLISHER BY ID
  .openapi(
    {
      method: "put",
      path: "/{id}",
      request: {
        params: PublisherIdSchema,
        body: {
          content: {
            "application/json": {
              schema: UpdatePublisherSchema,
            },
          },
        },
      },
      description: "Update the publisher",
      responses: {
        200: {
          description: "Successfully updated the publisher",
        },
        400: {
          description: "Publisher not found",
        },
      },
      tags: API_TAG,
    },
    async (c) => {
      const id = Number(c.req.param("id"))
      const body = await c.req.json()

      const publisher = await prisma.publisher.findUnique({
        where: { id },
      })

      if (!publisher) {
        c.status(404)
        return c.json({ message: "Publisher not found" })
      }

      const updatedPublisher = await publisherService.updatePublisher(
        id,
        body,
        publisher
      )

      return c.json({
        message: "Successfully updated the publisher",
        updatedPublisher,
      })
    }
  )
