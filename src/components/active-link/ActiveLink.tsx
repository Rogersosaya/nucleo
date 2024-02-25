"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import style from "./ActiveLink.module.css";
import style2 from "../navbar/navbar.module.css";
interface Props {
  path: string;
  text: string;
}
export function ActiveLink({ path, text }: Props) {
  
  const pathName = usePathname();
  
  return <Link href={ path } className={`my-4 block md:inline-block ${style2.linknav}  mx-6 ${ style.link }  ${ (pathName === path) && style['active-link'] }`}>{
text
}</Link>;
}


