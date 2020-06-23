import React from "react";
import Board from "../components/board";
import About from "../components/about";

function Main() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div style={{ marginBottom: "1.9em", color: "#ff6f91" }}>
        <h1 className="bigtext">Conway's Game of life</h1>
      </div>

      <Board />
      <About />
    </div>
  );
}

export default Main;
