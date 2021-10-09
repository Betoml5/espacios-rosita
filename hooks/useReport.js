import { useContext } from "react";
import Context from "../context/Context";
import Axios from "axios";
let API = process.env.NEXT_PUBLIC_API;

export default function useReport() {
  const {
    step,
    setStep,
    userData,
    setUserData,
    error,
    setError,
    isLoading,
    setIsLoading,
  } = useContext(Context);

  const sendReport = async (report) => {
    try {
      const response = await Axios.post(`${API}/report/create`, report);
      return response.data;
    } catch (error) {
      return error;
    }
  };

  const getReport = async (id) => {
    try {
      const response = await Axios.get(`${API}/report/${id}`);
      return response.data;
    } catch (error) {
      return error;
    }
  };

  const getReports = async () => {
    try {
      const response = await Axios.get(`${API}/report/all`);
      return response.data;
    } catch (error) {
      return error;
    }
  };

  return {
    step,
    setStep,
    userData,
    setUserData,
    sendReport,
    getReport,
    getReports,
  };
}
