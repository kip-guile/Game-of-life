import React from "react";
import Board from "../components/board";

function Main() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>Conway's Game of life</h1>
      <Board />
    </div>
  );
}

export default Main;
