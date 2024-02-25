import React from "react";
import GridItemParticipant from "./GridItemParticipant";
import { Member } from "@/interfaces/member.interface";

interface Props {
  members?: Member[];
}

function GridParticipant({ members }: Props) {
  return (
    <>
      <div className="max-w-3xl mx-auto text-center mt-16">
        <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-2 border-t-4 border-b-4 border-purple-600 py-4">
          Participantes
        </h1>
        <p className="text-lg text-gray-800 mb-16">
          Para realizar este proyecto contamos con la ayuda de...
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 mb-11 justify-center">
        {members?.map((member) => {
          return <GridItemParticipant member={member} key={member.id} />;
        })}
      </div>
    </>
  );
}

export default GridParticipant;
