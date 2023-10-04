/*
  Warnings:

  - A unique constraint covering the columns `[username]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_authorId_fkey";

-- CreateTable
CREATE TABLE "Spot" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "latitude" REAL NOT NULL,
    "longitude" REAL NOT NULL,
    "title" VARCHAR(24) NOT NULL,
    "description" TEXT,

    CONSTRAINT "Spot_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Spot_latitude_longitude_idx" ON "Spot"("latitude", "longitude");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- AddForeignKey
ALTER TABLE "Spot" ADD CONSTRAINT "Spot_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
