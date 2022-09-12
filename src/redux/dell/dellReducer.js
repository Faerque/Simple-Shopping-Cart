import { DINCREMENT, DDECREMENT } from "./actionTypes";

const initialState = {
  value: 0,
  price: 0,
};

const dellReducer = (state = initialState, action) => {
  switch (action.type) {
    case DINCREMENT:
      return {
        ...state,
        value: state.value + action.payload,
        price: state.price + 9300,
      };
    case DDECREMENT:
      return {
        ...state,
        value: state.value - action.payload,
        price: state.price - 9300,
      };
    default:
      return state;
  }
};

export default dellReducer;
