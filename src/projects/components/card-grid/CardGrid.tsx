import React from "react";
import CardItem from "../card-item/CardItem";

const projects = [
  {
    name: "proyecto1",
    description:
      "Descripción 1 Descripción 1Descripción 1Descripción 1Descripción 1",
    areas: [
      { name: "AREA DE SISTEMAS" },
      { name: "AREA DE MARKETING" },
      { name: "AREA DE LOGÍSTICA" },
    ],
    members: [
      
      {
        url: "/images/testimonials/jairo.jpg",
      },
      {
        url: "/images/testimonials/leonardo.jpg",
      },
    ],
  },
  {
    name: "proyecto2",
    description:
      "Descripción 1 Descripción 1Descripción 1Descripción 1Descripción 1",
    areas: [
      { name: "AREA DE SISTEMAS" },
      { name: "AREA DE MARKETING" },
      { name: "AREA DE LOGÍSTICA" },
    ],
    members: [
      {
        url: "/images/testimonials/alfredo.jpg",
      },
      {
        url: "/images/testimonials/elias.png",
      },
      {
        url: "/images/testimonials/yucra.png",
      },
      {
        url: "/images/testimonials/gavino.jpg",
      },
      {
        url: "/images/testimonials/jairo.jpg",
      },
      {
        url: "/images/testimonials/leonardo.jpg",
      },
    ],
  },
  
];
function CardGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      {projects.map((project) => {
        return <CardItem {...project} />;
      })}
    </div>
  );
}

export default CardGrid;
