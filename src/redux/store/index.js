import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import foodsSlice from "../reducers/foodSlice";
import notificationSlice from "../reducers/notificationSlice";
import cartSlice from "../reducers/cartSlice";
import commentSlice from "../reducers/commentSlice";
import branchSlice from "../reducers/branchSlice";

const rootReducer = combineReducers({
  notifications: notificationSlice.reducer,
  cart: cartSlice.reducer,
  foods: foodsSlice.reducer,
  comments: commentSlice.reducer,
  branchs: branchSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

export default store;
