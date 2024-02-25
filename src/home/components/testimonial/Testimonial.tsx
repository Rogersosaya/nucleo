import React from "react";
import TestimonialItem from "./TestimonialItem";
import { TestimonialSwiper } from "./TestimonialSwiper";
import Subtitle from "@/components/subtitle/Subtitle";
import { getMembersWithTestimonial } from "@/actions/projects/membersWithTestimonial";

async function Testimonial() {
  const testimonials = await getMembersWithTestimonial();
  return (
    <div>
      <Subtitle
        subtitle="Testimonios"
        description="Esto es lo que dicen algunas personas de nosotros..."
      />

      <TestimonialSwiper testimonials={testimonials}/>
    </div>
  );
}

export default Testimonial;
