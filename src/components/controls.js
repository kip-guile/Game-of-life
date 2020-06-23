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
        <Button title={"reset"} handleClick={clear} />
        <Button icon={"fa fa-random fa-lg"} handleClick={randomize} />
        <Button
          icon={!play.playing ? "fa fa-play fa-lg" : "fa fa-stop"}
          handleClick={togglePlay}
        />
        <Button icon={"fa fa-step-forward fa-lg"} handleClick={nextSlide} />
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
