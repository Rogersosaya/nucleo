import CardGrid from "@/projects/components/card-grid/CardGrid";
import Search from "@/components/search/Search";
import { getProjectsWithAreas } from "@/actions";
import { Swiper, SwiperSlide } from "swiper/react";
import { getProjectsWithAreasSearch } from "@/actions/projects/projectsWithAreasSearch";
import { getProjectsByAreas } from "@/actions/projects/projectsByAreas";
async function projectsPage({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    area?: string;
  };
}) {
  const query = searchParams?.query || '';
  const area = searchParams?.area || '';
  const projects = await getProjectsWithAreasSearch({search: query, area: area});
  // const projects = await getProjectsByAreas({area: area})
  return (
    <>
      <Search />
      <CardGrid projects={projects} />
    </>
  );
}

export default projectsPage;
