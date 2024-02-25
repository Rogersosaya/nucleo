import React from "react";
import {Button} from '@nextui-org/button';


function ButtonSecondary({ children }: { children: React.ReactNode }) {
  return (
    <Button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br hover:from-purple-600 hover:to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white   focus:outline-none   mx-auto" variant="ghost">
      {<span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 ">
        {children}
      </span>}
    </Button>
  );
}

export default ButtonSecondary;
