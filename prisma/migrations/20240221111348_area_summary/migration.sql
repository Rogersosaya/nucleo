/*
  Warnings:

  - Added the required column `summary` to the `Area` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Area" ADD COLUMN     "summary" TEXT NOT NULL;
