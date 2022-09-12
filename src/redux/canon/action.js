import { CINCREMENT, CDECREMENT } from "./actionTypes";

export const cincrement = (value) => {
  return {
    type: CINCREMENT,
    payload: value,
  };
};

export const cdecrement = (value) => {
  return {
    type: CDECREMENT,
    payload: value,
  };
};
