import React from "react";
import Controls from "./controls";
import { connect } from "react-redux";
import { toggleSwitch } from "../actions/";
import Cell from "./cell";
import Presets from "./presets";
import Rules from "./rules";

function Board({ board, toggleSwitch }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "45em",
        justifyContent: "center",
      }}
    >
      <div style={{ display: "flex", marginBottom: "3em" }}>
        <table
          className="card"
          style={{
            display: "flex",
            marginTop: "2em",
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
        <Rules />
      </div>
      <Controls />
    </div>
  );
}

const mapStateToProps = (state) => ({
  board: state.board,
});

export default connect(mapStateToProps, { toggleSwitch })(Board);
