"use server";
import prisma from "../../lib/prisma";
export const getAreas = async () => {
  try {
    const areas = await prisma.area.findMany({
      select: {
        name: true,
        url: true,
        summary: true
      }
    });
    

   
    return areas;
  } catch (error) {
    console.log(error);
  }
};
