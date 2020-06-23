import React from "react";
import { connect } from "react-redux";
import Button from "./button";
import "../App.css";
import { nextSlide, clear } from "../actions";

const Controls = ({ nextSlide, clear }) => {
  return (
    <div className="controls">
      <div className="buttons">
        <Button title={"select"} />
        <Button title={"reset"} handleClick={clear} />
        <div className="button-group">
          <Button title={"play"} />
          <Button title="next" handleClick={nextSlide} />
          <Button title="stop" />
        </div>
      </div>
    </div>
  );
};

export default connect(null, { nextSlide, clear })(Controls);
