import CardGrid from "@/projects/components/card-grid/CardGrid"
import Search from "@/components/search/Search"
import {getProjectsWithAreas } from "@/actions";
async function projectsPage() {
  const projects = await getProjectsWithAreas();
  return (
    <>
    <Search/>
    <CardGrid projects={projects} />
    </>
  )
}

export default projectsPage