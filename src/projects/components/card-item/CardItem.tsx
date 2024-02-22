import React from "react";
import Image from "next/image";
interface PropsMembers {
  url: string;
}
interface PropsAreas {
  name: string;
}
interface Props {
  name: string;
  summary: string;
  description: string;
  url: string;
  // areas: PropsAreas[];
  // members: PropsMembers[];
}

function CardItem({ name,summary, description,url}: Props) {
  return (
    <div className="relative flex bg-clip-border rounded-xl bg-white text-gray-700 shadow-md  flex-row mx-2 my-4">
      <div className="relative m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0">
        <Image
          src="/images/about2.jpg"
          width={200}
          height={100}
          alt="area"
          className="h-full object-cover"
        />
      </div>
      <div className="p-6">
        {/* <div className="mb-4">
          {areas.map((area) => {
            return (
              <div key={area.name} className="inline-block  font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-gray-700 uppercase mr-4">
                {area.name}
              </div>
            );
          })}
        </div> */}

        <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          {name}
        </h4>
        <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
        {summary}
        </p>
        {/* <div className="flex items-center -space-x-3">
          {
            members.slice(0,3).map((member) =>{
              return <Image key={member.url}
              src={member.url}
              width={20}
              height={20}
              alt="miembro"
              className="relative inline-block h-9 w-9 !rounded-full  border-2 border-white object-cover object-center hover:z-10"
            />
            })
          }
          
          
          {
            members.length >=3 && <div className="relative h-9 w-9 !rounded-full  border-2 border-white object-cover object-center hover:z-10 bg-slate-500 text-white flex justify-center items-center text-1xl">
            +{members.length - 3}
          </div>
          }
          
        </div> */}
        <a href="#" className="inline-block">
          <button
            className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
            type="button"
          >
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              ></path>
            </svg>
          </button>
        </a>
      </div>
    </div>
  );
}

export default CardItem;
