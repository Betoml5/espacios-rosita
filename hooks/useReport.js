import { useContext } from "react";
import Context from "../context/Context";
import Axios from "axios";
const API = process.env.NEXT_PUBLIC_API;

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
    if (!report) return Promise.reject("Miss report");
    try {
      setIsLoading(true);
      const response = await Axios.post(`${API}/report/create`, report);
      setIsLoading(false);
      return response.data;
    } catch (error) {
      return error;
    }
  };

  const getReport = async (id) => {
    if (!id) return Promise.reject("Need report id");
    try {
      setIsLoading(true);
      const response = await Axios.get(`${API}/report/${id}`);
      setIsLoading(false);
      return response.data;
    } catch (error) {
      return error;
    }
  };

  const getReports = async () => {
    try {
      setIsLoading(true);
      const response = await Axios.get(`${API}/report/all`);
      setIsLoading(false);
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
    error,
    setError,
    isLoading,
    setIsLoading,
  };
}
