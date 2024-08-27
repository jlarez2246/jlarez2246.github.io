import Project from "./Project";
import CV from "@/components/CV";
import Experience from "@/components/Experience";

const items = [
  {
    img: "/p18.png",
    title: "Start Agency",
    text: "Landy page que exibe los servicios de una empresa",
    link: "https://jlarez2246.github.io/Agency/",
    technology: [0, 1, 2],
  },
  {
    img: "/p17.png",
    title: "Convertidor de monedas",
    text: "Utiliza apis externas para conoser los precios de las distintas monedas",
    link: "https://jlarez2246.github.io/convertidor-de-monedas/",
    technology: [4, 1],
  },
  {
    img: "/p16.png",
    title: "LR Desing Code",
    text: "Sitio web de una empresa de desarrollo web con distintas secciones para exibir sus planes, sus servicios entre otras informacion relevate sobre la empresa",
    link: "https://jlarez2246.github.io/LR-DesingCode/",
    technology: [4, 1],
  },
  {
    img: "/p14.png",
    title: "technology",
    text: "Landy page",
    link: "https://jlarez2246.github.io/pagina/",
    technology: [0, 1, 2, 3],
  },
  {
    img: "/p13.png",
    title: "Formulario animado",
    text: "",
    link: "https://jlarez2246.github.io/formulario-animado/",
    technology: [0, 1],
  },
  {
    img: "/p12.png",
    title: "Game",
    text: "",
    link: "https://jlarez2246.github.io/Games.com/",
    technology: [0, 1],
  },
  {
    img: "/p11.png",
    title: "Chiken",
    text: "",
    link: "https://jlarez2246.github.io/Chicken/",
    technology: [0, 1, 2],
  },
  {
    img: "/p10.png",
    title: "Decayed",
    text: "",
    link: "https://jlarez2246.github.io/decayed/",
    technology: [0, 1],
  },
  {
    img: "/p9.png",
    title: "ColrClin",
    text: "",
    link: "https://jlarez2246.github.io/ColorCa/",
    technology: [0, 1, 2],
  },
  {
    img: "/p8.png",
    title: "Formulario",
    text: "Formulario de registro para un curso",
    link: "https://jlarez2246.github.io/formulario/",
    technology: [0, 1, 2],
  },
  {
    img: "/p7.png",
    title: "Servicios de refrigeracion",
    text: "",
    link: "https://jlarez2246.github.io/ServiciosDeRefrigeracion/",
    technology: [0, 1, 2],
  },
  {
    img: "/p6.png",
    title: "Calculadora Basica",
    text: "Incluye las funcionalidades basicas de una calculadora",
    link: "https://jlarez2246.github.io/Calculadora-basica/",
    technology: [0, 1, 2],
  },
  {
    img: "/p5.png",
    title: "Distribuidora de alimentos",
    text: "",
    link: "https://jlarez2246.github.io/Distribuidora-de-alimentos/",
    technology: [0, 1, 2],
  },
  {
    img: "/p4.png",
    title: "Emprende con nosotros",
    text: "",
    link: "https://jlarez2246.github.io/Pagina-empresarial-uno/",
    technology: [0, 1, 2],
  },
  {
    img: "/p3.png",
    title: "The Best Company",
    text: "",
    link: "https://jlarez2246.github.io/Pagina-empresarial-dos/",
    technology: [0, 1, 2],
  },
  {
    img: "/p2.png",
    title: "Restaurante Italiano",
    text: "",
    link: "https://jlarez2246.github.io/Restaurante-italiano/",
    technology: [0, 1, 2],
  },
  {
    img: "/p1.png",
    title: "Lugares de Venezuela",
    text: "",
    link: "https://jlarez2246.github.io/Lugares-de-Venezuela/",
    technology: [0, 1, 2],
  },
];

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "Jquery",
  "React js",
  "Next js",
  "Vue",
  "Vuetify",
  "Python",
  "Django",
  "Boostrap",
  "Tailwind css",
  "WorkPress",
  "Wix",
];

function Portfolio() {
  return (
    <div id="portfolio">
      <section className="bg-bg-secondary">
        <h3 className="text-center">Portafolio</h3>
        <h2 className="text-center mt-4 mb-12">
          <span className="text-primary">Proyectos</span> realizados
        </h2>
        <div>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
        </div>

        <div className="grid grid-cols-1 gap-8 container max-w-80% mx-auto sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 lg:gap-8">
          {items.map((item, index) => (
            <article key={index}>
              <Project
                img={item.img}
                title={item.title}
                text={item.text}
                link={item.link}
              />
              <ul className="flex gap-4 flex-wrap mt-4">
                {item.technology.map((i) => (
                  <li key={i} className="text-lg py-1 px-4 border-2 text-primary border-primary rounded-3xl cursor-pointer duration-500 hover:bg-primary hover:text-bg-primary">
                    {skills[i]}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
      <CV />
      <Experience />
    </div>
  );
}

export default Portfolio;
