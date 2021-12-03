import Link from "next/link";
import Image from "next/image";
import Logo from "../public/assets/svg/espacios-seguros-min.svg";

const Header = () => {
  return (
    <header className=" text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href="/">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Image src={Logo} width={40} height={40} className="rounded-full" />
            <span className="ml-3 text-xl">Espacios Seguros</span>
          </a>
        </Link>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
          <Link href="/">
            <a className="mr-5 hover:text-gray-900">Inicio</a>
          </Link>
          <Link href="/mapa">
            <a className="mr-5 hover:text-gray-900">Mapa</a>
          </Link>
          <Link href="/contacto">
            <a className="mr-5 hover:text-gray-900">Contacto</a>
          </Link>
          <Link href="/acerca-de">
            <a className="mr-5 hover:text-gray-900">Acerca del proyecto</a>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
