import React from "react";
var value = "";
function welcome(props) {
  //console.log(alert("value " + value));
  //console.log(alert("props " + props));
  value = props === "" ? "User" : props;

  return <div>Hello, {value}</div>;
}

export default welcome;
