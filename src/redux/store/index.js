import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import foodsSlice from "../reducers/foodSlice";
import notificationSlice from "../reducers/notificationSlice";

const rootReducer = combineReducers({
  notifications: notificationSlice.reducer,
  foods: foodsSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

export default store;
