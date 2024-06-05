import { type Publisher } from "@prisma/client"

export type TypePublisher = Omit<Publisher, "created_at" | "updated_at" | "id">

export const publisherList: TypePublisher[] = [
  {
    slug: "gramedia",
    name: "Gramedia Pustaka Utama",
    address:
      "Jl. Palmerah Barat 29-37 10270, RT.1/RW.2, Gelora, Tanah Abang, Central Jakarta City, Jakarta 10270",
  },
  {
    slug: "bentang",
    name: "Bentang Pustaka",
    address:
      "Jl. Pesanggrahan No.8 RT/RW : 04/36, Sanggrahan, Wedomartani, Kec. Ngemplak, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55584",
  },
]
