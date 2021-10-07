import Report from "../components/Report";
import fetch from "node-fetch";

export const getServerSideProps = async () => {
  try {
    const result = await fetch("http://localhost:3001/bully_types");
    const data = await result.json();
    console.log(data);

    return {
      props: {
        data,
      }, // will be passed to the page component as props
    };
  } catch (error) {
    console.log(error);
  }
};

const Reporte = ({ data }) => {
  return <Report bullyTypes={data} />;
};

export default Reporte;
