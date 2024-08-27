"use client";

import React, { useState } from "react";
import { GrMenu, GrClose } from "react-icons/gr";
import { Link } from "react-scroll"
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
});

const links = [
  {
    name: "Inicio",
    link: "header",
    id: 1,
  },
  {
    name: "Sobre Mi",
    link: "about",
    id: 2,
  },
  {
    name: "Servicios",
    link: "service",
    id: 3,
  },
  {
    name: "Portafolio",
    link: "portfolio",
    id: 4,
  },
  {
    name: "Contactos",
    link: "contact",
    id: 5,
  },
];

function Navbar() {
  const [menu, setMenu] = useState(true);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <nav className="fixed top-0 left-0 w-full mx-auto shadow-md z-20 bg-bg-primary">
      <div className="max-w-80% mx-auto flex justify-between items-center min-h-20">
        <div className={poppins.className}><div className="w-12 h-12 flex justify-center items-center text-3xl bg-bg-primary rounded-full text-primary border-4 border-primary font-medium cursor-pointer">JL</div></div>

        <ul
          className={
            "absolute top-0 left-0 w-72 h-screen bg-bg-primary shadow-lg py-4 duration-300 md:flex md:relative md:w-fit md:h-fit md:translate-x-0 md:shadow-none" +
            (menu ? " -translate-x-full" : " ")
          }
        >
          {links.map((item) => (
            <li key={item.id}>
              <Link
                activeClass="active"
                to={item.link}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="block bg-bg-secondary m-2 text-center p-2 hover:text-primary hover:bg-gray-200 md:bg-transparent md:hover:bg-transparent"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-3xl">
            {menu ? <GrMenu /> : <GrClose />}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
