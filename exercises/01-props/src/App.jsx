import React from "react";
import "./App.css";
import Welcome from "./components/Welcome";
// import something here

function App() {
  return (
    <div className="App">
      <h1>{Welcome("Jamal")}</h1>
      <h1>{Welcome("Jamal")}</h1>
      <h1>{Welcome("")}</h1>
    </div>
  );
}

export default App;
