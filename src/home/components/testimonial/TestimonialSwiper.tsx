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
import TestimonialItem from "./TestimonialItem";
import { FreeMode } from "swiper/modules";

const testimonials = [
  {
    name: "Gavino Geldres",
    role: "Presidente",
    testimonial:
      "Ser parte del Centro Cultural Núcleo ha sido una experiencia transformadora. Aquí he aprendido a liderar con integridad, a inspirar a otros y a trabajar incansablemente por el éxito de nuestros proyectos. Es un honor ser parte de esta comunidad de líderes en constante crecimiento.",
    url: "/images/testimonials/gavino.jpg",
  },
  {
    name: "Jordan Laureano",
    role: "Miembro de Logística",
    testimonial:
      "El Centro Cultural Núcleo no solo me ha brindado oportunidades para desarrollar habilidades de organización y planificación, sino que también me ha enseñado el valor del trabajo en equipo y la importancia de la excelencia en cada proyecto.",
    url: "/images/testimonials/jordan.jpg",
  },
  {
    name: "Elias Ortiz",
    role: "Ex miembro del área de Sistemas",
    testimonial:
      "El Centro Cultural Núcleo me dio las herramientas y la confianza necesaria para enfrentar desafíos en el mundo laboral. Aprendí a pensar de manera crítica, a resolver problemas de forma creativa y a nunca conformarme con menos de lo mejor.",
    url: "/images/testimonials/elias.png",
  },
  {
    name: "Leonardo Ramirez",
    role: "Director del área de Marketing",
    testimonial:
      "Formar parte del Centro Cultural Núcleo ha sido clave en mi desarrollo profesional. Aquí he podido aplicar mis conocimientos en marketing de una manera práctica y colaborativa, contribuyendo al éxito de nuestra institución y al crecimiento de mis habilidades.",
    url: "/images/testimonials/leonardo.jpg",
  },
  {
    name: "Jairo Kazuo",
    role: "Miembro de Relaciones Públicas",
    testimonial:
      "El Centro Cultural Núcleo me ha permitido expandir mi red de contactos y mejorar mis habilidades de comunicación. Cada evento y proyecto en el que participamos es una oportunidad para fortalecer la imagen de nuestra facultad y generar impacto en la sociedad.",
    url: "/images/testimonials/jairo.jpg",
  },
  {
    name: "Alfredo Ramirez",
    role: "Miembro del área de Sistemas ",
    testimonial:
      "Como miembro del área de sistemas, he tenido la oportunidad de aplicar mis conocimientos en tecnología para innovar y mejorar los procesos internos del Centro Cultural Núcleo. Es gratificante ver cómo nuestras soluciones contribuyen al éxito de la organización.",
    url: "/images/testimonials/alfredo.jpg",
  },
  {
    name: "Jean Yucra",
    role: "Miembro del área de Sistemas ",
    testimonial:
      "En el Centro Cultural Núcleo, he encontrado un espacio donde puedo combinar mi pasión por la tecnología con mi interés por el servicio a la comunidad. Aquí, cada línea de código que escribimos tiene un propósito mayor: impulsar el cambio y la excelencia.",
    url: "/images/testimonials/yucra.png",
  },
  {
    name: "Anthony Calderon",
    role: "Miembro de Marketing",
    testimonial:
      "Ser parte del Centro Cultural Núcleo me ha brindado la oportunidad de desarrollar habilidades de marketing estratégico y creativo. Cada campaña y estrategia que implementamos tiene como objetivo promover nuestros valores y atraer a nuevos talentos que quieran marcar la diferencia en la sociedad.",
    url: "/images/testimonials/anthony.png",
  },
];
//TODO como hago para no estar pasando de argumento en argumento?
interface Property {
  name: string;
  url: string;
  summary: string;
  // Otras propiedades que puedan tener los objetos en el array
}
interface Properties {
  properties: Property[];
}

export function TestimonialSwiper() {
  return (
    <>
      <Swiper
        modules={[FreeMode, Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        loop={true}
        freeMode={true}
        centeredSlides={true}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        
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
            slidesPerView: 3,
          },
        }}
      >
        {testimonials.map((testimonial) => {
          return (
            <SwiperSlide key={testimonial.name}>
              <TestimonialItem {...testimonial} />
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
