import React, { useState } from "react";

const Context = React.createContext({});

export function ContextProvider({ children }) {
  const [step, setStep] = useState(1);
  const [userData, setUserData] = useState({});

  return (
    <Context.Provider
      value={{
        step,
        setStep,
        userData,
        setUserData,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default Context;
