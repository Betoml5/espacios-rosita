import dynamic from "next/dynamic";
import fetch from "node-fetch";
export const getServerSideProps = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API}/report/all`);
    const reports = await response.json();
    if (!reports) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        reports,
      },
    };
  } catch (error) {
    throw error;
  }
};

const Map = ({ reports }) => {
  const MapReport = dynamic(() => import("../components/Map"), {
    ssr: false,
  });

  return <MapReport reports={reports} />;
};

export default Map;
