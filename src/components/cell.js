import React from "react";
import "../App.css";

const Cell = (props) => {
  console.log(props);
  return (
    <td
      onClick={props.handleActive}
      style={{
        backgroundColor: props.active ? "black" : "transparent",
        height: "1.1em",
        width: "1.1em",
        border: "2px solid #ddd",
      }}
    />
  );
};

export default Cell;
