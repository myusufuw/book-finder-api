import { prisma } from "../lib/db"
import { publisherList } from "../data/publishers"
import { z } from "zod"
import { CreatePublisherSchema, UpdatePublisherSchema } from "./schema"

import { type Publisher } from "@prisma/client"

export const seed = async () => {
  await prisma.publisher.deleteMany()

  return await prisma.publisher.createMany({
    data: publisherList,
  })
}

export const getAll = async () => {
  return await prisma.publisher.findMany({
    include: {
      books: true,
    },
  })
}

export const getDetailById = async (id: number) => {
  return await prisma.publisher.findUnique({
    where: { id },
    include: { books: true },
  })
}

export const deleteById = async (id: number) => {
  return await prisma.publisher.delete({ where: { id } })
}

export const createPublisher = async (
  body: z.infer<typeof CreatePublisherSchema>
) => {
  return await prisma.publisher.create({
    data: {
      name: body?.name ?? null,
      address: body?.address ?? null,
      slug: body?.slug ?? null,
    },
  })
}

export const updatePublisher = async (
  id: number,
  body: z.infer<typeof UpdatePublisherSchema>,
  publisher: Publisher
) => {
  return await prisma.publisher.update({
    where: { id },
    data: {
      name: body?.name ?? publisher.name,
      address: body?.address ?? publisher.address,
      slug: body?.slug ?? publisher.slug,
    },
  })
}

export const deleteAll = async () => {
  return await prisma.publisher.deleteMany()
}
