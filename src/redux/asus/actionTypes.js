import { AINCREMENT, ADECREMENT } from "./action";

export const increment = () => {
  return {
    type: AINCREMENT,
  };
};

export const decrement = () => {
  return {
    type: ADECREMENT,
  };
};
