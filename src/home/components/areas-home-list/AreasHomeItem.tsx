import Image from "next/image";
import React from "react";
import ButtonSecondary from "@/components/buttons/ButtonSecondary";

interface Props {
  name: string;
  url:string;
  summary: string;
}
export default function AreasHomeItem({ name, url, summary }: Props) {
  return (
    <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-auto">
      <Image src={url} width={360} height={360} alt="logo" />

      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h5>

        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {summary}
        </p>

        <div className="text-center">
        <ButtonSecondary>Ver más</ButtonSecondary>
        </div>
      </div>
    </div>
  );
}
