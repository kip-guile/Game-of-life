import React from "react";
import { connect } from "react-redux";
import Button from "./button";
import "../App.css";
import { nextSlide, clear, playNow, stopPlay, randomize } from "../actions";

const Controls = ({ nextSlide, clear, playNow, play, stopPlay, randomize }) => {
  const togglePlay = () => {
    if (play.playing === false) {
      const label = setInterval(nextSlide, 500);
      playNow(label);
    } else {
      clearInterval(play.label);
      stopPlay();
    }
  };
  return (
    <div className="controls">
      <div className="buttons">
        <Button title={"random"} handleClick={randomize} />
        <Button title={"reset"} handleClick={clear} />
        <Button
          title={!play.playing ? "play" : "stop"}
          handleClick={togglePlay}
        />
        <Button title="next" handleClick={nextSlide} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  play: state.play,
});

export default connect(mapStateToProps, {
  nextSlide,
  randomize,
  clear,
  playNow,
  stopPlay,
})(Controls);
