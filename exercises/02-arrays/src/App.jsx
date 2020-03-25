import React from "react";
import { images } from "./images/images";
import "./App.css";

function App() {
  //console.log({ images });

  //console.log(imgFiles);
  return (
    <div className="App">
      {images.map((images, index) => (
        <img src={images} key={`image-${index}`} alt="help me george" />
      ))}
    </div>
  );
}

export default App;
