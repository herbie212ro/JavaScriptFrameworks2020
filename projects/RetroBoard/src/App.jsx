import React from "react";
import "./App.css";
import RetroBoard from "./components/RetroBoard";
import { RetroContext } from "./context/RetroContext";

function App() {
  return (
    <div>
      <h1 className="#retroheader"> Retro Board</h1>
      <RetroBoard>
        <div>{RetroBoard("Herbie")}</div>
      </RetroBoard>
    </div>
  );
}

export default App;