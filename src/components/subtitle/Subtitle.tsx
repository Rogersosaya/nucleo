import React from "react";

interface Props {
  subtitle: string;
  description: string;
}

function Subtitle({ subtitle, description }: Props) {
  return (
    <div className="mb-6 mt-14">
      <h2 className="text-center text-gray-800 text-4xl lg:text-5xl font-bold leading-tight">
        {subtitle}
      </h2>
      <div className="my-4 mx-auto w-12 h-2 border-4 border-indigo-500"></div>
      <div className="text-center text-gray-700 font-light">{description}</div>
    </div>
  );
}

export default Subtitle;
