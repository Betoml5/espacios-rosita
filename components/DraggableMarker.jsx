import { useCallback, useContext, useMemo, useRef, useState } from "react";
import { Marker, Popup } from "react-leaflet";
import { greenCircleIcon } from "../icons";
import useLocation from "../hooks/useLocation";
function DraggableMarker({ userData, setUserData }) {
  const { getLocationByLatLng } = useLocation();
  const [position, setPosition] = useState([userData.lat, userData.lng]);
  const markerRef = useRef(null);
  const eventHandlers = useMemo(
    () => ({
      async dragend() {
        const marker = markerRef.current;
        if (marker != null) {
          const location = await getLocationByLatLng(
            marker.getLatLng().lat,
            marker.getLatLng().lng
          );
          setUserData({
            ...userData,
            address: location.display_name,
            lat: marker.getLatLng().lat,
            lng: marker.getLatLng().lng,
          });
        }
      },
    }),
    []
  );

  return (
    <Marker
      draggable={true}
      eventHandlers={eventHandlers}
      position={position}
      ref={markerRef}
      icon={greenCircleIcon}
    ></Marker>
  );
}

export default DraggableMarker;
