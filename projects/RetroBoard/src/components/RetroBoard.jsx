import React, { useState, Usecontext } from "react";
import { RetroContext } from "../context/RetroContext";
import "../App.css";

const RetroBoard = () => {
  const [list, setList] = useState([
    {
      retroList: "My first assignment",
      RetroCategory: 0,
    },
    {
      retroList: "My second assignment",
      RetroCategory: 0,
    },
    {
      retroList: "My third assignment",
      RetroCategory: 0,
    },
    {
      retroList: "My forth assignment",
      retroCategory: 1,
    },
  ]);

  const addToList = () => {
    setList([...list, ""]);

    console.log("addtolist ", list);
  };
  const updateList = (userInput, category, index) => {
    const copyOfList = [...list];
    copyOfList[index] = { retroList: userInput, retroCategory: category };

    // copyOfList[index] = { retroCategory: category };
    setList(copyOfList);
    console.log("updateList ");
    console.log({ list });
  };
  /*
  const deleteFromList = () => {
    return console.log("Deleted from list");
  }; */
  const deleteFromList = (index) => {
    console.log("deletefromlist index", index);
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
          <th className="tableheaders">Went Well</th>
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
                    <input
                      value={item.retroList}
                      placeholder="Enter Card info"
                      onChange={(e) => updateList(e.target.value, 0, index)}
                    />
                  </tr>
                  <tr>
                    <div className="#icons">
                      <span className="#icons">
                        <button className="#icons" onClick={previousCategory}>
                          &#60;
                        </button>
                        <button
                          className="#icons"
                          onClick={() => deleteFromList(index)}
                        >
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
