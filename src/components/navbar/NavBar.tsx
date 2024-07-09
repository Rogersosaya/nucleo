"use client";
import { HomeIcon } from "@primer/octicons-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { ActiveLink } from "../active-link/ActiveLink";
import Image from "next/image";
import style from "./navbar.module.css";
import classNames from "classnames";
import { RxHamburgerMenu } from "react-icons/rx";
import { usePathname } from "next/navigation";

// const navItems = [
//   { path: "/", text: "Inicio" },

//   { path: "/projects", text: "Proyectos" },
// ];

export function NavBar() {
  const pathname = usePathname()

  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const [hamburgerMenuIsOpen, setHamburgerMenuIsOpen] = useState(false);
  useEffect(() => {
    const html = document.querySelector("html");
    if (html) html.classList.toggle("overflow-hidden", hamburgerMenuIsOpen);
  }, [hamburgerMenuIsOpen]);

  useEffect(() => {
    const closeHamburgerNavigation = () => setHamburgerMenuIsOpen(false);

    window.addEventListener("orientationchange", closeHamburgerNavigation);
    window.addEventListener("resize", closeHamburgerNavigation);

    return () => {
      window.removeEventListener("orientationchange", closeHamburgerNavigation);
      window.removeEventListener("resize", closeHamburgerNavigation);
    };
  }, [setHamburgerMenuIsOpen]);
  const pages = [
    {
      title: "Inicio",
      route: "/",
    },
    {
      title: "Proyectos",
      route: "/projects",
    },
  ];

  return (
    <header className="fixed top-0 left-0 z-10 w-full border-b border-transparent-white backdrop-blur-[12px]">
      <div className="mx-auto max-w-[120rem] px-8 flex h-[70px] items-center">
        <Image
          src="/images/logo.png"
          width={40}
          height={40}
          alt="logo"
          style={{ width: "40px", height: "40px" }}
        />
        <Link className="flex items-center text-lg font-bold ml-3" href="/">
          Núcleo
        </Link>
        <div
          className={classNames(
            "transition-[visibility] md:visible",
            hamburgerMenuIsOpen ? "visible" : "delay-500 invisible"
          )}
        >
          <nav
            className={classNames(
              "z-50 fixed top-[70px] left-0 h-[calc(100vh-70px)] w-full overflow-auto bg-zinc-200 transition-opacity duration-500 md:relative md:top-0 md:block md:h-auto md:w-auto md:translate-x-0 md:overflow-hidden md:bg-transparent md:opacity-100 md:transition-none",
              hamburgerMenuIsOpen
                ? "translate-x-0 opacity-100"
                : "translate-x-[-100vw] opacity-0"
            )}
          >
            <ul
              className={classNames(
                "z-50 flex h-full flex-col md:flex-row md:items-center [&_li]:ml-6 [&_li]:border-b [&_li]:border-grey-dark md:[&_li]:border-none",
                "ease-in [&_a:hover]:text-grey [&_a]:flex [&_a]:h-[70px] [&_a]:w-full [&_a]:translate-y-8 [&_a]:items-center [&_a]:text-lg [&_a]:transition-[color,transform] [&_a]:duration-300 md:[&_a]:translate-y-0 md:[&_a]:text-sm [&_a]:md:transition-colors ",
                hamburgerMenuIsOpen && "[&_a]:translate-y-0"
              )}
            >
              {pages.map((page) => (
                <li key={page.title}>
                  <Link
                  className={`z-50 font-bold px-7 text-xl  ${pathname == page.route ? "text-purple-600" :""}`}
                    onClick={() => setHamburgerMenuIsOpen(false)}
                    href={page.route}
                  >
                    {page.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <button
          className="absolute right-8 md:hidden"
          onClick={() => setHamburgerMenuIsOpen((open) => !open)}
        >
          <span className="sr-only">Toggle menu</span>
          <RxHamburgerMenu size={30}/>
        </button>
      </div>
    </header>
  );
}
