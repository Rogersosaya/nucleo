"use server";
import prisma from "../../lib/prisma";

interface Props{
    id: string;
}
export const getProjectsWithMembersById = async ({id}:Props) => {
  try {
    const project = await prisma.project.findUnique({
      where: {
        id: id,
      },
      include: {
        areas: { include: { area: true } },
        members: { include: { member: true } },
      },
    });
    console.log(project);
    const result = {
      ...project,
      areas: project?.areas.map((area) => area.area),
      members: project?.members.map((member) => member.member),
    };

    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
  }
};
