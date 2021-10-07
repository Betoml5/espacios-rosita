import dynamic from "next/dynamic";

const Mapa = () => {
  const MapReport = dynamic(() => import("../components/Map"), {
    ssr: false,
  });

  return <MapReport />;
};

export default Mapa;
