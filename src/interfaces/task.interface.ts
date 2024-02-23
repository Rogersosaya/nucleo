import { Area } from "./area.interface";

export interface Task {
    id: string;
    description: string;
    area: Area;
}