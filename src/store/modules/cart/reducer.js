import { ADD_PRODUCT } from "./actionTypes";

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      const { product } = action;
      return [...state, product];
    default:
      return state;
  }
};

export default cartReducer;
