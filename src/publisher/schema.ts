import { z } from "zod"

export const PublisherIdSchema = z.object({
  id: z.coerce.number().int().min(1).openapi({ example: 1 }),
})

export const CreatePublisherSchema = z.object({
  name: z.string().min(3).openapi({ example: "Gramedia" }),
  address: z.string().min(10).openapi({ example: "Jl HOS Cokroaminoto N0 45" }),
  slug: z.string().min(3).openapi({ example: "gramedia" }),
})

export const UpdatePublisherSchema = z.object({
  name: z.string().min(3).openapi({ example: "Gramedia" }).optional(),
  address: z
    .string()
    .min(10)
    .openapi({ example: "Jl HOS Cokroaminoto N0 45" })
    .optional(),
  slug: z.string().min(3).openapi({ example: "gramedia" }).optional(),
})
