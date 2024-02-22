import { initialData } from "./seed";
import prisma from "../lib/prisma";

async function main() {
  const { members, areas, projects } = initialData;
  await  prisma.objective.deleteMany(),
  
  await  prisma.subArea.deleteMany(),
  await  prisma.task.deleteMany(),
  await  prisma.testimonial.deleteMany(),
  await   prisma.area.deleteMany(),
  await  prisma.project.deleteMany(),
  await  prisma.member.deleteMany(),
  
  
  areas.forEach(async (area) => {
    const { subareas, objectives, tasks, ...rest } = area;
    const areaDB = await prisma.area.create({
      data: {
        ...rest,
      },
    });
    // console.log(subareas)
    subareas?.forEach(async(subarea) => {
      
        await prisma.subArea.create({
          data: {
            ...subarea,
            areaId: areaDB.id,
          },
        });
    });
    objectives.forEach(async(objective) => {
      
        await prisma.objective.create({
          data: {
            ...objective,
            areaId: areaDB.id,
          },
        });
    });
    tasks.forEach(async(task) => {
      
        await prisma.task.create({
          data: {
            ...task,
            areaId: areaDB.id,
          },
        });
    });
  });
  await Promise.all([
    prisma.member.createMany({ data: members }),
    prisma.project.createMany({ data: projects }),
  ]);

  //   const areasDB = await prisma.area.findMany();
  //   const areasMap = areasDB.reduce((map, area) => {
  //     map[area.name.toLowerCase()] = area.id;
  //     return map;
  //   }, {} as Record<string, string>);
  //   console.log(areasMap);

  //   areasData.forEach(async(area) => {
  //     await prisma.subArea.create({
  //         data: {
  //             ...area
  //         }
  //     })
  //   })
  // console.log(initialData);

  console.log("Seed ejecutado correctamente");
}

(() => {
  if (process.env.NODE_ENV === "production") return;
  main();
})();
