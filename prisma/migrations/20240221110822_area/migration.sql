/*
  Warnings:

  - Added the required column `name` to the `Area` table without a default value. This is not possible if the table is not empty.
  - Added the required column `url` to the `Area` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Area" ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "url" TEXT NOT NULL;
