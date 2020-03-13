// Import what you need from React here
import React, { useState, useContext } from "react";
import "./App.css";
import NavBar from "../NavBar/NavBar";
import CreateAccount from "../CreateAccount/CreateAccount";
import Footer from "../Footer/Footer";
import TranslatorContext from "../contexts/TranslatorContext";

function App() {
  /**
   * Complete me. This component should be similar to the "App" component in the first context API exercise.
   * @see exercises/08a-context-api/src/App.jsx
   * @see solutions/08a-context-api/App.solutions.jsx
   */
  const [language, setllanguage] = useState("en");
  return (
    <TranslatorContext.Provider value={[language, setllanguage]}>
      <div className="App d-flex flex-column">
        <NavBar />
        <div className="container pt-4 pb-4">
          <CreateAccount />
        </div>
        <div className="mt-auto">
          <Footer />
        </div>
      </div>
    </TranslatorContext.Provider>
  );
}

export default App;
