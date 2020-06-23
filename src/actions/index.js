import { SWITCH, SLIDE } from "./types";

export const toggleSwitch = (cell, cordinates) => {
  console.log(cell);
  return {
    type: SWITCH,
    payload: cordinates,
  };
};

export const nextSlide = () => {
  return {
    type: SLIDE,
  };
};
