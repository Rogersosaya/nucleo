

import Subtitle from '@/components/subtitle/Subtitle';
import { SwiperComponent } from '@/components/swiper/SwiperComponent';

interface Property {
    name: string;
    url:string;
    summary:string;
    // Otras propiedades que puedan tener los objetos en el array
}

interface Props{
    subtitle: string;
    description: string;
    properties?: Property[];
}

export function AreasHomeList({subtitle, description, properties}: Props ) {
    
  return (
    <>
      <div >
      <Subtitle subtitle={subtitle} description={description}/>
      <div className='mb-12'>
      <SwiperComponent properties={properties}/></div>
      </div>
      
    </>
  );
}
