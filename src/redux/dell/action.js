import { DINCREMENT, DDECREMENT } from "./actionTypes";

export const increment = () => {
  return {
    type: DINCREMENT,
  };
};

export const decrement = () => {
  return {
    type: DDECREMENT,
  };
};
