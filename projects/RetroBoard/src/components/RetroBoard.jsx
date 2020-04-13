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
      retroList: "My second assignment",
      RetroCategory: 1,
    },
    {
      retroList: "My third assignment",
      RetroCategory: 2,
    },
    {
      retroList: "My forth assignment",
      RetroCategory: 1,
    },
    {
      retroList: "My forth assignment",
      RetroCategory: 2,
    },
  ]);

  const addToList = (index) => {
    setList([...list], { retroList: "", RetroCategory: index });

    console.log("addtolist ", list);
  };
  const updateList = (userInput, category, index) => {
    Object.assign(list, { retroList: "", RetroCategory: index });

    // setList(copyOfList);
    // console.log("updateList ");
    // console.log({ list });
  };

  const deleteFromList = (index) => {
    console.log("deletefromlist index", index);
    setList(list.filter((item, currentIndex) => currentIndex !== index));
  };
  const previousCategory = () => {
    return alert("Previous Category");
  };
  const NextCategory = (index) => {
    return console.log(index);
  };

  const Wentwell = list.filter(function (item) {
    return item.RetroCategory === 0;
  });
  const ToImprove = list.filter(function (item) {
    return item.RetroCategory === 1;
  });

  const ActionItem = list.filter(function (item) {
    return item.RetroCategory === 2;
  });

  return (
    <div>
      <table>
        <tr>
          <th className="tableheaders">Went Well</th>
        </tr>
        <tr>
          <th>
            <button className="#icons" onClick={() => addToList(0)}>
              &#10133;
            </button>
          </th>
        </tr>
        <tr>
          <td className="wentWell">
            {Wentwell.map((item, index) => {
              return (
                <div>
                  <tr>
                    <textarea
                      value={item.retroList}
                      onChange={(e) => updateList(e.target.value, 0, index)}
                    />
                  </tr>
                  <tr>
                    <div>
                      <span className="buttonRow">
                        <button
                          className="leftButton"
                          onClick={previousCategory}
                        >
                          &#60;
                        </button>
                        <button
                          className="deleteButton"
                          onClick={() => deleteFromList(index)}
                        >
                          &#120;
                        </button>
                        <button className="rightButton" onClick={NextCategory}>
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
      <table>
        <tr>
          <th className="tableheaders">To Improve</th>
        </tr>
        <tr>
          <th>
            <button className="#icons" onClick={addToList}>
              &#10133;
            </button>
          </th>
        </tr>
        <tr>
          <td className="To Improve">
            {ToImprove.map((item, index) => {
              return (
                <div>
                  <tr>
                    <textarea
                      value={item.retroList}
                      onChange={(e) => updateList(e.target.value, 0, index)}
                    />
                  </tr>
                  <tr>
                    <div>
                      <span className="buttonRow">
                        <button
                          className="leftButton"
                          onClick={previousCategory}
                        >
                          &#60;
                        </button>
                        <button
                          className="deleteButton"
                          onClick={() => deleteFromList(index)}
                        >
                          &#120;
                        </button>
                        <button
                          className="rightButton"
                          onClick={NextCategory(index)}
                        >
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
      <table>
        <tr>
          <th className="tableheaders">Action Items</th>
        </tr>
        <tr>
          <th>
            <button className="#icons" onClick={addToList}>
              &#10133;
            </button>
          </th>
        </tr>
        <tr>
          <td className="To Improve">
            {ActionItem.map((item, index) => {
              return (
                <div>
                  <tr>
                    <textarea
                      value={item.retroList}
                      onChange={(e) => updateList(e.target.value, 2, index)}
                    />
                  </tr>
                  <tr>
                    <div>
                      <span className="buttonRow">
                        <button
                          className="leftButton"
                          onClick={previousCategory}
                        >
                          &#60;
                        </button>
                        <button
                          className="deleteButton"
                          onClick={() => deleteFromList(index)}
                        >
                          &#120;
                        </button>
                        <button className="rightButton" onClick={NextCategory}>
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
