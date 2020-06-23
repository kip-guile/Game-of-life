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
        marginLeft: "2em",
        paddingRight: "2em",
        borderRight: "3px solid #ddd",
        textAlign: "center",
      }}
    >
      <h4 style={{ color: "#ff6f91" }}>Spaceships</h4>
      <Button
        title={"Lightweight Spaceship"}
        handleClick={() =>
          setPreset([
            [17, 19],
            [17, 20],
            [18, 20],
            [19, 20],
            [18, 21],
            [19, 19],
            [20, 19],
            [19, 18],
            [20, 18],
            [19, 17],
            [18, 17],
            [18, 18],
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
      <h4 style={{ color: "#ff6f91" }}>Oscillators</h4>
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
        title={"Pentadecathon"}
        handleClick={() =>
          setPreset([
            [11, 18],
            [11, 19],
            [11, 20],
            [12, 18],
            [12, 19],
            [12, 20],
            [13, 19],
            [14, 19],
            [15, 19],
            [16, 18],
            [16, 20],
            [20, 18],
            [20, 20],
            [21, 19],
            [22, 19],
            [23, 19],
            [24, 18],
            [24, 19],
            [24, 20],
            [25, 20],
            [25, 19],
            [25, 18],
          ])
        }
      />
      <Button
        title={"Pulsar"}
        handleClick={() =>
          setPreset([
            [12, 13],
            [12, 14],
            [12, 15],
            [14, 16],
            [15, 16],
            [16, 16],
            [17, 15],
            [17, 14],
            [17, 13],
            [14, 11],
            [15, 11],
            [16, 11],
            [14, 18],
            [15, 18],
            [16, 18],
            [12, 19],
            [12, 20],
            [12, 21],
            [14, 23],
            [15, 23],
            [16, 23],
            [17, 19],
            [17, 20],
            [17, 21],
            [19, 21],
            [19, 20],
            [19, 19],
            [20, 18],
            [21, 18],
            [22, 18],
            [24, 19],
            [24, 20],
            [24, 21],
            [22, 23],
            [21, 23],
            [20, 23],
            [20, 16],
            [21, 16],
            [22, 16],
            [19, 15],
            [19, 14],
            [19, 13],
            [20, 11],
            [21, 11],
            [22, 11],
            [24, 13],
            [24, 14],
            [24, 15],
          ])
        }
      />
      <h4 style={{ color: "#ff6f91" }}>Still Lifes</h4>
      <Button
        title={"Beehive"}
        handleClick={() =>
          setPreset([
            [16, 18],
            [16, 19],
            [18, 18],
            [18, 19],
            [17, 20],
            [17, 17],
          ])
        }
      />
      <Button
        title={"Boat"}
        handleClick={() =>
          setPreset([
            [18, 19],
            [18, 20],
            [19, 19],
            [19, 21],
            [20, 20],
          ])
        }
      />
      <Button
        title={"Loaf"}
        handleClick={() =>
          setPreset([
            [19, 18],
            [19, 19],
            [20, 20],
            [21, 20],
            [22, 19],
            [21, 18],
            [20, 17],
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
    </div>
  );
};

export default connect(null, { setPreset })(Presets);
