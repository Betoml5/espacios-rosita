import { useRouter } from "next/dist/client/router";
import fetch from "node-fetch";

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
  return (
    <div className="w-5/6 p-4 mx-auto shadow rounded-t-md border max-w-2xl">
      <h3 className="text-xl">Reporte</h3>
      <hr className="my-2" />
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
      <p>ID: {report._id}</p>
    </div>
  );
};

export default ReportDetail;
