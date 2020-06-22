import React from "react";

function Board() {
  const test = [];
  for (let i = 0; i < 25; i++) {
    test.push(i);
  }
  return (
    <div>
      <table style={{ margin: "1em o" }}>
        <tbody>
          {test.map((row, i) => (
            <tr key={i}>
              {test.map((cell, j) => (
                <td key={j} style={{ backgroundColor: "dodgerblue" }}>
                  {cell}
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
