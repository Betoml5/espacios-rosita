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

  return (
    <>
      <div className="md:w-3/4 md:mx-auto py-6 px-4">
        <h3 className="text-3xl">Reporte</h3>
        <section className="mt-4">
          <p>
            <span className="font-semibold">Lugar:</span> {report.address}
          </p>
        </section>
        <section className="my-4">
          <p>
            <span className="font-semibold">Tipos de hostigamiento:</span>{" "}
            {report.bullyTypes.map((item) => (
              <p className="my-4">
                <span className="font-semibold">{item.description}</span> :{" "}
                {item.value ? (
                  <span className="text-green-600 font-bold">✔️</span>
                ) : (
                  <span className="text-red-600 font-bold">❌</span>
                )}
              </p>
            ))}
          </p>
        </section>
        <section>
          <p>
            <span className="font-semibold">Informacion extra:</span>{" "}
            {report.information ? (
              <div className="my-4">{report.information}</div>
            ) : (
              <div className="my-4">No hay información disponíble</div>
            )}
          </p>
        </section>
      </div>
    </>
  );
};

export default ReportDetail;
