import React from "react";
import Image from "next/image";

const BullyTypes = () => {
  return (
    <main className="">
      <section className="w-3/4 mx-auto">
        <h3 className="text-2xl font-semibold">Simbologia de Reportes</h3>
      </section>
      <section className="text-left mt-4 w-3/4 mx-auto">
        <div className="">
          <div className="flex items-center">
            <Image src="/yellow-circle.png" width={35} height={35} />
            <p className="text-xl font-light ml-4">Marcador amarillo</p>
          </div>
          <p className="mt-2">
            El marcador verde se refiere a que solo hubo{" "}
            <span className="font-bold">1 tipo</span> de hostigamiento/acoso
          </p>
        </div>

        <div className="my-10">
          <div className="flex items-center">
            <Image src="/orange-circle.png" width={35} height={35} />
            <p className="text-xl font-light ml-4">Marcador naranja</p>
          </div>
          <p className="mt-2">
            El marcador verde se refiere a que hubo{" "}
            <span className="font-bold">2 tipos</span> de hostigamiento/acoso
          </p>
        </div>

        <div className="">
          <div className="flex items-center">
            <Image src="/red-circle.png" width={35} height={35} />
            <p className="text-xl font-light ml-4">Marcador rojo</p>
          </div>
          <p className="mt-2">
            El marcador verde se refiere a que hubo{" "}
            <span className="font-bold">3 tipos</span> de hostigamiento/acoso
          </p>
        </div>
      </section>
    </main>
  );
};

export default BullyTypes;
