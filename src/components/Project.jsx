import { Open_Sans } from "next/font/google";
// import "@/app/globals.css"

import Image from "next/image";
import { IoOpenOutline } from "react-icons/io5";

const open_sans = Open_Sans({
  weight: ["400"],
  subsets: ["latin"],
});

function Project({ img, title, text, link }) {
  return (
    <div className="portfolio__card">
      <a href={link} target="_blank" className="portfolio__card--content relative block cursor-pointer rounded-2xl">
        <div className="portfolio__card--img relative rounded-2xl">
          <Image
            alt="image de proyecto"
            className="w-full rounded-2xl"
            src={img}
            width={300}
            height={300}
          />
          <IoOpenOutline className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-12 w-12 duration-300 group-hover:opacity-0 text-bg-primary bg-[#8988885c] backdrop-blur-[6px] p-2 rounded-full border-2 border-bg-primary" />
        </div>
        <div className="portfolio__card--info--content absolute w-full h-full top-0 left-0 rounded-2xl">
          <div className="portfolio__card--info absolute w-full h-full top-0 left-0">
          <h4 className="text-3xl font-medium underline decoration-solid">Visitar</h4>
          </div>
          <div className="circle circle1"></div>
          <div className="circle circle2"></div>
          <div className="circle circle3"></div>
        </div>
      </a>
    </div>
  );
}

export default Project;
