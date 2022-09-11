import { CINCREMENT, CDECREMENT } from "./actionTypes";

const initialState = {
  value: 35,
};

const canonReducer = (state = initialState, action) => {
  switch (action.type) {
    case CINCREMENT:
      return {
        ...state,
        value: state.value + 1,
      };
    case CDECREMENT:
      return {
        ...state,
        value: state.value - 1,
      };
    default:
      return state;
  }
};
export default canonReducer;
