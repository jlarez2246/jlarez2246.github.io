import About from "@/components/About";
import Contact from "@/components/Contact";
import Copy from "@/components/Copy";
import Inicio from "@/components/Inicio";
import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Inicio />
      <About />
      <Portfolio />
      <Contact />
      <Copy />
    </main>
  );
}
