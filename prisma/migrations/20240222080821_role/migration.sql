-- DropForeignKey
ALTER TABLE "AreaOnProject" DROP CONSTRAINT "AreaOnProject_areaId_fkey";

-- AlterTable
ALTER TABLE "Member" ADD COLUMN     "role" TEXT NOT NULL DEFAULT '';

-- AddForeignKey
ALTER TABLE "AreaOnProject" ADD CONSTRAINT "AreaOnProject_areaId_fkey" FOREIGN KEY ("areaId") REFERENCES "Area"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
