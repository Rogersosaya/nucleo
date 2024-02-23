/*
  Warnings:

  - You are about to drop the column `assignedBy` on the `AreaOnMember` table. All the data in the column will be lost.
  - You are about to drop the column `assignedBy` on the `AreaOnProject` table. All the data in the column will be lost.
  - You are about to drop the column `assignedBy` on the `MemberOnProject` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "AreaOnMember" DROP COLUMN "assignedBy";

-- AlterTable
ALTER TABLE "AreaOnProject" DROP COLUMN "assignedBy";

-- AlterTable
ALTER TABLE "MemberOnProject" DROP COLUMN "assignedBy";
