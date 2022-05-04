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
    throw error;
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
      <div className="w-5/6 py-6 px-4 mx-auto shadow-md rounded-t-md max-w-2xl bg-indigo-400">
        <h3 className="text-xl text-white font-semibold">Reporte</h3>
      </div>
      <section className="report-section bg-blue-400">
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
          <div className="my-4 dropdown text-white ">
            <p>
              <span className="font-semibold">Dirección:</span> {report.address}
            </p>
          </div>
        )}
      </section>
      <section className=" report-section bg-purple-300 ">
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
      <section className="report-section  bg-blue-300 ">
        <button
          onClick={() =>
            setView({
              ...view,
              information: !view.information,
            })
          }
          className="text-white font-semibold text-left "
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
