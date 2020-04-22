import React, { useContext } from "react";
import { RetroContext } from "../context/RetroContext";
import "../App.css";

const RetroBoard = () => {
  const [list, setList] = useContext(RetroContext);

  const addToList = (index) => {
    setList([
      ...list,
      {
        retroList: "",
        RetroCategory: index,
        id: list.length,
        likes: 0,
        disLikes: 0,
      },
    ]);
  };

  const updateList = (userInput, category, index) => {
    const newInput = [...list];
    newInput[index].retroList = userInput;
    newInput[index].id = newInput.length;
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

  const upLikes = (index) => {
    const upLike = [...list];
    upLike[index].likes++;
    setList(upLike);
  };
  const downLikes = (index) => {
    const downLikes = [...list];
    downLikes[index].disLikes++;
    setList(downLikes);
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
                    <div key={item.index}>
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
                            <button
                              className="dislike"
                              onClick={() => downLikes(index)}
                            >
                              {item.disLikes > 0 ? item.disLikes : null}{" "}
                              Dislikes
                            </button>
                            <button
                              className="like"
                              onClick={() => upLikes(index)}
                            >
                              Likes {item.likes > 0 ? item.likes : null}
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
            <td className="ToImprove">
              {list.map((item, index) => {
                if (item.RetroCategory === 1)
                  return (
                    <div key={item.index}>
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
                            <button
                              className="dislike"
                              onClick={() => downLikes(index)}
                            >
                              {item.disLikes > 0 ? item.disLikes : null}{" "}
                              Dislikes
                            </button>
                            <button
                              className="like"
                              onClick={() => upLikes(index)}
                            >
                              Likes {item.likes > 0 ? item.likes : null}
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
            <td className="actionItem">
              {list.map((item, index) => {
                if (item.RetroCategory === 2)
                  return (
                    <div key={item.index}>
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
                            <button
                              className="dislike"
                              onClick={() => downLikes(index)}
                            >
                              {item.disLikes > 0 ? item.disLikes : null} {""}
                              Dislikes
                            </button>
                            <button
                              className="like"
                              onClick={() => upLikes(index)}
                            >
                              Likes {item.likes > 0 ? item.likes : null}
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
