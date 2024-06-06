import { prisma } from "../lib/db"
import { bookList } from "../data/books"
import { CreateBookSchema } from "./schema"
import { z } from "zod"

import { type Book } from "@prisma/client"

export const seed = async () => {
  await prisma.book.deleteMany()

  bookList.forEach(async (book) => {
    const slug = book.publisher_slug

    delete book.publisher_slug

    await prisma.book.create({
      data: {
        ...book,
        publisher: { connect: { slug: slug } },
      },
    })
  })
}

export const checkPublisher = async () => {
  return await prisma.publisher.findMany()
}

export const getAll = async () => {
  return await prisma.book.findMany({
    include: {
      publisher: true,
    },
  })
}

export const deleteAll = async () => {
  return await prisma.book.deleteMany()
}

export const getDetailById = async (id: number) => {
  return await prisma.book.findUnique({
    where: { id },
    include: { publisher: true },
  })
}

export const deleteById = async (id: number) => {
  return await await prisma.book.delete({ where: { id } })
}

export const createBook = async (
  body: z.infer<typeof CreateBookSchema> & { publisher_slug: string }
) => {
  return await prisma.book.create({
    data: {
      title: body?.title ?? null,
      author: body?.author ?? null,
      publication_date: body?.publication_date ?? null,
      number_of_pages: body?.number_of_pages ?? null,
      length: body?.length ?? null,
      width: body?.width ?? null,
      weight: body?.weight ?? null,
      language: body?.language ?? null,
      description: body?.description ?? null,
      image_url: body?.image_url ?? null,
      isbn: body?.isbn ?? null,
      publisher: { connect: { slug: body?.publisher_slug } },
    },
  })
}

export const updateBook = async (
  id: number,
  body: z.infer<typeof CreateBookSchema> & { publisher_slug: string },
  book: Book,
  currentSlug: string | null | undefined
) => {
  return await prisma.book.update({
    where: { id },
    data: {
      title: body?.title ?? book.title,
      author: body?.author ?? book.author,
      publication_date: body?.publication_date ?? book.publication_date,
      number_of_pages: body?.number_of_pages ?? book.number_of_pages,
      length: body?.length ?? book.length,
      width: body?.width ?? book.width,
      weight: body?.weight ?? book.weight,
      language: body?.language ?? book.language,
      description: body?.description ?? book.description,
      image_url: body?.image_url ?? book.image_url,
      isbn: body?.isbn ?? book.isbn,
      publisher: {
        connect: {
          slug: body?.publisher_slug ?? currentSlug,
        },
      },
    },
  })
}
