import Image from "next/image";
import React from "react";
import ButtonSecondary from "@/components/buttons/ButtonSecondary";

interface Props {
  name: string;
  url: string;
  summary: string;
}
export default function AreasHomeItem({ name, url, summary }: Props) {
  return (
    <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-auto h-full flex flex-col justify-between">
      <div className="">
        <Image
          src={url}
          width={360}
          height={360}
          alt="logo"
          className="h-72 object-cover"
        />

        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white  mt-2">
          {name}
        </h5>

        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {summary}
        </p>
      </div>
      <div className="text-center mb-9">
      <ButtonSecondary>Ver más</ButtonSecondary>
      </div>
    </div>
  );
}
