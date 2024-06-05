-- CreateTable
CREATE TABLE "Book" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "isbn" VARCHAR(255),
    "author" VARCHAR(255) NOT NULL,
    "publication_date" TIMESTAMPTZ,
    "number_of_pages" INTEGER,
    "length" DOUBLE PRECISION,
    "width" DOUBLE PRECISION,
    "weight" DOUBLE PRECISION,
    "language" VARCHAR(255),
    "description" TEXT NOT NULL,
    "image_url" VARCHAR(255),
    "publisher_id" INTEGER,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "Book_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Publisher" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "slug" TEXT,
    "address" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "Publisher_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Book_title_key" ON "Book"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Book_isbn_key" ON "Book"("isbn");

-- CreateIndex
CREATE UNIQUE INDEX "Publisher_name_key" ON "Publisher"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Publisher_slug_key" ON "Publisher"("slug");

-- AddForeignKey
ALTER TABLE "Book" ADD CONSTRAINT "Book_publisher_id_fkey" FOREIGN KEY ("publisher_id") REFERENCES "Publisher"("id") ON DELETE SET NULL ON UPDATE CASCADE;
