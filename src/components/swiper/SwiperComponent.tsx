"use client";

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import AreasHomeItem from "@/home/components/areas-home-list/AreasHomeItem";

const areas = [
    {
      name: "Marketing1",
      url: "/images/area.jpg",
      summary:
        "Comparte y recibe conocimiento para impulsar tu estrategia de marketing en nuestra comunidad de ideas.",
    },
    {
      name: "Marketing2",
      url: "/images/area.jpg",
      summary:
        "Comparte y recibe conocimiento para impulsar tu estrategia de marketing en nuestra comunidad de ideas.",
    },
    {
      name: "Marketing3",
      url: "/images/area.jpg",
      summary:
        "Comparte y recibe conocimiento para impulsar tu estrategia de marketing en nuestra comunidad de ideas.",
    },
    {
      name: "Marketing4",
      url: "/images/area.jpg",
      summary:
        "Comparte y recibe conocimiento para impulsar tu estrategia de marketing en nuestra comunidad de ideas.",
    },
    {
      name: "Marketing5",
      url: "/images/area.jpg",
      summary:
        "Comparte y recibe conocimiento para impulsar tu estrategia de marketing en nuestra comunidad de ideas.",
    },
    {
      name: "Marketing6",
      url: "/images/area.jpg",
      summary:
        "Comparte y recibe conocimiento para impulsar tu estrategia de marketing en nuestra comunidad de ideas.",
    },
    {
      name: "Marketing7",
      url: "/images/area.jpg",
      summary:
        "Comparte y recibe conocimiento para impulsar tu estrategia de marketing en nuestra comunidad de ideas.",
    },
    {
      name: "Marketing8",
      url: "/images/area.jpg",
      summary:
        "Comparte y recibe conocimiento para impulsar tu estrategia de marketing en nuestra comunidad de ideas.",
    },
    {
      name: "Marketing9",
      url: "/images/area.jpg",
      summary:
        "Comparte y recibe conocimiento para impulsar tu estrategia de marketing en nuestra comunidad de ideas.",
    },
  ];
//TODO como hago para no estar pasando de argumento en argumento?
interface Property {
    name: string;
    url:string;
    summary:string;
    // Otras propiedades que puedan tener los objetos en el array
}
interface Properties {
    properties: Property[];
}

export function SwiperComponent({properties}:Properties) {
    
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={4}
        navigation
        pagination={{ clickable: true }}
        // autoplay={{
        //   delay: 1500,
        // }}
        
        breakpoints={{
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 2,
          },
          960: {
            slidesPerView: 3,
          },
          // when window width is >= 640px
          1280: {
            slidesPerView: 4,
          },
        }}
      >
        {properties.map((property, index) => {
          return (
            <SwiperSlide key={property.name}>
              <AreasHomeItem {...property} />
            </SwiperSlide>
          );
        })}
      </Swiper>
      {/* <div className="flex flex-wrap">
          {areas.map((area) => {
            return <AreasHomeItem key={area.name} />;
          })}
        </div> */}
    </>
  );
}
