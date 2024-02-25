import React from "react";
import { getProjectsWithMembersById } from "../../../../actions/projects/projectsWithMembersById";
import Subtitle from '@/components/subtitle/Subtitle';
import Information from "@/project/component/informaction/Information";
import GridParticipant from "@/project/component/participants/GridParticipant";

interface Props {
  params: { id: string };
}
async function ProjectsPageId({ params }: Props) {
  const id = params.id;
  const project = await getProjectsWithMembersById({ id });
  console.log(project);
  return (
    <>
    <Subtitle subtitle={project?.name} description={project?.summary}  />
    
    <Information project={project}/>
    <GridParticipant members={project?.members} />
    </>
    
    
  );
}

export default ProjectsPageId;
