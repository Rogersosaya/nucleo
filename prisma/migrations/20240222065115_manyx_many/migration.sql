-- CreateTable
CREATE TABLE "AreaOnMember" (
    "memberId" TEXT NOT NULL,
    "areaId" TEXT NOT NULL,
    "assignedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "assigned" TEXT NOT NULL,

    CONSTRAINT "AreaOnMember_pkey" PRIMARY KEY ("memberId","areaId")
);

-- CreateTable
CREATE TABLE "MemberOnProject" (
    "projectId" TEXT NOT NULL,
    "memberId" TEXT NOT NULL,
    "assignedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "assigned" TEXT NOT NULL,

    CONSTRAINT "MemberOnProject_pkey" PRIMARY KEY ("projectId","memberId")
);

-- CreateTable
CREATE TABLE "AreaOnProject" (
    "projectId" TEXT NOT NULL,
    "areaId" TEXT NOT NULL,
    "assignedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "assigned" TEXT NOT NULL,

    CONSTRAINT "AreaOnProject_pkey" PRIMARY KEY ("projectId","areaId")
);

-- AddForeignKey
ALTER TABLE "AreaOnMember" ADD CONSTRAINT "AreaOnMember_memberId_fkey" FOREIGN KEY ("memberId") REFERENCES "Member"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AreaOnMember" ADD CONSTRAINT "AreaOnMember_areaId_fkey" FOREIGN KEY ("areaId") REFERENCES "Area"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MemberOnProject" ADD CONSTRAINT "MemberOnProject_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MemberOnProject" ADD CONSTRAINT "MemberOnProject_memberId_fkey" FOREIGN KEY ("memberId") REFERENCES "Member"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AreaOnProject" ADD CONSTRAINT "AreaOnProject_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AreaOnProject" ADD CONSTRAINT "AreaOnProject_areaId_fkey" FOREIGN KEY ("areaId") REFERENCES "Member"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
