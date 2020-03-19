import React from "react";

function welcome(props) {
  return (
    <div>
      <table>
        <tr>
          <th className="#tableheaders">Went Well</th>
          <th className="#tableheaders">To Improve</th>
          <th className="#tableheaders">Action Items</th>
        </tr>
        <tr>
          <th>
            <button className="#tablebuttons">&#10133;</button>
          </th>
          <th>
            <button className="#tablebuttons">&#10133;</button>
          </th>
          <th>
            <button className="#tablebuttons">&#10133;</button>
          </th>
        </tr>
        <tr>
          <td>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
          <td>Germany</td>
        </tr>
        <tr>
          <td>Centro comercial Moctezuma</td>
          <td>Francisco Chang</td>
          <td>Mexico</td>
        </tr>
        <tr>
          <td>Ernst Handel</td>
          <td>Roland Mendel</td>
          <td>Austria</td>
        </tr>
        <tr>
          <td>Island Trading</td>
          <td>Helen Bennett</td>
          <td>UK</td>
        </tr>
      </table>
    </div>
  );
}

export default welcome;
