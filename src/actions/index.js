import { SWITCH, SLIDE } from "./types";

export const toggleSwitch = (cordinates) => {
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
