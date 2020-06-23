import { SWITCH, SLIDE, SET_PRESET, CLEAR, PLAY, STOP, RANDOM } from "./types";

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

export const playNow = (label) => {
  return {
    type: PLAY,
    payload: label,
  };
};

export const stopPlay = (label) => {
  return {
    type: STOP,
    payload: label,
  };
};

export const randomize = () => {
  return {
    type: RANDOM,
  };
};
