import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";

function CV() {
  return (
    <section className="cv relative overflow-hidden	text-bg-secondary flex justify-center flex-col text-center border-t-2 border-b-2 border-cyan-500">
      <Image
        className="fixed h-auto w-[400px] -z-10 left-1/2 -translate-x-1/2 bottom-0"
        alt="imagen"
        src="/1693055262657.png"
        width={600}
        height={400}
      />
      <h2
        style={{ textShadow: "2px 2px 2px black" }}
        className="text-bg-secondary"
      >
        ¿Tiene algun proyecto en mente?
      </h2>
      <p style={{ textShadow: "2px 2px 2px black" }} className="my-8">
        Me especializo en desarrollo Frontend y desarrollo personalizado con
        WordPress. ¿Cuenteme como puedo ayudar en su empresa o proyecto?
      </p>
      <div className="flex justify-center gap-8">
        <a className="text-center bg-bg-secondary cursor-pointer relative group overflow-hidden border-2 px-8 py-2 border-primary rounded-3xl shadow-[0px_0px_10px_rgba(0,0,0,0.8)]">
          <span className="flex justify-center items-center text-bg-secondary text-sm relative z-10 group-hover:text-primary duration-500">
            CONTACTAME <FaWhatsapp className="ml-2 text-2xl" />
          </span>
          <span className="absolute top-0 left-0 w-full bg-primary duration-500 group-hover:-translate-x-full h-full"></span>
          <span className="absolute top-0 left-0 w-full bg-primary duration-500 group-hover:translate-x-full h-full"></span>

          <span className="absolute top-0 left-0 w-full bg-primary duration-500 delay-300 group-hover:-translate-y-full h-full"></span>
          <span className="absolute delay-300 top-0 left-0 w-full bg-primary duration-500 group-hover:translate-y-full h-full"></span>
        </a>
        <a className="text-center bg-primary cursor-pointer relative group overflow-hidden border-2 px-8 py-2 border-bg-secondary rounded-3xl shadow-[0px_0px_10px_rgba(0,0,0,0.8)]">
          <span className="flex justify-center items-center text-primary text-sm relative z-10 group-hover:text-bg-secondary duration-500">
            CONTACTAME <IoMailOutline className="ml-2 text-2xl" />
          </span>
          <span className="absolute top-0 left-0 w-full bg-bg-secondary duration-500 group-hover:-translate-x-full h-full"></span>
          <span className="absolute top-0 left-0 w-full bg-bg-secondary duration-500 group-hover:translate-x-full h-full"></span>

          <span className="absolute top-0 left-0 w-full bg-bg-secondary duration-500 delay-300 group-hover:-translate-y-full h-full"></span>
          <span className="absolute delay-300 top-0 left-0 w-full bg-bg-secondary duration-500 group-hover:translate-y-full h-full"></span>
        </a>
      </div>
    </section>
  );
}

export default CV;
