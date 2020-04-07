import React, { useState, createContext } from "react";

export const RetroContext = createContext();

export const RetroProvider = ({ children }) => {
  const [state, setState] = useState({
    RetroData: [],
  });
  //console.log(state);
  return (
    <RetroContext.Provider value={[state, setState]}>
      {children}
    </RetroContext.Provider>
  );
};
