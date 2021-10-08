import { useContext } from "react";
import Context from "../context/Context";

export default function useReport() {
  const { step, setStep, userData, setUserData } = useContext(Context);

  const sendReport = async () => {

  }

  const getReport = async () => {

  }

  const getReports = async () => {
    
  }

  return {
    step,
    setStep,
    userData,
    setUserData,
  };
}
