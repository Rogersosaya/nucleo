import { Area } from "./area.interface";
import { Project } from "./project.interface";
import { Testimonial } from "./testimonial.interface";

export interface Member{
    id: string;
    name: string;
    career: string;
    role: string;
    url: string;
    areas?: Area[];
    project?: Project[];
    testimonio?: Testimonial;
}

