import { CINCREMENT, CDECREMENT } from "./actionTypes";

const initialState = {
  value: 0,
  price: 0,
};

const canonReducer = (state = initialState, action) => {
  switch (action.type) {
    case CINCREMENT:
      return {
        ...state,
        value: state.value + action.payload,
        price: state.price + 3600,
      };
    case CDECREMENT:
      return {
        ...state,
        value: state.value - action.payload,
        price: state.price - 3600,
      };
    default:
      return state;
  }
};
export default canonReducer;
