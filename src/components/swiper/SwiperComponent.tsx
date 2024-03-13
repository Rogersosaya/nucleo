"use client";

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import AreasHomeItem from "@/home/components/areas-home-list/AreasHomeItem";
import  "./swiper.module.css";


//TODO como hago para no estar pasando de argumento en argumento?
interface Property {
  id: string;
    name: string;
    url:string;
    summary:string;
    // Otras propiedades que puedan tener los objetos en el array
}
interface Properties {
    properties?: Property[];
}

export function SwiperComponent({properties}:Properties) {
    
  return (
    <>
      <Swiper style={{height: '100%'}}
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={70}
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
        {properties?.map((property, index) => {
          return (
            <SwiperSlide style={{height: 'auto'}}    key={property.name} >
              <AreasHomeItem  {...property} />
            </SwiperSlide>
          );
        })}
      </Swiper>
      
    </>
  );
}
