import Image from "next/image";
import Logo from "../public/assets/png/espacios-seguros.png";
import Link from "next/link";
const Hero = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6  md:mb-0">
          <Image src={Logo} width={500} height={500} className="rounded-md" />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <p className="font-bold text-2xl text-black my-4 md:text-4xl">
            Estamos aqui para ayudarte.
          </p>
          <p className="mb-8 leading-relaxed">
            Aqui podras realizar reportes de acosos y proximamente
            robos/asaltos. Los reportes saldran en un mapa de reportes, tambien
            podras ver el detalle de cada reporte, en proximas versiones
            agregaremos opciones para asaltos y robos para que de esta manera
            tener reportes mas completos, todo esto con el fin de ayudar a la
            comunidad.
          </p>
          <div className="flex justify-center">
            <Link href="/reporte">
              <a className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg md:text-sm lg:text-lg">
                Crear un reporte
              </a>
            </Link>
            <Link href="/mapa">
              <a className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded md:text-sm lg:text-lg">
                Ver mapa
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
