import { useContext } from "react";
import Context from "../context/Context";
const API = process.env.NEXT_PUBLIC_API_LOCATION;

export default function useLocation() {
  const { setIsLoading } = useContext(Context);

  const getLocationByAddress = async (address) => {
    try {
      setIsLoading(true);
      const response = await fetch(API + address + "&format=json");
      setIsLoading(false);
      const location = await response.json();
      return location;
    } catch (error) {
      return error;
    }
  };

  return {
    getLocationByAddress,
  };
}
