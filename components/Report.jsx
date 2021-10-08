import useReport from "../hooks/useReport";
import Image from "next/image";

const Report = ({ bullyTypes }) => {
  const { step, setStep, userData, setUserData } = useReport();

  const onChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="p-4">
      <section className="my-9">
        {step === 1 && (
          <>
            <h4 className="text-xl mb-4">Datos personales</h4>

            <input
              onChange={onChange}
              type="text"
              name="name"
              placeholder="Nombre completo"
              className="px-3 py-3 mb-2 placeholder-gray-400 text-gray-600 relative bg-white  rounded text-sm border border-gray-400 outline-none focus:outline-none focus:ring w-full"
            />

            <input
              onChange={onChange}
              type="number"
              name="age"
              placeholder="Edad"
              className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white  rounded text-sm border border-gray-400 outline-none focus:outline-none focus:ring w-full"
            />
          </>
        )}

        {step === 2 && (
          <>
            <h4 className="text-xl mb-4">Tipos de acosos</h4>
            <div className="flex flex-wrap justify-around text-center">
              {bullyTypes.map((item) => (
                <div className="flex flex-col items-center justify-center w-1/4  p-4 border border-black">
                  <input
                    type="checkbox"
                    name={item.type}
                    id={item.type}
                    className="hidden"
                    onChange={onChange}
                  />
                  <label htmlFor={item.type}>
                    <p className="text-xs">{item.type}</p>
                    <Image
                      src={item.image}
                      alt="image"
                      width={35}
                      height={35}
                    />
                  </label>
                </div>
              ))}
            </div>
          </>
        )}

        {step === 3 && (
          <div>
            <h4 className="text-xl mb-4">Localizacion</h4>
            <input
              onChange={onChange}
              type="text"
              name="street"
              placeholder="Calle"
              className="px-3 py-3 mb-2 placeholder-gray-400 text-gray-600 relative bg-white  rounded text-sm border border-gray-400 outline-none focus:outline-none focus:ring w-full"
            />
            <input
              onChange={onChange}
              type="text"
              name="neighborhood"
              placeholder="Colonia"
              className="px-3 py-3 mb-2 placeholder-gray-400 text-gray-600 relative bg-white  rounded text-sm border border-gray-400 outline-none focus:outline-none focus:ring w-full"
            />
            <input
              onChange={onChange}
              type="text"
              name="city"
              placeholder="Ciudad"
              className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white  rounded text-sm border border-gray-400 outline-none focus:outline-none focus:ring w-full"
            />
          </div>
        )}
        {step === 4 && (
          <div>
            <h4 className="text-xl mb-4">Informacion extra</h4>
            <textarea
              onChange={onChange}
              name="information"
              placeholder="Informacion extra"
              className="px-3 py-3 h-24 placeholder-gray-400 text-gray-600 relative bg-white  rounded text-sm border border-gray-400 outline-none focus:outline-none focus:ring w-full"
            ></textarea>
          </div>
        )}

        {step === 5 && (
          <>
            <h4 className="text-xl mb-4">Resumen de datos</h4>
            <div className="border border-black p-4 rounded-xl ">
              <p>Nombre: {userData.name}</p>
              <p>Edad: {userData.age}</p>
              <p>Calle: {userData.street}</p>
              <p>Colonia: {userData.neighborhood}</p>
              <p></p>
            </div>
          </>
        )}
      </section>

      <section className="flex justify-between">
        {step === 5 && (
          <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Enviar reporte
          </button>
        )}
        {step < 5 && (
          <button
            onClick={() => {
              setStep(step + 1);
              console.log(userData);
            }}
            className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Siguiente paso
          </button>
        )}
        {step > 1 && step < 6 && (
          <button
            onClick={() => setStep(step - 1)}
            className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Volver
          </button>
        )}
        {step > 5 && (
          <section className="self-center  justify-self-center">
            Ups! Te perdiste
          </section>
        )}
      </section>
    </div>
  );
};

export default Report;
