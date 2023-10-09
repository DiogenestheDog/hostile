/*
  Warnings:

  - You are about to alter the column `title` on the `Spot` table. The data in that column could be lost. The data in that column will be cast from `VarChar(96)` to `VarChar(48)`.

*/
-- AlterTable
ALTER TABLE "Spot" ALTER COLUMN "title" SET DATA TYPE VARCHAR(48);
