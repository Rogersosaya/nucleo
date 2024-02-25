import React from 'react'
import Image from 'next/image';
// import { Project } from '../../../interfaces/project.interface';
import { Area } from '@/interfaces/area.interface';
import { Member } from '@/interfaces/member.interface';
import 'animate.css';



export interface Project{
    id?: string;
    name?: string;
    summary?: string;
    description?: string;
    url?: string;
    areas?: Area[];
    members?: Member[];
}
interface Props {
    project?: Project;
}
function Information({ project }: Props) {

  return (
    <div className="2xl:container 2xl:mx-auto lg:py-12 lg:px-20 md:py-9 md:px-6 py-4 px-4">
            <div className="flex flex-col lg:flex-row justify-between gap-8">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">¿De que trata?</h1>
                    <p className="font-normal text-xl leading-6 text-gray-600 ">{project?.description}</p>
                </div>
                <div className="w-full lg:w-8/12 animate__animated animate__backInRight">
                {project?.url && <Image src={project.url} width={800} height={800} alt='imagen'/>}

                </div>
            </div>

            
        </div>
  )
}

export default Information
