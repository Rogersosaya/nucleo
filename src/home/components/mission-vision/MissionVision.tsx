import AccordionComponent from "./AccordionComponent";
import Image from 'next/image';

function MissionVision() {
  return (
    <div className="2xl:container 2xl:mx-auto lg:py-12 lg:px-20 md:py-9 md:px-6 py-4 px-4">
      <div className="flex flex-col lg:flex-row justify-between gap-8">
        <div className="w-full lg:w-8/12 ">
          <Image src="/images/dino.png" width={600} height={200} alt="dino" style={{filter: 'drop-shadow(10px 7px 10px purple)', width:'auto', height:'auto'}}/>
          
        </div>
        <div className="w-full lg:w-5/12 flex flex-col justify-center">
          <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
            Detalles
          </h1>
          
            <AccordionComponent />
          
        </div>
      </div>
    </div>
  );
}

export default MissionVision;
