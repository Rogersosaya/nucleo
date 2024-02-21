import React from "react";
import style from "./card-item.module.css";

interface Props {
  title: string,
  description: string,
  url: string,
}




function CardAnimate({title, description, url}: Props) {
  return (
    <div className={`${style.theme} mx-4 my-5 `}>
      <div className={`${style.card} h-full`} style={{ backgroundImage: `url(${url})` }}>
        <div className={`${style["card-content"]} font-bold text-2xl h-full`}>
          <h2 className={`${style["card-title"]} `}>
            {title}
          </h2>
          <p className={`${style["card-body"]} text-lg mt-2`}>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CardAnimate;
