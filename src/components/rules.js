import React from "react";

const Rules = () => (
  <div style={{ width: "20em", textAlign: "left", marginLeft: "3em" }}>
    <h3 style={{ textAlign: "center", color: "#ff6f91" }}>Rules</h3>
    <div>
      <p>
        In the Game of Life, these rules examine each cell of the grid. For each
        cell, it counts that cell's eight neighbors (up, down, left, right, and
        diagonals), and then act on that result.
      </p>
      <ul>
        <li>
          If the cell is alive and has 2 or 3 neighbors, then it remains alive.
          Else it dies
        </li>
        <li>
          If the cell is dead and has exactly 3 neighbors, then it comes to
          life. Else if remains dead.
        </li>
      </ul>
      <p>Cells that are off the edge of the grid wrap around to the far side</p>
    </div>
  </div>
);

export default Rules;
