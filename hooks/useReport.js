import { useContext } from "react";
import Context from "../context/Context";

export default function useReport() {
  const { step, setStep } = useContext(Context);

  const nextStep = () => setStep(step + 1);

  return {
    step,
    setStep
  };
}
