import React from "react";
import Image from "next/image";
import ButtonPrimary from "../../../components/buttons/ButtonPrimary";
import { Area } from "@/interfaces/area.interface";
import { Member } from "@/interfaces/member.interface";
import Link from 'next/link';
interface PropsMembers {
  url: string;
}
interface PropsAreas {
  name: string;
}
interface Props {
  id: string
  name: string;
  summary: string;
  description: string;
  url: string;
  areas?: Area[];
  members?: Member[];
  // areas: PropsAreas[];
  // members: PropsMembers[];
}

function CardItem({id, name, summary, description, url, areas, members }: Props) {
  return (
    <div className="shadow-xl relative flex bg-clip-border rounded-xl bg-white text-gray-700 flex-col md:flex-row  mx-2 my-4">
      <div className=" relative m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0 flex items-center justify-center">
        <Image
          src={url}
          width={200}
          height={0}
          alt="area"
          className=" object-cover"
          style={{ height: "230px", width:'auto' }}
        />
      </div>
      <div className=" p-6 relative">
        <div className="mb-4">
          {areas?.map((area) => {
            return (
              <span
                key={area.name}
                className="bg-purple-100 text-purple-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-purple-400 border border-purple-400"
              >
                {area.name}
              </span>
            );
          })}
        </div>

        <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          {name}
          
        </h4>
        <p className="block mb-3 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
          {summary}
        </p>
        <div className="flex items-center -space-x-3 mb-4">
          {members?.slice(0, 3).map((member) => {
            return (
              <Image
                key={member.url}
                src={member.url}
                width={20}
                height={20}
                alt="miembro"
                className="relative inline-block h-9 w-9 !rounded-full  border-2 border-white object-cover object-center hover:z-10"
              />
            );
          })}

          {members && members.length >= 3 && (
            <div className="relative h-9 w-9 !rounded-full border-2 border-white object-cover object-center hover:z-10 bg-slate-500 text-white flex justify-center items-center text-1xl">
              +{members.length - 3}
            </div>
          )}
        </div>
        <div className="">
          <Link className="text-white bg-gradient-to-br from-purple-600 to-blue-500   focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" href={`/projects/${id}`}>Ver más </Link>
          {/* <ButtonPrimary >Ver más</ButtonPrimary> */}
        </div>
      </div>
    </div>
  );
}

export default CardItem;
