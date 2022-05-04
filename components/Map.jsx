import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import Image from "next/image";
import Link from "next/link";
import "leaflet/dist/leaflet.css";
import { redCircleIcon, orangeCircleIcon, yellowCircleIcon } from "../icons";
import { useState } from "react";
const Map = ({ reports }) => {
  const [bubble, setBubble] = useState(true);

  const tokenMapbox = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;
  const urlMap = `https://api.mapbox.com/styles/v1/betoml5/ckudbz0wj1f3s17qtv0w0cqe8/tiles/256/{z}/{x}/{y}@2x?access_token=${tokenMapbox}`;
  return (
    <div className="flex relative lg:w-4/5 lg:mx-auto">
      <MapContainer
        center={[27.92, -101.2]}
        zoom={13}
        scrollWheelZoom={false}
        style={{
          position: "relative",
          height: "80vh",
          zIndex: "0",
          borderRadius: "8px",
          width: "100%",
        }}
      >
        <TileLayer
          attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
          url={urlMap}
        />
        {reports?.body?.map((report) => {
          //Esto es para saber cuantos tipos de acoso tiene un reporte
          const count = report.bullyTypes.filter(
            (item) => item.value == true
          ).length;

          let icon;
          count == 1
            ? (icon = yellowCircleIcon)
            : count == 2
            ? (icon = orangeCircleIcon)
            : (icon = redCircleIcon);

          return (
            <Marker
              position={[report.lat, report.lng]}
              icon={icon}
              key={report._id}
            >
              <Popup>
                <Link href={`/reporte/${report._id}`}>
                  <a>Ver reporte completo</a>
                </Link>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
      <div className="text-center bg-white z-50 absolute w-3/4 mx-auto left-0 right-0 self-center p-4 bottom-10 rounded-md md:w-1/4">
        <div className={`relative ${!bubble && "hidden"}`}>
          <div
            className="absolute right-0 cursor-pointer"
            onClick={() => setBubble(false)}
          >
            X
          </div>
          <p className="mb-2">Simbología</p>
          <div>
            <div className="flex items-center">
              <Image src="/red-circle.png" width={30} height={30} />
              <p className="ml-2">3 Tipos de acoso</p>
            </div>
            <div className="flex items-center my-2">
              <Image src="/orange-circle.png" width={30} height={30} />
              <p className="ml-2">2 Tipos de acoso</p>
            </div>
            <div className="flex items-center">
              <Image src="/yellow-circle.png" width={30} height={30} />
              <p className="ml-2">1 Tipo de acoso</p>
            </div>
          </div>
        </div>
        <button
          className={` ${bubble && "hidden"}`}
          onClick={() => setBubble(true)}
        >
          Abrir simbología
        </button>
      </div>
    </div>
  );
};

export default Map;
