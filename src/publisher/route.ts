import { Hono } from "hono"
import { prisma } from "../lib/db"
import { publisherList } from "../data/publishers"

export const publisher = new Hono()
  // SEED BOOKS DATA
  .post("/seed", async (c) => {
    const result = await prisma.publisher.createMany({
      data: publisherList,
    })

    return c.json(result)
  })
  // GET ALL PUBLISHER
  .get("/", async (c) => {
    const publisher = await prisma.publisher.findMany()
    return c.json(publisher)
  })

  // GET DETAIL PUBLISHER BY ID
  .get("/:id", async (c) => {
    const id = Number(c.req.param("id"))
    const publisher = await prisma.publisher.findUnique({ where: { id } })

    if (!publisher) {
      c.status(404)
      return c.json({ message: "Publisher not found" })
    }

    return c.json(publisher)
  })

  // POST ADD NEW PUBLISHER
  .post("/", async (c) => {
    const body = await c.req.json()

    const newPublisher = {
      name: body?.name || null,
      address: body?.address || null,
    }

    const createNewPublisher = await prisma.publisher.create({
      data: newPublisher,
    })

    return c.json({ book: createNewPublisher })
  })

  // DELETE ALL PUBLISHERS
  .delete("/", async (c) => {
    const result = await prisma.publisher.deleteMany()

    return c.json({
      message: "Successfully removed all publishers data.",
      result,
    })
  })

  // DELETE PUBLISHER BY ID
  .delete("/:id", async (c) => {
    const id = Number(c.req.param("id"))

    const deletedBook = await prisma.publisher.delete({ where: { id } })

    return c.json({
      message: `Successfully deleted ${deletedBook.name}`,
      deletedBook,
    })
  })

  // UPDATE PUBLISHER BY ID
  .put("/:id", async (c) => {
    const id = Number(c.req.param("id"))
    const body = await c.req.json()

    const newPublisher = {
      name: body?.name,
      address: body?.address,
    }

    const updatedPublisher = await prisma.publisher.update({
      where: { id },
      data: newPublisher,
    })

    return c.json({
      message: "Successfully updated the publisher",
      updatedPublisher,
    })
  })
