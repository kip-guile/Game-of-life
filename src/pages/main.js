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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "3em",
          backgroundColor: "#845EC2",
          width: "100%",
          justifyContent: "center",
        }}
      >
        © 2020 Alexander Oguejiofor
      </div>
    </div>
  );
}

export default Main;
