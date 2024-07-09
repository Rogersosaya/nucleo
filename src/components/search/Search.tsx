"use client";
import React, { useState } from "react";
import { Input } from "@nextui-org/react";
import Select from "../select/Select";
import { getAreas } from "@/actions/areas/areas";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

function Search() {
  const [searchState, setsearchState] = useState("");
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleSearch(termSearch?: string) {
    const params = new URLSearchParams(searchParams);
    if (termSearch) {
      params.set("query", termSearch);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
    console.log(params);
  }
  function handleSelect(termArea: string) {
    const params = new URLSearchParams(searchParams);
    if (termArea) {
      params.set("area", termArea);
    } else {
      params.delete("area");
    }
    replace(`${pathname}?${params.toString()}`);
    console.log(params);
  }
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

  return (
    <div className="flex w-full flex-wrap md:flex-nowrap gap-4 mt-6">
      <div className="w-full">
        <div className="text-base font-bold ml-3 ">
          Buscar Proyecto
        </div>
        <Input
        className="w-full"
          type="email"
          // label="Buscar proyecto..."
          onValueChange={(e) => {
            handleSearch(e);
          }}
          variant="bordered"
          defaultValue={searchParams.get("query")?.toString()}
        />
      </div>
      <div className="w-full lg:w-80">
        <div className="text-base font-bold ml-3 ">
          Seleccionar Área
        </div>

        <Select
          title=""
          options={areas}
          handle={handleSelect}
        />
      </div>
    </div>
  );
}

export default Search;
