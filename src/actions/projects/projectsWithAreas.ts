"use server";
import prisma from "../../lib/prisma";
export const getProjectsWithAreas = async () => {
  try {
    const projects = await prisma.project.findMany({
      include: {
        areas: { include: { area: true } },
        members: { include: { member: true } },
      },
      
    });
    const result = projects.map((project) => {
      return { ...project, areas: project.areas.map((area) => area.area),members: project.members.map((member) => member.member) };
    });

    
    return result;
  } catch (error) {
    console.log(error);
  }
};
