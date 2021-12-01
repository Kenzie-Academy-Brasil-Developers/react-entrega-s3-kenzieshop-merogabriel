import { combineReducers } from "redux";

import productReducer from "./products/reducer";
import cartReducer from "./cart/reducer";

export default combineReducers({
  products: productReducer,
  cart: cartReducer,
});
