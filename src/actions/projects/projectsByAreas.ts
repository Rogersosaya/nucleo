"use server";
import prisma from "../../lib/prisma";

interface SearchOptions {
  search?: string;
}
export const getProjectsWithAreasSearch = async (search = "") => {
  try {
    
    const projects = await prisma.project.findMany({
      include: {
        areas: { include: { area: true } },
        members: { include: { member: true } },
      },
      where: {
        OR: [
          {
            name: {
              contains: search,
              mode: 'insensitive', 
            },
          },
          {
            summary: {
              contains: search,
              mode: 'insensitive', 
            },
          },
        ],
      },
    });
    const result = projects.map((project) => {
      return {
        ...project,
        areas: project.areas.map((area) => area.area),
        members: project.members.map((member) => member.member),
      };
    });
    
    return result;
  } catch (error) {
    console.log(error);
  }
};
