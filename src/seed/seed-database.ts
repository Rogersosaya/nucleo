import { initialData } from "./seed";
import prisma from "../lib/prisma";

async function main() {
  await prisma.areaOnMember.deleteMany(),
    await prisma.areaOnProject.deleteMany(),
    await prisma.memberOnProject.deleteMany(),
    await prisma.objective.deleteMany(),
    await prisma.subArea.deleteMany(),
    await prisma.task.deleteMany(),
    await prisma.testimonial.deleteMany(),
    await prisma.area.deleteMany(),
    await prisma.project.deleteMany(),
    await prisma.member.deleteMany();
  const { members, areas, projects } = initialData;

  
  
  for (const area of areas) {
    const { subareas, objectives, tasks, ...rest } = area;
    const areaDB = await prisma.area.create({
      data: {
        ...rest,
      },
    });

    for (const subarea of subareas || []) {
      await prisma.subArea.create({
        data: {
          ...subarea,
          areaId: areaDB.id,
        },
      });
    }

    for (const objective of objectives) {
      await prisma.objective.create({
        data: {
          ...objective,
          areaId: areaDB.id,
        },
      });
    }

    for (const task of tasks) {
      await prisma.task.create({
        data: {
          ...task,
          areaId: areaDB.id,
        },
      });
    }
  }

  for (const member of members) {
    const { testimonial, ...rest } = member;
    const memberDB = await prisma.member.create({
      data: {
        ...rest,
      },
    });
    await prisma.testimonial.create({
      data: {
        ...testimonial,
        memberId: memberDB.id,
      },
    });
  }

  await Promise.all([
    // prisma.member.createMany({ data: members }),
    prisma.project.createMany({ data: projects }),
  ]);

  const areasDB = await prisma.area.findMany();
  const projectsDB = await prisma.project.findMany();
  const membersDB = await prisma.member.findMany();

  const areasMap = areasDB.reduce((map, area) => {
    map[area.name.toLowerCase()] = area.id;
    return map;
  }, {} as Record<string, string>);

  const projectsMap = projectsDB.reduce((map, project) => {
    map[project.name.toLowerCase()] = project.id;
    return map;
  }, {} as Record<string, string>);

  const membersMap = membersDB.reduce((map, member) => {
    map[member.name.toLowerCase()] = member.id;
    return map;
  }, {} as Record<string, string>);
  console.log(membersMap), console.log(areasMap), console.log(projectsMap);

  const membersWithAreas = [
    {
      member: "elias ortiz",
      area: "sistemas",
    },
    {
      member: "jean yucra",
      area: "sistemas",
    },
    {
      member: "alfredo quispe",
      area: "sistemas",
    },
    {
      member: "jordan laureano",
      area: "sistemas",
    },
    {
      member: "leonardo ramirez",
      area: "marketing",
    },
    {
      member: "anthony calderón",
      area: "marketing",
    },
    {
      member: "jairo kazuo",
      area: "relaciones públicas",
    },
  ];
  const projectsWithAreas = [
    {
      project: "debate tu pensamiento",
      area: "investigación",
    },
    {
      project: "ecofiis",
      area: "project management office",
    },
    {
      project: "yachaywasi",
      area: "project management office",
    },
    {
      project: "núcleotube",
      area: "marketing",
    },
    {
      project: "english club",
      area: "relaciones públicas",
    },

    {
      project: "núcleo power",
      area: "industrial",
    },

    {
      project: "ecofiis",
      area: "industrial",
    },

    {
      project: "núcleo power",
      area: "sistemas",
    },
    {
      project: "yachaywasi",
      area: "gestión de talento humano",
    },
  ];
  const memberWithProject = [
    {
      project: "núcleotube",
      member: "leonardo ramirez",
    },
    {
      project: "núcleotube",
      member: "anthony calderón",
    },
    {
      project: "english club",
      member: "jairo kazuo",
    },
    {
      project: "núcleo power",
      member: "jean yucra",
    },
    {
      project: "núcleo power",
      member: "alfredo quispe",
    },
    {
      project: "núcleo power",
      member: "elias ortiz",
    },
    {
      project: "núcleo power",
      member: "jordan laureano",
    },
  ];

  membersWithAreas.forEach(async ({ member, area }) => {
    
    await prisma.areaOnMember.create({
      data: {
        memberId: membersMap[member],
        areaId: areasMap[area],
      },
    });
  });

  projectsWithAreas.forEach(async ({ project, area }) => {
    
    await prisma.areaOnProject.create({
      data: {
        projectId: projectsMap[project],
        areaId: areasMap[area],
      },
    });
  });

  memberWithProject.forEach(async ({ member, project }) => {
    // console.log(projectsMap[project], membersMap[member]);
    await prisma.memberOnProject.create({
      data: {
        projectId: projectsMap[project],
        memberId: membersMap[member],
      },
    });
  });

  console.log("Seed ejecutado correctamente");
}

(() => {
  if (process.env.NODE_ENV === "production") return;
  main();
})();
