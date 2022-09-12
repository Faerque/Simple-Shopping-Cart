import { AINCREMENT, ADECREMENT } from "./actionTypes";

export const aincrement = (value) => {
  return {
    type: AINCREMENT,
    payload: value,
  };
};

export const adecrement = (value) => {
  return {
    type: ADECREMENT,
    payload: value,
  };
};
