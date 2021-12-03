import redCircle from "/public/red-circle.png";
import greenCircle from "/public/green-circle.png";
import yellowCircle from "/public/yellow-circle.png";

import Image from "next/image";
import Link from "next/link";
const AcercaDe = () => {
  return (
    <div className="container mx-auto p-5">
      <h4 className="text-4xl mb-4">Tipos de acoso</h4>
      <p className="text-xl mb-4">
        Estos son los tipos de acoso, si quieres sugerir alguno en la seccion de{" "}
        <Link href="/contacto">
          <a className="text-indigo-500 underline">contacto</a>
        </Link>{" "}
        lo puedes hacer.
      </p>
      <section className="flex flex-wrap md:justify-start">
        <div className="flex flex-col items-center justify-center border-2 border-black p-4 rounded-md w-full h-40 mb-4 md:w-1/4 md:mr-6 ">
          <p>Chiflidos</p>
          <Image src="/assets/png/mouth.png" width={50} height={50} />
        </div>
        <div className="flex flex-col items-center justify-center border-2 border-black p-4 rounded-md w-full h-40 mb-4 md:w-1/4 md:mr-6">
          <p>Tocamientos</p>
          <Image src="/assets/png/hand.png" width={50} height={50} />
        </div>
        <div className="flex flex-col items-center justify-center border-2 border-black p-4 rounded-md w-full h-40 mb-4 md:w-1/4 md:mr-6 ">
          <p>Miradas lascivas</p>
          <Image src="/assets/png/eyes.png" width={50} height={50} />
        </div>
      </section>

      <section>
        <h4 className="text-4xl mb-4 mt-6">Simbologia de los reportes</h4>
        <section>
          <div className="flex items-center justify-between mb-10">
            <p className="w-3/4 md:text-xl">
              Cuando los 3 tipos de acoso estan en un reporte, este tendra el
              circulo rojo.
            </p>
            <Image src={redCircle} width={60} height={60} className="ml-10" />
          </div>

          <div className="flex items-center justify-between mb-10">
            <p className="w-3/4 md:text-xl">
              Cuando los 2 tipos de acoso estan en un reporte, este tendra el
              circulo amarillo.
            </p>
            <Image
              src={yellowCircle}
              width={60}
              height={60}
              className="ml-10"
            />
          </div>

          <div className="flex items-center justify-between mb-10">
            <p className="w-3/4 md:text-xl">
              Cuando solo 1 tipo de acoso esta en un reporte, este tendra el
              circulo verde.
            </p>
            <Image src={greenCircle} width={60} height={60} className="ml-10" />
          </div>
        </section>
      </section>
    </div>
  );
};

export default AcercaDe;
