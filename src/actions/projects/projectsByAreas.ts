"use server";
import prisma from "../../lib/prisma";

interface AreaOptions {
  area?: string;
}
export const getProjectsByAreas = async ({ area }: AreaOptions) => {
  try {
    const projects = await prisma.project.findMany({
      include: {
        areas: { include: { area: true } },
        members: { include: { member: true } },
      },
      where: {
        areas: {
          some: {
            area:{
              name: area
            }
          }
        }
      }
      // where: {
      //   OR: [
      //     {
      //       name: {
      //         contains: search,
      //         mode: 'insensitive',
      //       },
      //     },
      //     {
      //       summary: {
      //         contains: search,
      //         mode: 'insensitive',
      //       },
      //     },
      //   ],
      // },
    });
    const result = projects.map((project) => {
      return {
        ...project,
        areas: project.areas.map((area) => area.area),
        members: project.members.map((member) => member.member),
      };
    });
    
    console.log(projects);
    return result;
  } catch (error) {
    console.log(error);
  }
};
