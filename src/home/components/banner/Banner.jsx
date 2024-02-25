import ButtonPrimary from "@/components/buttons/ButtonPrimary";
import { LottieBanner } from "./lottie";
import TypeWriter from "../typewriter/TypeWriter";
import Image from "next/image";
import Link from "next/link";

export function Banner() {
  return (
    <div className=" grid grid-cols-12 relative">


      

      <div className="col-span-12  md:col-span-5 p-6 flex flex-col justify-center ">
        <h1 className="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-blue-500 from-purple-500">
            <TypeWriter text="Dejamos huella" />
          </span>
          en tu desarrollo profesional.
        </h1>

        <p className="text-2xl font-semibold my-4">
          El Centro Cultural Núcleo es uno de los centros emblemáticos de la
          FIIS UNI con más de 30 años
        </p>

        <div>
        <Link target="_black" className="text-white bg-gradient-to-br from-purple-600 to-blue-500   focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 cursor-pointer z-30" href={`https://chat.whatsapp.com/DUfmlvbPX3dAypj3XpKS3X`}>Quiero ser parte </Link>
          
        </div>
      </div>
      <div className="col-span-12  md:col-span-7">
        <LottieBanner />
      </div>
    </div>
  );
}
