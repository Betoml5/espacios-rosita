import fetch from "node-fetch";
import { useState } from "react";

export const getServerSideProps = async ({ params }) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API}/report/${params.id}`
    );
    const { body: report } = await response.json();
    return {
      props: {
        report,
      },
    };
  } catch (error) {
    console.log(error);
  }
};

const ReportDetail = ({ report }) => {
  const [view, setView] = useState({
    location: false,
    information: false,
    bullyTypes: false,
  });
  console.log(report);
  return (
    <>
      <div className="w-5/6 py-6 px-4 mx-auto shadow-md rounded-md max-w-2xl bg-indigo-400">
        <h3 className="text-xl text-white font-semibold">Reporte</h3>

        {/*<hr className="my-2" />
      <main className="md:flex md:items-center md:justify-around">
        <section className="border border-black p-4 rounded-lg my-4 max-w-xs">
          <p className="font-bold">Direccion del reporte</p>
          <p>Calle: {report.street}</p>
          <p>Colonia: {report.neighborhood}</p>
          <p>Ciudad: {report.city}</p>
        </section>
        <section className="border border-black p-4 rounded-lg my-4 max-w-xs">
          <p className="font-bold">Tipos de acoso</p>
          {report.bullyTypes.map((item) => (
            <p>
              {item.description} :{" "}
              {item.value ? (
                <span className="text-green-600 font-bold">Cierto</span>
              ) : (
                <span className="text-red-600 font-bold">Falso</span>
              )}
            </p>
          ))}
        </section>
      </main>
      <p>ID: {report._id}</p> */}
      </div>
      <section className="flex flex-col  w-5/6 p-6 mx-auto shadow-md rounded-md max-w-2xl -mt-3 bg-blue-400">
        <button
          onClick={() =>
            setView({
              ...view,
              location: !view.location,
            })
          }
          className="text-white font-semibold text-left"
        >
          Lugar
        </button>
        {view.location && (
          <div className="my-4 dropdown text-white">
            <p>
              <span className="font-semibold">Calle:</span> {report.street}
            </p>
            <p>
              <span className="font-semibold">Colonia:</span>{" "}
              {report.neighborhood}
            </p>
            <p>
              <span className="font-semibold">Ciudad:</span> {report.city}
            </p>
          </div>
        )}
      </section>
      <section className="flex flex-col  w-5/6 p-6 mx-auto shadow-md rounded-md max-w-2xl -mt-5 bg-purple-300">
        <button
          onClick={() =>
            setView({
              ...view,
              bullyTypes: !view.bullyTypes,
            })
          }
          className="text-white font-semibold text-left"
        >
          Tipos de hostigamiento
        </button>
        {view.bullyTypes && (
          <div className="dropdown text-white">
            {report.bullyTypes.map((item) => (
              <p className="my-4">
                <span className="font-semibold">{item.description}</span> :{" "}
                {item.value ? (
                  <span className="text-green-600 font-bold">Cierto</span>
                ) : (
                  <span className="text-red-600 font-bold">Falso</span>
                )}
              </p>
            ))}
          </div>
        )}
      </section>
      <section className="flex flex-col w-5/6 p-6 mx-auto shadow-md rounded-md max-w-2xl -mt-5 bg-blue-300">
        <button
          onClick={() =>
            setView({
              ...view,
              information: !view.information,
            })
          }
          className="text-white font-semibold text-left leading-3"
        >
          Información extra
        </button>
        {view.information && (
          <div className="dropdown text-white">
            {report.information ? (
              <div className="my-4">{report.information}</div>
            ) : (
              <div className="my-4">No hay información disponíble</div>
            )}
          </div>
        )}
      </section>
    </>
  );
};

export default ReportDetail;
