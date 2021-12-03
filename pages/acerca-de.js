// import redCircle from "/green-circle.png";

import Image from "next/image";
import Link from "next/link";
const AcercaDe = () => {
  return (
    <div className="container mx-auto p-5">
      <h4 className="text-5xl mb-4">Tipos de acoso</h4>
      <p className="text-xl mb-4">
        Estos son los tipos de acoso, si quieres sugerir alguno en la seccion de
        <Link href="/contacto">
          <a> contacto</a>
        </Link>{" "}
        lo puedes hacer.
      </p>
      <section className="flex">
        <div className="flex flex-col items-center border-2 border-black p-4 rounded-md w-44">
          <p>Tocamientos</p>
          <Image src="/assets/png/hand.png" width={50} height={50} />
        </div>
        <div className="flex flex-col items-center border-2 border-black p-4 rounded-md w-44 mx-8">
          <p>Tocamientos</p>
          <Image src="/assets/png/eyes.png" width={50} height={50} />
        </div>
        <div className="flex flex-col items-center  border-2 border-black p-4 rounded-md w-44">
          <p>Chiflidos</p>
          <Image src="/assets/png/mouth.png" width={50} height={50} />
        </div>
      </section>

      <section>
        <h4 className="text-5xl mb-4 mt-6">Simbologia de los reportes</h4>
      </section>
    </div>
  );
};

export default AcercaDe;
