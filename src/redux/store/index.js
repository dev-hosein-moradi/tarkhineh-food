import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import foodsSlice from "../reducers/foodSlice";

const rootReducer = combineReducers({
  foods: foodsSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

export default store;
