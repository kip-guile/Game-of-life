import React from "react";
import { connect } from "react-redux";
import Button from "./button";
import "../App.css";
import { nextSlide, clear, playNow, stopPlay, randomize } from "../actions";

const Controls = ({
  nextSlide,
  clear,
  playNow,
  play,
  stopPlay,
  randomize,
  generation,
}) => {
  const togglePlay = () => {
    if (play.playing === false) {
      const label = setInterval(nextSlide, 500);
      playNow(label);
    } else {
      clearInterval(play.label);
      stopPlay();
    }
  };
  const withClosure = () => {
    let newSPeed = 500;
    const fast = () => {
      newSPeed /= 2;
      if (play.label) {
        clearInterval(play.label);
      }
      // if (play.playing === true) {
      const label = setInterval(nextSlide, newSPeed);
      playNow(label);
      // }
    };
    return fast;
  };
  const deploy = withClosure();
  const stopPlayFxn = () => {
    clearInterval(play.label);
    stopPlay();
  };
  return (
    <div className="controls">
      <div className="buttons">
        <Button title={"reset"} handleClick={clear} />
        <Button icon={"fa fa-random fa-lg"} handleClick={randomize} />
        <Button
          icon={!play.playing ? "fa fa-play fa-lg" : "fa fa-pause"}
          handleClick={togglePlay}
        />
        <Button icon="fa fa-stop" handleClick={stopPlayFxn} />
        <Button icon={"fa fa-step-forward fa-lg"} handleClick={nextSlide} />
        <Button icon={"fa fa-fast-forward fa-lg"} handleClick={deploy} />
      </div>
      <div style={{ marginLeft: "5em" }}>
        <p>
          Generation: <span style={{ color: "#ff6f91" }}>{generation}</span>
        </p>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  play: state.play,
  generation: state.generation,
});

export default connect(mapStateToProps, {
  nextSlide,
  randomize,
  clear,
  playNow,
  stopPlay,
})(Controls);
