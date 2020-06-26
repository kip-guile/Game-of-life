import React, { useState } from "react";
import { connect } from "react-redux";
import Button from "./button";
import "../App.css";
import { nextSlide, clear, playNow, stopPlay, randomize } from "../actions";
import { cellcount, togglePlay, stopPlayFxn } from "./helpers";

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
  const [count, setCount] = useState(3);
  // const deploy = withClosure(play, nextSlide, forward, playNow);
  const fast = () => {
    if (count === 5) {
      setCount(3);
    } else {
      setCount(count + 1);
    }
    console.log(count);
    let newspeed = 500 / count;
    // clear interval before increasing speed
    if (play.label) {
      clearInterval(play.label);
    }
    const label = setInterval(nextSlide, newspeed);
    playNow(label);
  };
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
        <Button icon={"fa fa-fast-forward fa-lg"} handleClick={fast} />
      </div>
      <div style={{ marginLeft: "5em" }}>
        <p>
          Generation - <span style={{ color: "#FF6F91" }}>{generation}</span>
          {"   "}
          &nbsp;&nbsp; Alive -{" "}
          <span style={{ color: "#F9F871" }}>
            {cellcount(board, play.label)[0]}
          </span>{" "}
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
