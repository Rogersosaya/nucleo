'use client'

import { Select as SelectNextUI, SelectItem } from "@nextui-org/react";
import { useSearchParams } from "next/navigation";

interface PropsOptions {
    label: string;
    value: string;
}

interface Props{
    title: string;
    options: PropsOptions[];
    handle?: Function
}

function Select({title, options, handle}: Props) {
  const searchParams = useSearchParams();
//   const handleA= (e) => {
// console.log(e)
//   }
const defaultArea = searchParams.get('area')?.toString()
const defaultSelectedKeys = defaultArea ? [defaultArea] : undefined;
console.log(defaultArea);
  return (
    <SelectNextUI 
        label={title} 
        className="md:max-w-xs" 
        variant = "bordered"
        defaultSelectedKeys={defaultSelectedKeys}
        onChange={(e)=> {
          if (handle) {
            handle(e.target.value);
          }
        }}
      >
        {options.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            
            {option.label}
          </SelectItem>
        ))}
      </SelectNextUI>
  )
}

export default Select
