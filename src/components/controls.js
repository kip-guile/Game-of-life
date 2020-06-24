import React from "react";
import { connect } from "react-redux";
import Button from "./button";
import "../App.css";
import { nextSlide, clear, playNow, stopPlay, randomize } from "../actions";
import { cellcount, togglePlay, stopPlayFxn, withClosure } from "./helpers";

const Controls = ({
  nextSlide,
  clear,
  playNow,
  play,
  stopPlay,
  randomize,
  generation,
  board,
}) => {
  const deploy = withClosure(play, nextSlide, playNow);
  return (
    <div className="controls">
      <div className="buttons">
        <Button title={"reset"} handleClick={() => clear(play.label)} />
        <Button icon={"fa fa-random fa-lg"} handleClick={randomize} />
        <Button
          icon={!play.playing ? "fa fa-play fa-lg" : "fa fa-pause"}
          handleClick={() => togglePlay(play, nextSlide, playNow, stopPlay)}
        />
        <Button
          icon="fa fa-stop"
          handleClick={() => stopPlayFxn(play, stopPlay)}
        />
        <Button icon={"fa fa-step-forward fa-lg"} handleClick={nextSlide} />
        <Button icon={"fa fa-fast-forward fa-lg"} handleClick={deploy} />
      </div>
      <div style={{ marginLeft: "5em" }}>
        <p>
          Generation - <span style={{ color: "#FF6F91" }}>{generation}</span>
          {"   "}
          &nbsp;&nbsp; Alive -{" "}
          <span style={{ color: "#F9F871" }}>{cellcount(board)[0]}</span>{" "}
          {"   "} &nbsp;&nbsp; Dead -{" "}
          <span style={{ color: "#008f7a" }}>{cellcount(board)[1]}</span>
        </p>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  play: state.play,
  generation: state.generation,
  board: state.board,
});

export default connect(mapStateToProps, {
  nextSlide,
  randomize,
  clear,
  playNow,
  stopPlay,
})(Controls);
