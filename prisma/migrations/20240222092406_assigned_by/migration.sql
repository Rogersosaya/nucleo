/*
  Warnings:

  - You are about to drop the column `assigned` on the `AreaOnMember` table. All the data in the column will be lost.
  - You are about to drop the column `assigned` on the `AreaOnProject` table. All the data in the column will be lost.
  - You are about to drop the column `assigned` on the `MemberOnProject` table. All the data in the column will be lost.
  - Added the required column `assignedBy` to the `AreaOnMember` table without a default value. This is not possible if the table is not empty.
  - Added the required column `assignedBy` to the `AreaOnProject` table without a default value. This is not possible if the table is not empty.
  - Added the required column `assignedBy` to the `MemberOnProject` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "AreaOnMember" DROP COLUMN "assigned",
ADD COLUMN     "assignedBy" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "AreaOnProject" DROP COLUMN "assigned",
ADD COLUMN     "assignedBy" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "MemberOnProject" DROP COLUMN "assigned",
ADD COLUMN     "assignedBy" TEXT NOT NULL;
