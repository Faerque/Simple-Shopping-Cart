import { DINCREMENT, DDECREMENT } from "./actionTypes";

const initialState = {
  value: 72,
};

const dellReducer = (state = initialState, action) => {
  switch (action.type) {
    case DINCREMENT:
      return {
        ...state,
        value: state.value + action.payload,
      };
    case DDECREMENT:
      return {
        ...state,
        value: state.value - action.payload,
      };
    default:
      return state;
  }
};

export default dellReducer;
