"use server";
import prisma from "../../lib/prisma";
export const getProjects = async () => {
  try {
    const projects = await prisma.project.findMany({
      select: {
        id: true,
        name: true,
        url: true,
        summary: true
      }
    });
    

    
    return projects;
  } catch (error) {
    console.log(error);
  }
};
