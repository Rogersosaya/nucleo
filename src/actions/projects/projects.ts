"use server";
import prisma from "../../lib/prisma";
export const getProjects = async () => {
  try {
    const projects = await prisma.project.findMany();
    console.log(projects);
    return projects;
  } catch (error) {
    console.log(error);
  }
};
