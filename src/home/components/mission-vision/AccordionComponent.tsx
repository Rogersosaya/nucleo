'use client'
import {Accordion, AccordionItem} from "@nextui-org/react";


function AccordionComponent() {
  const defaultContent =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <Accordion variant="splitted">
      <AccordionItem key="1" aria-label="Accordion 1" title="Misión">
      Contribuir al desarrollo profesional de nuestros integrantes, promoviendo la
investigación, la creación y ejecución de proyectos que beneficien a la FIIS y a nuestra
sociedad; donde tienen la oportunidad de poner a prueba y mejorar sus habilidades
blandas, de esta manera complementamos la formación dada por nuestra universidad.
      </AccordionItem>
      <AccordionItem key="2" aria-label="Accordion 2" title="Visión">
      Ser la organización representativa en lo que se refiere a investigación y desarrollo en el
Perú, capaz de proponer nuevas tecnologías y soluciones para nuestra realidad, siempre
estando a la vanguardia de los nuevos cambios.
      </AccordionItem>
      <AccordionItem key="3" aria-label="Accordion 3" title="EJES DE DESARROLLO">
        <ol>
          
          <li>• Investigación</li>
          <li>• Proyectos y programas</li>
          <li>• Habilidades blandas y duras</li>
         
        </ol>
      


      </AccordionItem>
      <AccordionItem key="4" aria-label="Accordion 4" title="OBJETIVOS">
        <ul>
          <li>• Impulsar la investigación en la FIIS.</li>
          <li>• Incentivar y apoyar la creación de programas y proyectos que beneficien a la
comunidad FIIS y a la sociedad.</li>

          <li>• Capacitar a los miembros de Núcleo en las principales herramientas solicitadas en
el ámbito laboral.</li>

          <li>• Generar espacios de desarrollo de habilidades blandas y duras de los estudiantes
de la FIIS.</li>
          <li>• Formalizar los distintos procesos de Núcleo.</li>

          <li>• Activar y documentar los proyectos emblemáticos del CC Núcleo.</li>

        </ul>
      




      </AccordionItem>
    </Accordion>
//     <div>
//       <Accordion className="rounded-lg" defaultExpanded>
//         <AccordionSummary className="bg-zinc-200 ">Misión</AccordionSummary>
//         <AccordionDetails>
//           Contribuir al desarrollo profesional de nuestros integrantes,
//           promoviendo la investigación, la creación y ejecución de proyectos que
//           beneficien a la FIIS y a nuestra sociedad; donde tienen la oportunidad
//           de poner a prueba y mejorar sus habilidades blandas, de esta manera
//           complementamos la formación dada por nuestra universidad.
//         </AccordionDetails>
//       </Accordion>
//       <Accordion className="rounded-lg" defaultExpanded>
//         <AccordionSummary className="bg-zinc-200 ">Visión</AccordionSummary>
//         <AccordionDetails>
//         Ser la organización representativa en lo que se refiere a investigación y desarrollo en el
// Perú, capaz de proponer nuevas tecnologías y soluciones para nuestra realidad, siempre
// estando a la vanguardia de los nuevos cambios.
//         </AccordionDetails>
//       </Accordion>
//     </div>
  );
}

export default AccordionComponent;
