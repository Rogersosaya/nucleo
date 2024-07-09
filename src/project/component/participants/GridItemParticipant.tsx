import React from "react";
import { Member } from "@prisma/client";
import Image from "next/image";
interface Props{
    member: Member;
}
function GridItemParticipant({member}: Props) {
    console.log(member)
  return (
    <div className="mb-7 mx-9 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 pt-3">
      
      <div className="flex flex-col items-center pb-10 px-2 shadow-xl">
        <Image src={member.url} width={100} height={100} alt="imagen" />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white mt-4">
          {member.name}
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {member.role}
        </span>
        <div className="flex mt-4 md:mt-6">
          <a
            href="#"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Facebook
          </a>
          <a
            href="#"
            className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Linkedin
          </a>
        </div>
      </div>
    </div>
  );
}

export default GridItemParticipant;
