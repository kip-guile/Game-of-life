import React from "react";
import { connect } from "react-redux";
import Button from "./button";
import "../App.css";
import { setPreset } from "../actions";

const Presets = ({ setPreset, label }) => {
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
          setPreset(
            [
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
            ],
            label
          )
        }
      />
      <Button
        title="Glider"
        handleClick={() =>
          setPreset(
            [
              [15, 12],
              [16, 13],
              [16, 14],
              [15, 14],
              [14, 14],
            ],
            label
          )
        }
      />
      <Button
        title="Gosper glider gun"
        handleClick={() =>
          setPreset(
            [
              [15, 0],
              [16, 0],
              [15, 1],
              [16, 1],
              [15, 10],
              [16, 10],
              [17, 10],
              [18, 11],
              [14, 11],
              [13, 12],
              [13, 13],
              [19, 12],
              [19, 13],
              [16, 14],
              [14, 15],
              [15, 16],
              [16, 16],
              [17, 16],
              [18, 15],
              [16, 17],
              [15, 20],
              [14, 20],
              [13, 20],
              [13, 21],
              [14, 21],
              [15, 21],
              [12, 22],
              [16, 22],
              [12, 24],
              [11, 24],
              [16, 24],
              [17, 24],
              [13, 34],
              [13, 35],
              [14, 34],
              [14, 35],
            ],
            label
          )
        }
      />
      <h4 style={{ color: "#ff6f91" }}>Oscillators</h4>
      <Button
        title={"Blinker"}
        handleClick={() =>
          setPreset(
            [
              [14, 12],
              [14, 13],
              [14, 14],
            ],
            label
          )
        }
      />
      <Button
        title={"Toad"}
        handleClick={() =>
          setPreset(
            [
              [12, 14],
              [12, 15],
              [12, 16],
              [13, 13],
              [13, 14],
              [13, 15],
            ],
            label
          )
        }
      />
      {/* <Button
        title="Beacon"
        handleClick={() =>
          setPreset(
            [
              [12, 12],
              [12, 13],
              [13, 12],
              [13, 13],
              [14, 14],
              [14, 15],
              [15, 14],
              [15, 15],
            ],
            label
          )
        }
      /> */}
      <Button
        title={"Pentadecathon"}
        handleClick={() =>
          setPreset(
            [
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
            ],
            label
          )
        }
      />
      <Button
        title={"Pulsar"}
        handleClick={() =>
          setPreset(
            [
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
            ],
            label
          )
        }
      />
      <Button
        title="R-Pentomino"
        handleClick={() =>
          setPreset(
            [
              [18, 19],
              [18, 20],
              [19, 19],
              [19, 18],
              [20, 19],
            ],
            label
          )
        }
      />
      <h4 style={{ color: "#ff6f91" }}>Still Lifes</h4>
      {/* <Button
        title={"Beehive"}
        handleClick={() =>
          setPreset(
            [
              [16, 18],
              [16, 19],
              [18, 18],
              [18, 19],
              [17, 20],
              [17, 17],
            ],
            label
          )
        }
      /> */}
      <Button
        title={"Boat"}
        handleClick={() =>
          setPreset(
            [
              [18, 19],
              [18, 20],
              [19, 19],
              [19, 21],
              [20, 20],
            ],
            label
          )
        }
      />
      <Button
        title={"Loaf"}
        handleClick={() =>
          setPreset(
            [
              [19, 18],
              [19, 19],
              [20, 20],
              [21, 20],
              [22, 19],
              [21, 18],
              [20, 17],
            ],
            label
          )
        }
      />

      <Button
        title={"Block"}
        handleClick={() =>
          setPreset(
            [
              [13, 14],
              [14, 14],
              [13, 15],
              [14, 15],
            ],
            label
          )
        }
      />

      {/* <Button
        title="Tub"
        handleClick={() =>
          setPreset(
            [
              [13, 14],
              [12, 15],
              [14, 15],
              [13, 16],
            ],
            label
          )
        }
      /> */}
    </div>
  );
};

const mapStateToProps = (state) => ({
  label: state.play.label,
});

export default connect(mapStateToProps, { setPreset })(Presets);
