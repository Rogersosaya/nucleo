import { Banner } from '@/home/components'
import {AreasHomeList} from '@/home/components/areas-home-list/AreasHomeList'
import React from 'react'
import Footer from '@/components/footer/Footer' 
import About from '@/home/components/about/About'
import Collaboration from '../../home/components/collaboration/Collaboration';
import MissionVision from '@/home/components/mission-vision/MissionVision'
import Achievements from '../../home/components/achievements/Achievements';
import BorderAnimation from '../../components/border-animation/BorderAnimation';
import CardAnimate from '../../components/card-animate/CardAnimate';
import TypeWriter from '../../home/components/typewriter/TypeWriter';
import Testimonial from '../../home/components/testimonial/Testimonial';

function homePage() {
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
  const proyectos = [
    {
      name: "Proyecto1",
      url: "/images/area.jpg",
      summary:
        "Comparte y recibe conocimiento para impulsar tu estrategia de marketing en nuestra comunidad de ideas.",
    },
    {
      name: "Proyecto2",
      url: "/images/area.jpg",
      summary:
        "Comparte y recibe conocimiento para impulsar tu estrategia de marketing en nuestra comunidad de ideas.",
    },
    {
      name: "Proyecto3",
      url: "/images/area.jpg",
      summary:
        "Comparte y recibe conocimiento para impulsar tu estrategia de marketing en nuestra comunidad de ideas.",
    },
    {
      name: "Proyecto4",
      url: "/images/area.jpg",
      summary:
        "Comparte y recibe conocimiento para impulsar tu estrategia de marketing en nuestra comunidad de ideas.",
    },
    {
      name: "Proyecto5",
      url: "/images/area.jpg",
      summary:
        "Comparte y recibe conocimiento para impulsar tu estrategia de marketing en nuestra comunidad de ideas.",
    },
    {
      name: "Proyecto6",
      url: "/images/area.jpg",
      summary:
        "Comparte y recibe conocimiento para impulsar tu estrategia de marketing en nuestra comunidad de ideas.",
    },
    {
      name: "Proyecto7",
      url: "/images/area.jpg",
      summary:
        "Comparte y recibe conocimiento para impulsar tu estrategia de marketing en nuestra comunidad de ideas.",
    },
    {
      name: "Proyecto8",
      url: "/images/area.jpg",
      summary:
        "Comparte y recibe conocimiento para impulsar tu estrategia de marketing en nuestra comunidad de ideas.",
    },
    {
      name: "Proyecto9",
      url: "/images/area.jpg",
      summary:
        "Comparte y recibe conocimiento para impulsar tu estrategia de marketing en nuestra comunidad de ideas.",
    },
  ];
  
  return (
    <>
    <Banner/>
    
    <Collaboration/>
    <About/>
    <MissionVision/>
    <AreasHomeList subtitle='Áreas' description='Explora nuestros campos de enfoque y acción.' properties={areas} />
    <AreasHomeList subtitle='Proyectos' description='Nuestras iniciativas en marcha y proyectos pasados.' properties={proyectos} />
    <Achievements/>
    <Testimonial/>
    <Footer/>
    </>
    
  )
}

export default homePage