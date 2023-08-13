import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import foodsSlice from "../reducers/foodSlice";
import notificationSlice from "../reducers/notificationSlice";
import cartSlice from "../reducers/cartSlice";

const rootReducer = combineReducers({
  notifications: notificationSlice.reducer,
  cart: cartSlice.reducer,
  foods: foodsSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

export default store;
