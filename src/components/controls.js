import React from "react";
import Button from "./button";
import "../App.css";

const Controls = () => {
  return (
    <div className="controls">
      <div className="buttons">
        <Button title={"select"} />
        <Button title={"reset"} />
        <div className="button-group">
          <Button title={"play"} />
          <Button title="stop" />
        </div>
      </div>
    </div>
  );
};

export default Controls;
