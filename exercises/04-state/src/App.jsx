import React from "react";
import "./App.css";
import LessText from "./Compenents/LessText";

// Import LessText here
// Import CharacterCount here

function App() {
  return (
    <>
      <div className="container pt-4 pb-4">
        <h2 className="h3">Challenge 1 - Less Text</h2>
        {
          <LessText
            text={"I think she's cute and fly fishs during the day or night."}
            maxLength={20}
          />
        }
      </div>
      <div className="bg-secondary text-white pt-4 pb-4 mb-4">
        <div className="container">
          <h1 className="h3">Challenge 2 - Character Count</h1>
          {/* Add CharacterCount here */}
        </div>
      </div>
    </>
  );
}

export default App;
