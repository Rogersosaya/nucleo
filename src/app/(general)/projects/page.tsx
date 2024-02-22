import CardGrid from "@/projects/components/card-grid/CardGrid"
import Search from "@/components/search/Search"
import { getProjects } from "@/actions";
async function projectsPage() {
  const projects = await getProjects();
  return (
    <>
    <Search/>
    <CardGrid projects={projects} />
    </>
  )
}

export default projectsPage