import React, { useState } from "react";

function LessText({ text, maxLength }) {
  const [isStringTruncated, setStringTruncate] = useState(false);
  console.log(text, maxLength);

  function truncateText() {
    return text.substring(0, maxLength);
  }

  return (
    <div>
      {isStringTruncated ? truncateText() : text}
      <br />
      <button onClick={() => setStringTruncate(true)}>Read Less</button>
      <button onClick={() => setStringTruncate(false)}>Read More</button>
    </div>
  );
  // const callback = event => setValue(charAmount);
}
export default LessText;
