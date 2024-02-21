import React from "react";
import AchievementItem from "./AchievementItem";
import CardAnimate from "../../../components/card-animate/CardAnimate";
import Subtitle from '@/components/subtitle/Subtitle';

const achievements = [
  {
    title: "Primer puesto en el P&G CEO",
    description: 'Equipo de la FIIS ganó a estudiantes de otras universidades en la competencia que midió sus capacidades de solución a los problemas reales que enfrenta una compañía multinacional',
    url:'/images/achievement1.jpg',
  },
  {
    title: "Segundo puesto del II Concurso de Oficinas UNI Ecoeficientes",
    description: 'Uno de nuestro proyectos representativos, ecoeficientes y amigables con el ambiente. ECOFIIS obtuvo el segundo puesto del II Concurso de Oficinas UNI Ecoeficientes y el I Recicla UNI organizado por el comité de Ecoeficiencia de la UNI',
    url:'/images/achievement2.png',
  },
  {
    title: "Segundo puesto en la feria de proyectos FIIS 2023-II",
    description: 'Proyectp realizado por nuestros estudiantes llamado  "TítulaUNIzate", es una Página Web de Guía para los Trámites de Grado y Título en la FIIS',
    url:'/images/achievement3.jpg',
  },
  
];
function Achievements() {
  return (
    <div className="flex flex-col ">
      <Subtitle subtitle="Logros" description="Un vistazo a nuestros hitos y contribuciones."/>
      
      <div className="flex justify-center flex-wrap">
        {
          achievements.map(achievement =>{
            return <CardAnimate {...achievement}  />
          })
        }
        
        
      </div>
    </div>
  );
}

export default Achievements;
