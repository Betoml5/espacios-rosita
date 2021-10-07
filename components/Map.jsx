import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { icon } from "leaflet";
import { useEffect, useState } from "react";
import MapPanel from "./MapPanel";

const myIcon = icon({
  iconUrl: "/red-circle.png",
  popupAnchor: [0, -8],
  iconSize: [28, 28],
});
const Map = () => {
  const tokenMapbox = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;
  const urlMap = `https://api.mapbox.com/styles/v1/betoml5/ckudbz0wj1f3s17qtv0w0cqe8/tiles/256/{z}/{x}/{y}@2x?access_token=${tokenMapbox}`;
  const [reports, setReports] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/body")
      .then((res) => res.json())
      .then((data) => setReports(data))
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className="flex relative">
      <MapContainer
        center={[27.92, -101.2]}
        zoom={13}
        scrollWheelZoom={false}
        style={{
          height: "500px",
          zIndex: "0",
          width: "100%",
        }}
      >
        <TileLayer
          attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
          url={urlMap}
        />
        {reports.map((report) => (
          <Marker position={report.location} icon={myIcon}>
            <Popup>{report.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
      {/* <MapPanel /> */}
    </div>
  );
};

export default Map;
