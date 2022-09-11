import { AINCREMENT, ADECREMENT } from "./actionTypes";

const initialState = {
  value: 20,
};

const asusReducer = (state = initialState, action) => {
  switch (action.type) {
    case AINCREMENT:
      return {
        ...state,
        value: state.value + 1,
      };
    case ADECREMENT:
      return {
        ...state,
        value: state.value - 1,
      };
    default:
      return state;
  }
};

export default asusReducer;
