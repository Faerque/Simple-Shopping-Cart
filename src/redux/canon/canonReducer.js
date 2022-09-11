import { CINCREMENT, CDECREMENT } from "./actionTypes";

const initialState = {
  value: 35,
};

const canonReducer = (state = initialState, action) => {
  switch (action.type) {
    case CINCREMENT:
      return {
        ...state,
        value: state.value + action.payload,
      };
    case CDECREMENT:
      return {
        ...state,
        value: state.value - action.payload,
      };
    default:
      return state;
  }
};
export default canonReducer;
