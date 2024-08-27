import { FaLocationArrow, FaWhatsapp } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";

const items = [
  {
    icon: <FaLocationArrow />,
    title: "Mí localidad",
    value: "Mariguitar, Estado Sucre, Venezuela",
    link: '',
  },
  {
    icon: <IoMailOutline />,
    title: "Correo electrónico",
    value: "jlarez2246@gmail.com",
    link: 'mailto:jlarez@gmail.com'
  },
  {
    icon: <FaWhatsapp />,
    title: "Número de WhatsApp",
    value: "+58-412-3284090",
    link: 'https://wa.me/+4123284090?text=hey%20hablemos'
  },
];

function Contact() {
  return (
    <section id="contact" className="bg-bg-secondary min-h-screen flex justify-center items-center flex-col">
      <h3 className="text-center">Contáctame</h3>
      <h2 className="text-center mt-4 mb-12">
        Póngase en contacto conmigo
      </h2>

      <div>
        <div className="container max-w-80% mx-auto md:grid md:grid-cols-2 lg:flex lg:justify-between">
          <div>
            {items.map((item, index) => (
              <a key={index} target="_blank" href={item.link} className="flex gap-6 mb-4 items-center rounded-lg hover:bg-primary group">
                <div>
                  <span className="h-10 w-10 text-2xl text-primary border-2 border-primary rounded-full flex justify-center items-center bg-bg-primary">
                    {item.icon}
                  </span>
                </div>
                <div>
                  <h4 className="text-xl text-black group-hover:text-bg-primary">{item.title}</h4>
                  <p className="group-hover:text-bg-primary text-base">{item.value}</p>
                </div>
              </a>
            ))}
          </div>
          <form action="mailto:jlarez@gmail.com" className="mt-16 lg:w-[60%] md:mt-0 lg:flex lg:justify-between lg:flex-wrap ">
            <input type="text" placeholder="Nombre" className="lg:w-[48%]" />
            <input type="email" placeholder="Email" className="lg:w-[48%]" />
            <input type="text" placeholder="Numero" />
            <textarea name="" id="" placeholder="Mensage" rows={4}></textarea>
            <input type="submit" value="enviar" className="text-lg bg-bg-primary py-1 px-4 border-2 text-primary border-primary rounded-3xl cursor-pointer duration-500 hover:bg-primary hover:text-bg-primary" />
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
