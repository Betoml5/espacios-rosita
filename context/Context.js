import React, { useState } from "react";

const Context = React.createContext({});

export function ContextProvider({ children }) {
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [step, setStep] = useState(1);
  const [userData, setUserData] = useState({
    name: "",
    age: "",
    street: "",
    neighborhood: "",
    city: "",
    information: "",
    ["Tocamientos"]: false,
    ["Chiflidos"]: false,
    ["Miradas Lacivas"]: false
  });

  return (
    <Context.Provider
      value={{
        step,
        setStep,
        userData,
        setUserData,
        error,
        setError,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default Context;
