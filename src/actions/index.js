import { SWITCH, SLIDE, SET_PRESET, CLEAR } from "./types";

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

export const setPreset = (cells) => {
  return {
    type: SET_PRESET,
    payload: cells,
  };
};

export const clear = () => {
  return {
    type: CLEAR,
  };
};
