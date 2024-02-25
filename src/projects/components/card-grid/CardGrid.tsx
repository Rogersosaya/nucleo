
import CardItem from "../card-item/CardItem";


import { Project } from "@/interfaces/project.interface";
import style from "./card-grid.module.css";
interface Props {
  projects?: Project[];
}
// const projects = [

//   {
//     name: "proyecto1",
//     description:
//       "Descripción 1 Descripción 1Descripción 1Descripción 1Descripción 1",
//     areas: [
//       { name: "AREA DE SISTEMAS" },
//       { name: "AREA DE MARKETING" },
//       { name: "AREA DE LOGÍSTICA" },
//     ],
//     members: [

//       {
//         url: "/members/jairo.jpg",
//       },
//       {
//         url: "/members/leonardo.jpg",
//       },
//     ],
//   },
//   {
//     name: "proyecto2",
//     description:
//       "Descripción 1 Descripción 1Descripción 1Descripción 1Descripción 1",
//     areas: [
//       { name: "AREA DE SISTEMAS" },
//       { name: "AREA DE MARKETING" },
//       { name: "AREA DE LOGÍSTICA" },
//     ],
//     members: [
//       {
//         url: "/members/alfredo.jpg",
//       },
//       {
//         url: "/members/elias.png",
//       },
//       {
//         url: "/members/yucra.png",
//       },
//       {
//         url: "/members/gavino.jpg",
//       },
//       {
//         url: "/members/jairo.jpg",
//       },
//       {
//         url: "/members/leonardo.jpg",
//       },
//     ],
//   },

// ];
async function CardGrid({ projects }: Props) {
  
  return (    
    <div className={`grid grid-cols- md:grid-cols-2 gap-4 `}>
      {projects?.map((project) => {
        return <CardItem key={project.name} {...project} />;
      })}
    </div>
  );
}

export default CardGrid;
