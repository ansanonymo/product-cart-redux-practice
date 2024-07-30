import { combineReducers } from "redux";
import cartReducer from "./cartSlice/cartReducer";
import productReducer from "./productSlice/productReducer";

const rootReducer = combineReducers({
  product: productReducer,
  cart: cartReducer,
});

export default rootReducer;
