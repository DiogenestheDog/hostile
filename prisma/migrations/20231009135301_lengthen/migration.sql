/*
  Warnings:

  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "Spot" ALTER COLUMN "title" SET DATA TYPE VARCHAR(42);

-- DropTable
DROP TABLE "Post";
