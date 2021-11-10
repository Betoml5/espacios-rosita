import { useContext } from "react";
import Context from "../context/Context";
const API = process.env.NEXT_PUBLIC_API_LOCATION;
const API_REVERSE = process.env.NEXT_PUBLIC_API_REVERSE_LOCATION

export default function useLocation() {
  const { setIsLoading } = useContext(Context);

  const getLocationByAddress = async (address) => {
    try {
      setIsLoading(true);
      const response = await fetch(API + address + "&format=json");
      setIsLoading(false);
      const location = await response.json();
      console.log(location)
      return location;
    } catch (error) {
      return error;
    }
  };

  const getLocationByLatLng = async (lat, lng) => {
    try {
      setIsLoading(true);
      const response = await fetch(API_REVERSE + "&lat=" + lat + "&lon=" + lng + "&format=json")
      setIsLoading(false);
      const location = await response.json();
      return location;
    } catch (error) {
      console.log(error)
      return error;
    }
  }

  return {
    getLocationByAddress,
    getLocationByLatLng
  };
}
