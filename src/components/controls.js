import React from "react";
import { connect } from "react-redux";
import Button from "./button";
import "../App.css";
import { nextSlide } from "../actions";

const Controls = ({ nextSlide }) => {
  return (
    <div className="controls">
      <div className="buttons">
        <Button title={"select"} />
        <Button title={"reset"} />
        <div className="button-group">
          <Button title={"play"} />
          <Button title="next" handleClick={nextSlide} />
          <Button title="stop" />
        </div>
      </div>
    </div>
  );
};

export default connect(null, { nextSlide })(Controls);
