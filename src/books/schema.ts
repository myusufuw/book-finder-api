import { z } from "zod"

export const BookIdSchema = z.object({
  id: z.coerce.number().int().min(1).openapi({ example: 1 }),
})

export const CreateBookSchema = z
  .object({
    title: z.string().min(5).openapi({ example: "Atomic Habits" }),
    author: z.string().min(3).openapi({ example: "James Clear" }),
    publication_date: z
      .string()
      .datetime()
      .openapi({ example: "2024-05-27T03:57:00.438Z" })
      .optional(),
    number_of_pages: z
      .number()
      .int()
      .min(1)
      .openapi({ example: 352 })
      .optional(),
    length: z.number().int().min(1).openapi({ example: 23 }).optional(),
    width: z.number().int().min(1).openapi({ example: 15 }).optional(),
    weight: z.number().finite().openapi({ example: 0.55 }).optional(),
    language: z.string().min(3).openapi({ example: "Indonesian" }).optional(),
    description: z.string().min(15).openapi({
      example:
        "Atomic Habits: Perubahan Kecil yang Memberikan Hasil Luar Biasa adalah buku kategori self improvement karya James Clear.",
    }),
    image_url: z
      .string()
      .url()
      .openapi({
        example:
          "https://cdn.gramedia.com/uploads/items/Atomic_Habits_C-FRONT_HC_-_Mockup.png",
      })
      .optional(),
    isbn: z.string().min(5).openapi({ example: "9786020667188" }).optional(),
    publisher_slug: z.string().min(1).openapi({ example: "gramedia" }),
  })
  .optional()

export const UpdateBookSchema = z.object({
  title: z.string().min(5).openapi({ example: "Atomic Habits" }).optional(),
  author: z.string().min(3).openapi({ example: "James Clear" }).optional(),
  publication_date: z
    .string()
    .datetime()
    .openapi({ example: "2024-05-27T03:57:00.438Z" })
    .optional(),
  number_of_pages: z.number().int().min(1).openapi({ example: 352 }).optional(),
  length: z.number().int().min(1).openapi({ example: 23 }).optional(),
  width: z.number().int().min(1).openapi({ example: 15 }).optional(),
  weight: z.number().finite().openapi({ example: 0.55 }).optional(),
  language: z.string().min(3).openapi({ example: "Indonesian" }).optional(),
  description: z
    .string()
    .min(15)
    .openapi({
      example:
        "Atomic Habits: Perubahan Kecil yang Memberikan Hasil Luar Biasa adalah buku kategori self improvement karya James Clear.",
    })
    .optional(),
  image_url: z
    .string()
    .url()
    .openapi({
      example:
        "https://cdn.gramedia.com/uploads/items/Atomic_Habits_C-FRONT_HC_-_Mockup.png",
    })
    .optional(),
  isbn: z.string().min(5).openapi({ example: "9786020667188" }).optional(),
  publisher_slug: z.string().min(1).openapi({ example: "gramedia" }).optional(),
})
