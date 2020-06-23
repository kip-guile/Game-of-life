import React from "react";
import Controls from "./controls";
import { connect } from "react-redux";
import { toggleSwitch } from "../actions/";
import Cell from "./cell";
import Presets from "./presets";

function Board({ board, toggleSwitch }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex" }}>
        <table
          style={{
            display: "flex",
            margin: "1em 0",
            borderSpacing: 0,
            borderCollapse: "collapse",
          }}
        >
          <tbody>
            {Object.entries(board).map(([key, value]) => (
              <tr key={key}>
                {value.map((cell, j) => (
                  <Cell
                    key={`${key}-${j}`}
                    alive={cell}
                    handleSwitch={() =>
                      toggleSwitch({ x: parseInt(key), y: j })
                    }
                  />
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <Presets />
      </div>
      <Controls />
    </div>
  );
}

const mapStateToProps = (state) => ({
  board: state.board,
});

export default connect(mapStateToProps, { toggleSwitch })(Board);
