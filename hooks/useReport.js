import { useContext } from "react";
import Context from "../context/Context";

export default function useReport() {
  const { step, setStep, userData, setUserData } = useContext(Context);

  return {
    step,
    setStep,
    userData,
    setUserData,
  };
}
