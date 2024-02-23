import { Member } from "./member.interface";
import { Objective } from "./objective.interface";
import { SubArea } from "./subarea.interface";
import { Task } from "./task.interface";
import { Project } from "./project.interface";

export interface Area {
  id: string;
  name: string;
  summary: string;
  url: string;
  subareas?: SubArea[];
  objectives?: Objective[];
  tasks?: Task[];
  members?: Member[];
  projects?: Project[];
}
