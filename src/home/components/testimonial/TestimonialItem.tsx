import React from "react";
import Image from 'next/image';
interface Testimonial {
  content: string;
}
interface Props {
  name: string;
  role: string;
  testimonial: Testimonial | null;
  url: string;
}
// TODO: la imagen de bob es la única q se tiene otro tamaño
function TestimonialItem({name, role, testimonial, url}: Props) {
  return (
    <>
      <div className="my-12 max-w-96 text-center">
        
        <div className="mb-6 flex justify-center">
          <Image src={url} width={120} height={120} alt="testimonial" className="rounded-full shadow-lg dark:shadow-black/20 "
          style={{ width: '120px', height: '120px' }} 
          />
          
        </div>
        <h5 className="mb-2 text-lg font-bold">{name}</h5>
        <h6 className="mb-4 font-medium text-primary dark:text-primary-400">
      {role}
        </h6>
        <p className="mb-4">
          {testimonial?.content}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 96 960 960"
            className="inline-block w-6"
          >
            <path
              fill="currentColor"
              d="M580 556h160V396H580v160Zm-360 0h160V396H220v160Zm406 220 80-160H520V336h280v288l-76 152h-98Zm-360 0 80-160H160V336h280v288l-76 152h-98Zm34-300Zm360 0Z"
            />
          </svg>
        </p>
      </div>
    </>
  );
}

export default TestimonialItem;
