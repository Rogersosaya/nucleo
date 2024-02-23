import { Area } from "./area.interface";
import { Member } from "./member.interface";


export interface Project{
    id: string;
    name: string;
    summary: string;
    description: string;
    url: string;
    areas?: Area[];
    members?: Member[];
}