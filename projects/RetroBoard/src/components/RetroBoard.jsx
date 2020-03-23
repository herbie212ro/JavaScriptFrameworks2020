import React, { useState } from "react";
import { RetroContext } from "../context/RetroContext";
import "../App.css";

const RetroBoard = () => {
  const [list, setList] = useState([
    {
      retroList: "My first assignment",
      RetroCategory: 0
    },
    {
      retroList: "My second assignment",
      RetroCategory: 0
    },
    {
      retroList: "My third assignment",
      RetroCategory: 0
    },
    {
      retroList: "My forth assignment",
      RetroCategory: 0
    }
  ]);

  const addToList = () => {
    React.setList([...list, ""]);
  };
  const updateList = (userInput, index) => {
    const copyOfList = [...list];
    copyOfList[index] = userInput;
    setList(copyOfList);
  };
  /*
  const deleteFromList = () => {
    return console.log("Deleted from list");
  }; */
  const deleteFromList = index => {
    setList(list.filter((item, currentIndex) => currentIndex !== index));
  };
  const previousCategory = () => {
    return alert("Previous Category");
  };
  const NextCategory = () => {
    return alert("Next Category");
  };

  return (
    <div>
      <table>
        <tr>
          <th className="#tableheaders">Went Well</th>
        </tr>
        <tr>
          <th>
            <button className="#icons" onClick={addToList}>
              &#10133;
            </button>
          </th>
        </tr>
        <tr>
          <td className="#wentWell">
            {list.map((item, index) => {
              return (
                <div>
                  <tr>
                    <td>{item.retroList}</td>
                  </tr>
                  <tr>
                    <div className="#icons">
                      <span className="#icons">
                        <button className="#icons" onClick={previousCategory}>
                          &#60;
                        </button>
                        <button className="#icons" onClick={deleteFromList}>
                          &#120;
                        </button>
                        <button className="#icons" onClick={NextCategory}>
                          &#62;
                        </button>
                      </span>
                    </div>
                  </tr>
                </div>
              );
            })}
          </td>
        </tr>
      </table>
    </div>
  );
};

export default RetroBoard;
