import React from "react";
import TestimonialItem from "./TestimonialItem";
import { TestimonialSwiper } from "./TestimonialSwiper";
import Subtitle from "@/components/subtitle/Subtitle";

function Testimonial() {
  return (
    <div>
      <Subtitle
        subtitle="Testimonios"
        description="Esto es lo que dicen algunas personas de nosotros..."
      />

      <TestimonialSwiper />
    </div>
  );
}

export default Testimonial;
