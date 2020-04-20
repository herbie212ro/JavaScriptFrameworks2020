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
      RetroCategory: 1,
    },
    {
      retroList: "My forth assignment",
      RetroCategory: 2,
    },
    {
      retroList: "My fifth assignment",
      RetroCategory: 1,
    },
    {
      retroList: "My six assignment",
      RetroCategory: 2,
    },
  ]);

  const addToList = (index) => {
    setList([...list, { retroList: "", RetroCategory: index }]);
  };

  const updateList = (userInput, category, index) => {
    const newInput = [...list];
    newInput[index].retroList = userInput;
    setList(newInput);
  };

  const deleteFromList = (index) => {
    setList(list.filter((item, currentIndex) => currentIndex !== index));
  };
  const previousCategory = (index) => {
    const updateCatDown = [...list];
    if (updateCatDown[index].RetroCategory === 0) {
      updateCatDown[index].RetroCategory = 2;
      setList(updateCatDown);
    } else {
      updateCatDown[index].RetroCategory--;
      setList(updateCatDown);
    }
  };

  const NextCategory = (index) => {
    const updateCatUp = [...list];
    if (updateCatUp[index].RetroCategory === 2) {
      updateCatUp[index].RetroCategory = 0;
      setList(updateCatUp);
    } else {
      updateCatUp[index].RetroCategory++;
      setList(updateCatUp);
    }
  };

  return (
    <div>
      <table>
        <thead>
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
              {list.map((item, index) => {
                if (item.RetroCategory === 0) {
                  return (
                    <div key={`cardkey-${index}`}>
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
                              onClick={() => previousCategory(index)}
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
                              onClick={() => NextCategory(index)}
                            >
                              &#62;
                            </button>
                          </span>
                        </div>
                      </tr>
                    </div>
                  );
                }
              })}
            </td>
          </tr>
        </thead>
      </table>
      <table>
        <thead>
          <tr>
            <th className="tableheaders">To Improve</th>
          </tr>
          <tr>
            <th>
              <button className="#icons" onClick={() => addToList(1)}>
                &#10133;
              </button>
            </th>
          </tr>
          <tr>
            <td className="To Improve">
              {list.map((item, index) => {
                if (item.RetroCategory === 1)
                  return (
                    <div key={`cardkey-${index}`}>
                      <tr>
                        <textarea
                          value={item.retroList}
                          onChange={(e) => updateList(e.target.value, 1, index)}
                        />
                      </tr>
                      <tr>
                        <div>
                          <span className="buttonRow">
                            <button
                              className="leftButton"
                              onClick={() => previousCategory(index)}
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
                              onClick={() => NextCategory(index)}
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
        </thead>
      </table>
      <table>
        <thead>
          <tr>
            <th className="tableheaders">Action Items</th>
          </tr>
          <tr>
            <th>
              <button className="#icons" onClick={() => addToList(2)}>
                &#10133;
              </button>
            </th>
          </tr>
          <tr>
            <td className="To Improve">
              {list.map((item, index) => {
                if (item.RetroCategory === 2)
                  return (
                    <div key={`cardkey-${index}`}>
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
                              onClick={() => previousCategory(index)}
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
                              onClick={() => NextCategory(index)}
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
        </thead>
      </table>
    </div>
  );
};

export default RetroBoard;
