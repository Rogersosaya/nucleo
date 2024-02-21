import { HomeIcon } from "@primer/octicons-react";
import Link from "next/link";
import React from "react";
import { ActiveLink } from "../active-link/ActiveLink";
import Image from 'next/image';


const navItems = [
  { path:'/', text: 'Inicio' },
  
  { path:'/projects', text: 'Proyectos' },
]

export function NavBar() {
  return (
    <nav className="flex  p-2  m-2   rounded mt-6 bg-gray-200 items-center ">
      <Link href={'/'} className='flex items-center mr-52'>
        <Image src="/images/logo.png" width={40} height={40} alt="logo" style={{ width: '40px', height: '40px' }} />
      
      <span className="ml-2 text-xl font-bold">Centro Cultural Núcleo</span>
      </Link>
      
      <div >
      {
        navItems.map(navItem => (
          <ActiveLink key={navItem.path} {...navItem}/>
        ))
      }
      </div>
      
    </nav>
  );
}


