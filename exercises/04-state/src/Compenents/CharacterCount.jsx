import React, { useState } from "react";
//import RevserseInput from "./ReverseInput";

function CharacterCount() {
  const [isStringcurrent, setStringToChange] = useState(false);
  const [isStringcurrent2, setStringToChange3] = useState("");

  return (
    <div>
      <textarea
        className="textstuff"
        onChange={e =>
          setStringToChange(e.target.value.length) &
          setStringToChange3(e.target.value)
        }
        placeholder="Type in this boxes. "
      ></textarea>
      <p>The count of this string is: {isStringcurrent}</p>
      {isStringcurrent2
        .split("")
        .reverse()
        .join("")}
    </div>
  );
}

export default CharacterCount;
