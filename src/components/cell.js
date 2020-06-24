import React from "react";
import "../App.css";

const Cell = ({ alive, handleSwitch }) => {
  return (
    <td
      onClick={handleSwitch}
      className={alive === 1 ? "activecell" : "deadcell"}
    />
  );
};

export default Cell;
