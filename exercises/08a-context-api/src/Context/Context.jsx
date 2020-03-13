import React, { useContext, createContext, useState } from "react";

export const langContext = createContext();

export const langProvider = ({ children }) => {
  const [langData, setLangData] = useState();
  return (
    <langContext.Provider value={[langData, setLangData]}>
      {children}
    </langContext.Provider>
  );
};
