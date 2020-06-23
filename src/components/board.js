import React from "react";
import Controls from "./controls";
import { connect } from "react-redux";
import { toggleSwitch } from "../actions/";
import Cell from "./cell";

function Board({ board, toggleSwitch }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
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
                  alive={cell.status}
                  handleSwitch={() =>
                    toggleSwitch(cell.status, { x: parseInt(key), y: j })
                  }
                />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <Controls />
    </div>
  );
}

const mapStateToProps = (state) => ({
  board: state.board,
});

export default connect(mapStateToProps, { toggleSwitch })(Board);
