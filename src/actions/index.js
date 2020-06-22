import { SWITCH } from "./types";

export const toggleSwitch = (cordinates) => {
  console.log(cordinates);
  return {
    type: SWITCH,
    payload: cordinates,
  };
};
