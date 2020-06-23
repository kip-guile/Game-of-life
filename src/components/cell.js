import React from "react";
import "../App.css";

const Cell = ({ active, handleActive }) => {
  return (
    <td
      onClick={handleActive}
      style={{
        backgroundColor: active ? "black" : "transparent",
        height: "1.1em",
        width: "1.1em",
        border: "1px solid #ddd",
      }}
    />
  );
};

export default Cell;
