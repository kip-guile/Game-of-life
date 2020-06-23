import React from "react";
import Board from "../components/board";
import About from "../components/about";

function Main() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>Conway's Game of life</h1>
      <Board />
      <About />
    </div>
  );
}

export default Main;
