import { createStore, combineReducers } from "redux";
import cartItems from "../reducers/cartItems";

var store;
export default store = createStore(cartItems);
