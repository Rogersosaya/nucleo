
import React from "react";
import { Input } from "@nextui-org/react";
import Select from '../select/Select';


const areas = [
  {
    label: "Investigación",
    value: "Investigación",
    
  },
  {
    label: "Project Management Office",
    value: "Project Management Office",
   
  },
  {
    label: "Marketing",
    value: "Marketing",
    
  },
  {
    label: "Relaciones públicas",
    value: "Relaciones públicas",
    
  },
  { label: "Tiger", value: "tiger", },
  {
    label: "Industrial",
    value: "Industrial",
  },
  {
    label: "Sistemas",
    value: "Sistemas",
  },
  {
    label: "Gestión de Talento Humano",
    value: "Gestión de Talento Humano",
  },
];

function Search() {
  return (
    <div className="flex w-full flex-wrap md:flex-nowrap gap-4 ">
      <Input
        type="email"
        label="Buscar proyecto..."
        
        variant="bordered"
      />
      
      <Select title="Seleccionar Área" options={areas} />
    </div>
  );
}

export default Search;
