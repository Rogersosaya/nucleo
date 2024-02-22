import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import CollaborationItem from "./CollaborationItem";
import Subtitle from '../../../components/subtitle/Subtitle';
const urlCollaborations = [
  "/images/marquee1.png",
  "/images/marquee2.png",
  "/images/marquee3.png",
  "/images/marquee4.jpg",
  "/images/marquee5.jpg",
];
function Collaboration() {
  return (
    <div className="mb-12">
      <Subtitle subtitle='Confían en nosotros' description='Uniendo fuerzas para crear impacto cultural....' />
      
      <Marquee>
        {
            urlCollaborations.map((urlCollaboration) => {
                return (<CollaborationItem key={urlCollaboration} urlCollaboration={urlCollaboration} />)
            })
        }
        
      </Marquee>
    </div>
  );
}

export default Collaboration;
