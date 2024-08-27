"use client";

// import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { FaWhatsapp, FaTelegram, FaLinkedinIn } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";

const items = [
  {
    icon: <FaWhatsapp />,
    link: "https://wa.me/+4123284090?text=hey%20hablemos",
  },
  {
    icon: <FaTelegram />,
    link: "https://t.me/Jesus_Larez",
  },
  {
    icon: <FaLinkedinIn />,
    link: "https://www.linkedin.com/in/jesus-larez-j40/",
  },
  {
    icon: <IoMailOutline />,
    link: "mailto:jlarez@gmail.com",
  },
];

const Inicio = () => {

  return (
    <header
      id="header"
      className="pt-28 pb-8 min-h-screen flex justify-center items-center header text-center lg:text-left"
    >
      <div className="container max-w-80% mx-auto flex justify-between items-center">
        <div className="mx-auto lg:ml-0 z-10">
          <h2 className="text-primary text-4xl sm:text-7xl">Hola, yo soy</h2>
          <h1 className="text-5xl mt-3 mb-8 sm:text-8xl">Jesus Larez</h1>

          <h3 className="text-primary mb-8 uppercase text-xl">
            Soy<span className="text-black"> Desarrollador web </span>
          </h3>

          <a
            target="_blank"
            href="https://wa.me/+4123284090?text=hey%20hablemos"
            className="w-[250px] text-center inline-block cursor-pointer relative group overflow-hidden border-2 px-8 py-2 border-primary rounded-3xl"
          >
            <span className="flex justify-center items-center text-bg-primary text-sm relative z-10 group-hover:text-primary duration-500">
              CONTACTAME <FaWhatsapp className="ml-2 text-2xl" />
            </span>
            <span className="absolute top-0 left-0 w-full bg-primary duration-500 group-hover:-translate-x-full h-full"></span>
            <span className="absolute top-0 left-0 w-full bg-primary duration-500 group-hover:translate-x-full h-full"></span>

            <span className="absolute top-0 left-0 w-full bg-primary duration-500 delay-300 group-hover:-translate-y-full h-full"></span>
            <span className="absolute delay-300 top-0 left-0 w-full bg-primary duration-500 group-hover:translate-y-full h-full"></span>
          </a>

          <div className="flex gap-2 mt-8 justify-center lg:justify-start">
            {items.map((item, i) => (
              <a
                key={i}
                target="_blank"
                href={item.link}
                className="relative w-10 h-10 rounded-full bg-transparent z-10 border-2 border-primary flex justify-center items-center text-primary text-2xl duration-300 before:absolute before:w-full before:h-full before:transition-all before:duration-300 before:-left-full before:hover:left-0 before:bottom-0 before:hover:bottom-0 before:rounded-full before:bg-primary before:-z-10 overflow-hidden before:hover:duration-500 hover:text-bg-primary"
              >
                <span>{item.icon}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="h-screen absolute top-0 right-[10%] flex items-center">
          <Image
            className="header-img w-[500px] h-auto hidden lg:block"
            width={400}
            height={400}
            src="/retouch_2024060117084271.png"
            alt="je"
            key="jesus"
            priority
          />
        </div>
      </div>
    </header>
  );
};

export default Inicio;
