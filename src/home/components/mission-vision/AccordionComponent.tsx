import Accordion from "@mui/material/Accordion";

import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";


function AccordionComponent() {
  return (
    <div >
      <Accordion className="rounded-lg" defaultExpanded>
        <AccordionSummary className="bg-zinc-200 ">Misión</AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion className="rounded-lg" defaultExpanded>
        <AccordionSummary className="bg-zinc-200 ">Visión</AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default AccordionComponent
