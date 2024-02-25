import CardGrid from "@/projects/components/card-grid/CardGrid";
import Search from "@/components/search/Search";
import { getProjectsWithAreas } from "@/actions";
import { Swiper, SwiperSlide } from "swiper/react";
import { getProjectsWithAreasSearch } from "@/actions/projects/projectsWithAreasSearch";
async function projectsPage({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';
  const projects = await getProjectsWithAreasSearch({search: query});

  return (
    <>
      <Search />
      <CardGrid projects={projects} />
    </>
  );
}

export default projectsPage;
