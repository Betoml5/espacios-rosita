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

  const nextStep = () => {
    if (step === 1) {
      if (userData.name == "" || userData.age == "" || userData.gender == "") {
        setError(true);
      } else {
        setStep(step + 1);
        setError(false);
      }
    }
    if (step === 2) {
      if (
        userData["Tocamientos"] == false &&
        userData["Chiflidos"] == false &&
        userData["Miradas Lacivas"] == false
      ) {
        setError(true);
      } else {
        setStep(step + 1);
        setError(false);
      }
    }

    if (step === 3) {
      if (
        userData.street == "" ||
        userData.neighborhood == "" ||
        userData.city == ""
      ) {
        setError(true);
      } else {
        setStep(step + 1);
        setError(false);
      }
    }

    step == 4 && setStep(step + 1);
  };

  const sendReport = async (report) => {
    if (!report) return Promise.reject("Miss report");
    try {
      setIsLoading(true);
      const response = await Axios.post(`${API}/report/create`, report, {
        method: "POST",
      });
      setIsLoading(false);
      // console.log(response);
      return response.data;
    } catch (error) {
      console.log(error);
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
    nextStep,
  };
}
