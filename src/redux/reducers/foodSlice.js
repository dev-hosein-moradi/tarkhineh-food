import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  foods: [],
};

const foodsSlice = createSlice({
  name: "foods",
  initialState: INITIAL_STATE,
  reducers: {
    setFoods(state, action) {
      console.log(action.payload);
      state.foods = action.payload;
    },
  },
});

export const foodsActions = foodsSlice.actions;
export default foodsSlice;
