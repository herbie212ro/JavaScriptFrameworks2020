import React from "react";
import "./App.css";
import Welcome from "../src/components/Welcome";

function App() {
  return (
    <div>
      <h1 className="#retroheader"> Retro Board</h1>
      {Welcome("Herbie")}
    </div>
  );
}

export default App;
