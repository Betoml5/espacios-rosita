import useReport from "../hooks/useReport";
import Image from "next/image";
import useLocation from "../hooks/useLocation";
import { bullyTypes } from "../mocks/reports";
import { useRouter } from "next/dist/client/router";
import { useRef, useState } from "react";
import { MapContainer, Popup, Marker, TileLayer } from "react-leaflet";
import DraggableMarker from "../components/DraggableMarker";
import "leaflet/dist/leaflet.css";

const Report = () => {
  const tokenMapbox = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;
  const urlMap = `https://api.mapbox.com/styles/v1/betoml5/ckudbz0wj1f3s17qtv0w0cqe8/tiles/256/{z}/{x}/{y}@2x?access_token=${tokenMapbox}`;
  const router = useRouter();
  const {
    step,
    setStep,
    userData,
    setUserData,
    error,
    isLoading,
    sendReport,
    nextStep,
  } = useReport();
  const { getLocationByAddress } = useLocation();
  const [locations, setLocations] = useState([]);

  const onChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    });
    // console.log(userData);
  };
  const form = useRef(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const address = `${userData.street} ${userData.neighborhood} ${userData.city}`;
      const location = await getLocationByAddress(address);
      const report = {
        name: userData.name,
        age: userData.age,
        street: userData.street,
        neighborhood: userData.neighborhood,
        city: userData.city,
        lat: parseFloat(location[0].lat).toFixed(2),
        lng: parseFloat(location[0].lon).toFixed(2),
        information: userData.information,
        gender: userData.gender,
        bullyTypes: [
          {
            description: "Tocamientos",
            value: userData["Tocamientos"],
          },
          {
            description: "Miradas Lacivas",
            value: userData["Miradas Lacivas"],
          },
          {
            description: "Chiflidos",
            value: userData["Chiflidos"],
          },
        ],
      };
      console.log(report);
      console.log(location);

      await sendReport(report);
      setStep(0);
      setUserData({});
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-4 mx-auto max-w-lg">
      <form className="my-9" ref={form} onSubmit={handleSubmit}>
        {step == 0 && (
          <section className="border border-black p-4">
            <p className="italic">
              Los datos que estas a punto de ingresar tiene el propósito de
              crear espacios más seguros para toda la comunidad. Los datos
              personales son confideniciales, lo único que será público seran
              los tipos de acoso u hostigamiento como también el lugar del
              suceso.
            </p>
          </section>
        )}
        {step === 1 && (
          <section>
            <h4 className="text-xl mb-4">Datos personales</h4>
            <input
              value={userData.name}
              onChange={onChange}
              type="text"
              name="name"
              placeholder="Nombre completo"
              className="px-3 py-3 mb-2 placeholder-gray-400 text-gray-600 relative bg-white  rounded text-sm border border-gray-400 outline-none focus:outline-none focus:ring w-full"
            />

            <input
              value={userData.age}
              onChange={onChange}
              type="number"
              name="age"
              placeholder="Edad"
              className="px-3 py-3 mb-4 placeholder-gray-400 text-gray-600 relative bg-white  rounded text-sm border border-gray-400 outline-none focus:outline-none focus:ring w-full"
            />
            <section className="flex justify-between">
              <div
                onClick={() => {
                  setUserData({
                    ...userData,
                    gender: "Hombre",
                  });
                }}
                className={`flex cursor-pointer  items-center justify-center text-center border border-black p-4 w-1/4 rounded-xl ${
                  userData.gender == "Hombre" && "border-green-500"
                }`}
              >
                <Image src="/assets/png/man.png" width={70} height={70} />
              </div>
              <div
                onClick={() => {
                  setUserData({
                    ...userData,
                    gender: "Mujer",
                  });
                }}
                className={`flex cursor-pointer items-center justify-center text-center border border-black p-4 w-1/4 rounded-xl ${
                  userData.gender == "Mujer" && "border-green-500"
                }`}
              >
                <Image src="/assets/png/women.png" width={70} height={70} />
              </div>
              <div
                onClick={() => {
                  setUserData({
                    ...userData,
                    gender: "No especificado",
                  });
                }}
                className={`flex cursor-pointer items-center justify-center text-center border border-black p-4 w-1/4 rounded-xl ${
                  userData.gender == "No especificado" && "border-green-500"
                }`}
              >
                <p className="text-xs">Prefiero no especificar</p>
              </div>
            </section>
            {error && (
              <p className="text-red-500 my-4">Verifica los datos ingresados</p>
            )}
          </section>
        )}

        {step === 2 && (
          <>
            <h4 className="text-xl mb-4">Tipos de acosos</h4>
            <div className="flex flex-wrap justify-between text-center">
              {bullyTypes.bully_types.map((item) => (
                <label
                  htmlFor={item.type}
                  key={item.type}
                  className={`flex flex-col items-center justify-center w-1/4  p-4 border border-black rounded-lg cursor-pointer ${
                    userData[item.type] && "border-2 border-green-500 "
                  }`}
                >
                  <input
                    type="checkbox"
                    className="hidden"
                    name={item.type}
                    id={item.type}
                    onClick={onChange}
                  />

                  <p className="text-xs">{item.type}</p>
                  <Image src={item.image} alt="image" width={30} height={30} />
                </label>
              ))}
              {error && (
                <p className="mt-4 text-red-500">Selecciona al menos 1</p>
              )}
            </div>
          </>
        )}

        {step === 3 && (
          <div>
            <h4 className="text-xl mb-4">Localización</h4>
            <input
              value={userData.address}
              disabled="true"
              type="text"
              name="address"
              placeholder="Dirección"
              className="px-3 py-3 mb-2 placeholder-gray-400 text-gray-600 relative bg-white  rounded text-sm border border-gray-400 outline-none focus:outline-none focus:ring w-full"
            />
            {locations.length > 0 && (
              <select name="address" id="address" className="my-4 w-full">
                <option disabled>Selecciona dirección</option>
                {locations?.map((item) => (
                  <option>{item.display_name}</option>
                ))}
              </select>
            )}
            <MapContainer
              center={[27.92, -101.2]}
              zoom={13}
              scrollWheelZoom={false}
              style={{
                position: "relative",
                height: "40vh",
                zIndex: "0",
                borderRadius: "8px",
                width: "100%",
              }}
            >
              <TileLayer
                attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
                url={urlMap}
              />
              <DraggableMarker userData={userData} setUserData={setUserData} />
            </MapContainer>

            {error && (
              <span className="text-red-500">Estos campos son necesarios</span>
            )}
          </div>
        )}
        {step === 4 && (
          <div>
            <h4 className="text-xl mb-4">Informacion extra</h4>
            <textarea
              value={userData.information}
              onChange={onChange}
              name="information"
              placeholder="Hombre de 34 años, tez blanca, con gorra roja y pantalones oscuros"
              className="px-3 py-3 h-24 placeholder-gray-400 text-gray-600 relative bg-white  rounded text-sm border border-gray-400 outline-none focus:outline-none focus:ring w-full"
            ></textarea>
          </div>
        )}

        {step === 5 && (
          <>
            <h4 className="text-xl mb-4">Resumen de datos</h4>
            <div className="border border-black p-4 mb-4 rounded-xl">
              <p>
                Nombre: <b>{userData.name}</b>
              </p>
              <p>
                Edad: <b>{userData.age}</b>
              </p>
              <p>
                Dirrección: <b>{userData.address}</b>
              </p>
              <p>{/* Colonia: <b>{userData.neighborhood}</b> */}</p>
              <p>
                Tocamientos: <b>{userData.Tocamientos ? "Cierto" : "Falso"}</b>
              </p>
              <p>
                Chiflido: <b>{userData.Chiflidos ? "Cierto" : "Falso"}</b>
              </p>
              <p>
                Miradas Lacivas:{" "}
                <b>{userData["Miradas Lacivas"] ? "Cierto" : "Falso"}</b>
              </p>
              <p className={`${!userData.information && "hidden"}`}>
                Información extra: {userData.information}
              </p>
            </div>
            <p className="italic">
              La ubicacion mostrada en el mapa, es una ubicacion aproximada.
              Este reporte no representa un reporte oficial para las
              autoridades. Exhortamos a que se haga la denuncia con las
              autoridades correspondientes.
            </p>

            {isLoading && <span className="my-4">Enviando reporte...</span>}
            <br />
            {step === 5 && (
              <button
                onSubmit={handleSubmit}
                type="submit"
                className="inline-flex mt-4 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              >
                Enviar reporte
              </button>
            )}
          </>
        )}
      </form>

      <section className="flex items-center justify-between flex-wrap">
        {step < 5 && (
          <button
            type="button"
            onClick={nextStep}
            className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Siguiente paso
          </button>
        )}
        {step > 1 && step < 6 && (
          <button
            type="button"
            onClick={() => setStep(step - 1)}
            className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Volver
          </button>
        )}
        <button
          type="button"
          className="inline-flex text-white bg-red-500 border-0 py-2 px-6 my-2 focus:outline-none hover:bg-red-400 rounded text-lg"
          onClick={() => {
            setUserData({});
            router.push("/");
            setStep(0);
          }}
        >
          Cancelar reporte
        </button>
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
