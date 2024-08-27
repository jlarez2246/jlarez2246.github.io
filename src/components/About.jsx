import React from "react";
import { FaWhatsapp } from "react-icons/fa6";

const items = [
  {
    key: "Email",
    value: "jlarez2246@gmail.com",
    link: "mailto:jlarez@gmail.com",
  },
  {
    key: "Telegram",
    value: "0412-3284090",
    link: "https://t.me/Jesus_Larez",
  },
  {
    key: "WhatsApp",
    value: "+58-412-3284090",
    link: "https://wa.me/+4123284090?text=hey%20hablemos",
  },
  {
    key: "Localidad",
    value: "Venezuela, edo. Sucre",
    link: "",
  },
  {
    key: "GitHub",
    value: "jlarez2246",
    link: "https://github.com/jlarez2246",
  },
  {
    key: "Linkedin",
    value: "jesus-larez-j40",
    link: "https://www.linkedin.com/in/jesus-larez-j40/",
  },
];

const skills = [
  "Boostrap",
  "CSS",
  "Django",
  "Git",
  "HTML",
  "JavaScript",
  "JQuery",
  "Next js",
  "Python",
  "React js",
  "Tailwind css",
  "Vue",
  "Vuetify",
  "Wix",
  "WorkPress",
];

function About() {
  return (
    <section id="about">
      <article className="container max-w-80% mx-auto">
        <h3 className="text-center">Sobre mi</h3>
        <h2 className="text-center mt-4 mb-12">
          <span className="text-primary">Datos</span> personales
        </h2>

        <div className="lg:flex lg:justify-between lg:items-center lg:gap-8">
          <div className="lg:w-1/2 ">
            <h3 className="">
              Soy <span className="text-primary">Jesus Larez</span>,
              desarrollador web
            </h3>
            <p className="my-6">
              Me gusta innovar, incursionar en nuevas tecnologias y aprender cosas
              que contribuyan a mi crecimiento personal y profesional
            </p>

            <ul className="sm:grid sm:grid-cols-2">
              {items.map((item, i) => (
                <li key={i} className="mb-1">
                  <a target="_blank" href={item.link}>
                    <span className=" text-black">{item.key}</span>:{" "}
                    {item.value}
                  </a>
                </li>
              ))}
            </ul>

            <a
              target="_blank"
              href="https://wa.me/+4123284090?text=hey%20hablemos"
              className="w-[250px] text-center inline-block cursor-pointer relative group overflow-hidden border-2 px-8 py-2 border-primary rounded-3xl mt-6"
            >
              <span target="_blank" className="flex justify-center items-center text-bg-primary text-lg relative z-10 group-hover:text-primary duration-500">
                Contactame <FaWhatsapp className="ml-2 text-2xl" />
              </span>
              <span className="absolute top-0 left-0 w-full bg-primary duration-500 group-hover:-translate-x-full h-full"></span>
              <span className="absolute top-0 left-0 w-full bg-primary duration-500 group-hover:translate-x-full h-full"></span>

              <span className="absolute top-0 left-0 w-full bg-primary duration-500 delay-300 group-hover:-translate-y-full h-full"></span>
              <span className="absolute delay-300 top-0 left-0 w-full bg-primary duration-500 group-hover:translate-y-full h-full"></span>
            </a>
          </div>

          <div className="lg:w-1/2 lg:max-w-[450px]">
            <h2 className="lg:hidden text-2xl text-black mt-12 mb-8">
              Habilidades
            </h2>
            <ul className="flex gap-4 flex-wrap">
              {skills.map((skill, i) => (
                <li key={i} className="text-lg py-1 px-4 border-2 text-primary border-primary rounded-3xl cursor-pointer duration-500 hover:bg-primary hover:text-bg-primary">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </article>
    </section>
  );
}

export default About;
