import React from "react";
import style from "./typewriter.module.css";

interface Props {
  text: string;
}
function TypeWriter({ text }: Props) {
  return (
    <div className={style.container}>
      <div className={style.typewriter}>
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r to-blue-500 from-purple-500">
          {text}
        </h1>
      </div>
    </div>
  );
}

export default TypeWriter;
