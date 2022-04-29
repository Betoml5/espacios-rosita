import React, { useState } from "react";

const Context = React.createContext({});

export function ContextProvider({ children }) {
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState(0);
  const [userData, setUserData] = useState({
    name: "",
    age: "",
    street: "",
    neighborhood: "",
    city: "",
    information: "",
    gender: "",
    address: "",
    lat: 27.93,
    lng: -101.21,
    ["Tocamientos"]: false,
    ["Chiflidos"]: false,
    ["Miradas Lacivas"]: false,
    ["Abuso sexual"]: false,
    ["Secuestro"]: false
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
