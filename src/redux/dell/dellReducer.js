import { DINCREMENT, DDECREMENT } from "./actionTypes";

const initialState = {
  value: 72,
};

const dellReducer = (state = initialState, action) => {
  switch (action.type) {
    case DINCREMENT:
      return {
        ...state,
        value: state.value + 1,
      };
    case DDECREMENT:
      return {
        ...state,
        value: state.value - 1,
      };
    default:
      return state;
  }
};

export default dellReducer;
