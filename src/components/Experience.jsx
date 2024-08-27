"use client";
import { useState } from "react";
import ExperienceCard from "./ExperienceCard";

function Experience() {
  const [open, setOpen] = useState(false);

  const toggle = (i) => {
    if (open === i) {
      return setOpen(null);
    }

    setOpen(i);
  };

  const items = [
    {
      id: 1,
      title: "Experiencia Laboral.",
      text: (
        <div className="p-4 h-auto duration-500 bg-bg-secondary ">
          <div>
            Actualmente me encuentro trabajando como desarrollador web
            freelancer
            <h3 className="text-black text-2xl ml-4">
              Algunos de los proyectos en los que he participado
            </h3>
            <ul>
              <li className="ml-8 mt-4">
                <a target="_blank" href="https://mangelyauthor.com/">
                  https://mangelyauthor.com/
                </a>
              </li>
              <li className="ml-8 mt-4">
                <a target="_blank" href="https://scarvajaleconomia.com/">
                  https://scarvajaleconomia.com/
                </a>
              </li>
              <li className="ml-8 mt-4">
                <a target="_blank" href="https://coldmetalsas.com/">
                  https://coldmetalsas.com/
                </a>
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      title: "Educación Universitaria.",
      text: (
        <div className="p-4 h-auto duration-500 bg-bg-secondary ">
          <p>
            Actualmente curso la carrera de Licenciatura en Informática en la
            UDO.
            <br /> Universidad de Oriente, Nucleo Sucre.
          </p>
        </div>
      ),
    },
    {
      id: 3,
      title: "Educación secundaria.",
      text: (
        <div className="p-4 h-auto duration-500 bg-bg-secondary ">
          <p>
            UETD: Unidad Educativa Talento Deportivo. Francisco &quot;Morochito&quot;
            Rodríguez
          </p>
        </div>
      ),
    },
  ];

  return (
    <section>
      <h3 className="text-center">Experiencia</h3>
      <h2 className="text-center mt-4 mb-12">
        <span className="text-primary">Experiencia profesional</span> y
        educacion
      </h2>

      <div className="container max-w-[900px] mx-auto">
        {items.map((item, i) => {
          return (
            <ExperienceCard
              key={i}
              open={i === open}
              title={item.title}
              text={item.text}
              toggle={() => toggle(i)}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Experience;
