import Image from "next/image";
import Logo from "../public/assets/png/espacios-seguros.png";
import Link from "next/link";
const Hero = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <Image src={Logo} width={500} height={500} className="rounded-md" />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Estamos aqui para ayudarte.
            <br className="hidden lg:inline-block" />
            Seas hombre o mujer.
          </h1>
          <p className="mb-8 leading-relaxed">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel hic
            eum deserunt, facere maiores quod beatae, nostrum dicta voluptatibus
            nihil labore voluptatum doloremque, nisi minus rem nobis fugiat.
            Magnam, laborum!
          </p>
          <div className="flex justify-center">
            <Link href="/reporte">
              <a className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Crear un reporte
              </a>
            </Link>
            <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
              Ver mapa
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
