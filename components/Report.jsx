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
            <div className="mb-3 pt-0">
              <input
                onChange={onChange}
                type="text"
                name="name"
                placeholder="Nombre completo"
                className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white  rounded text-sm border border-gray-400 outline-none focus:outline-none focus:ring w-full"
              />
            </div>
            <div className="mb-3 pt-0">
              <input
                onChange={onChange}
                type="number"
                name="edad"
                placeholder="Edad"
                className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white  rounded text-sm border border-gray-400 outline-none focus:outline-none focus:ring w-full"
              />
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <h4 className="text-xl mb-4">Tipos de acosos</h4>
            <div className="flex flex-wrap justify-around text-center">
              {bullyTypes.map((item) => (
                <div className="flex flex-col items-center justify-center w-1/4  p-4 border border-black ">
                  <p className="text-xs">{item.type}</p>
                  <Image src={item.image} alt="image" width={35} height={35} />
                </div>
              ))}
            </div>
          </>
        )}
      </section>

      <section className="flex justify-between">
        <button
          onClick={() => {
            setStep(step + 1);
            console.log(userData);
          }}
          className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        >
          Siguiente paso
        </button>
        {step > 1 && (
          <button
            onClick={() => setStep(step - 1)}
            className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Volver
          </button>
        )}
      </section>
    </div>
  );
};

export default Report;
