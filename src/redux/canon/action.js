import { CINCREMENT, CDECREMENT } from "./actionTypes";

export const increment = () => {
  return {
    type: CINCREMENT,
  };
};

export const decrement = () => {
  return {
    type: CDECREMENT,
  };
};
