-- CreateTable
CREATE TABLE "Books" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "title" VARCHAR(255) NOT NULL,
    "author" VARCHAR(255) NOT NULL,
    "publication_date" TIMESTAMPTZ,
    "number_of_pages" INTEGER,
    "length" DOUBLE PRECISION,
    "width" DOUBLE PRECISION,
    "weight" DOUBLE PRECISION,
    "language" VARCHAR(255),
    "description" TEXT NOT NULL,
    "image_url" VARCHAR(255),
    "isbn" VARCHAR(255),

    CONSTRAINT "Books_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Books_title_key" ON "Books"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Books_isbn_key" ON "Books"("isbn");
