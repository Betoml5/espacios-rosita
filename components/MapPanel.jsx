import Image from "next/image";

const MapPanel = () => {
  return (
    <div className="flex  items-center  absolute p-4 bottom-16 bg-white  w-full rounded-full shadow-xl">
      <div className="flex">
        <Image src="/red-circle.png" width={35} height={35} />
      </div>
    </div>
  );
};

export default MapPanel;
