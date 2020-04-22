import React, { useState, createContext } from "react";

export const RetroContext = createContext();

export const RetroProvider = ({ children }) => {
  const [list, setList] = useState([
    {
      retroList: "My first assignment",
      RetroCategory: 0,
      likes: 0,
      disLikes: 0,
    },
    {
      retroList: "My second assignment",
      RetroCategory: 0,
      likes: 0,
      disLikes: 0,
    },
    {
      retroList: "My third assignment",
      RetroCategory: 1,
      likes: 0,
      disLikes: 0,
    },
    {
      retroList: "My forth assignment",
      RetroCategory: 2,
      likes: 0,
      disLikes: 0,
    },
    {
      retroList: "My fifth assignment",
      RetroCategory: 1,
      likes: 0,
      disLikes: 0,
    },
    {
      retroList: "My six assignment",
      RetroCategory: 2,
      likes: 0,
      disLikes: 0,
    },
  ]);

  return (
    <RetroContext.Provider value={[list, setList]}>
      {children}
    </RetroContext.Provider>
  );
};
