'use client'

import { Select as SelectNextUI, SelectItem } from "@nextui-org/react";

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
  
//   const handleA= (e) => {
// console.log(e)
//   }
  return (
    <SelectNextUI 
        label={title} 
        className="max-w-xs" 
        
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
