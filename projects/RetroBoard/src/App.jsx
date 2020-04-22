import React from "react";
import "./App.css";
import RetroBoard from "./components/RetroBoard";
import { RetroProvider } from "./context/RetroContext";

function App() {
  return (
    <div>
      <h1 className="#retroheader"> Retro Board</h1>
      <RetroProvider>
        <RetroBoard />
      </RetroProvider>
    </div>
  );
}

export default App;
