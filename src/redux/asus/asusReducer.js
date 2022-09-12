import { AINCREMENT, ADECREMENT } from "./actionTypes";

const initialState = {
  value: 0,
  price: 0,
};

const asusReducer = (state = initialState, action) => {
  switch (action.type) {
    case AINCREMENT:
      return {
        ...state,
        value: state.value + action.payload,
        price: state.price + 35500,
      };
    case ADECREMENT:
      return {
        ...state,
        value: state.value - action.payload,
        price: state.price - 35500,
      };
    default:
      return state;
  }
};

export default asusReducer;
