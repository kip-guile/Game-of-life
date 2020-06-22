import React from "react";

function Board() {
  const test = [];
  for (let i = 0; i < 25; i++) {
    test.push(i);
  }
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <table
        style={{
          display: "flex",
          margin: "1em 0",
          borderSpacing: 0,
          borderCollapse: "collapse",
        }}
      >
        <tbody>
          {test.map((row, i) => (
            <tr key={i}>
              {test.map((cell, j) => (
                <td
                  key={j}
                  style={{
                    border: "1px solid red",
                    height: "1.5em",
                    width: "1.5em",
                    // backgroundColor: "dodgerblue",
                  }}
                >
                  {null}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Board;
