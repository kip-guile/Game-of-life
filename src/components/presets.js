import React from "react";
import { connect } from "react-redux";
import Button from "./button";
import "../App.css";
import { setPreset } from "../actions";

const Presets = ({ setPreset }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        marginLeft: "10px",
      }}
    >
      <Button
        title={"Blinker"}
        handleClick={() =>
          setPreset([
            [14, 12],
            [14, 13],
            [14, 14],
          ])
        }
      />
      <Button
        title={"Block"}
        handleClick={() =>
          setPreset([
            [13, 14],
            [14, 14],
            [13, 15],
            [14, 15],
          ])
        }
      />
      <Button
        title={"Toad"}
        handleClick={() =>
          setPreset([
            [12, 14],
            [12, 15],
            [12, 16],
            [13, 13],
            [13, 14],
            [13, 15],
          ])
        }
      />
      <Button
        title="Tub"
        handleClick={() =>
          setPreset([
            [13, 14],
            [12, 15],
            [14, 15],
            [13, 16],
          ])
        }
      />
      <Button
        title="Beacon"
        handleClick={() =>
          setPreset([
            [12, 12],
            [12, 13],
            [13, 12],
            [13, 13],
            [14, 14],
            [14, 15],
            [15, 14],
            [15, 15],
          ])
        }
      />
      <Button
        title="Glider"
        handleClick={() =>
          setPreset([
            [15, 12],
            [16, 13],
            [16, 14],
            [15, 14],
            [14, 14],
          ])
        }
      />
    </div>
  );
};

export default connect(null, { setPreset })(Presets);
