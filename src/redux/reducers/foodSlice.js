import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  foods: [],
};

const foodsSlice = createSlice({
  name: "foods",
  initialState: INITIAL_STATE,
  reducers: {
    setFoods(state, action) {
      state.foods = action.payload;
    },
    addNewFood(state, action) {
      // check if item exist in db
      const existItem = state.foods.filter(
        (item) => item?.id === action.payload.id
      );
      // if not exist in db, then add
      if (!existItem) {
        return {
          ...state,
          foods: [...state.foods, action.payload],
        };
      }
    },
    deleteFood(state, action) {
      return {
        ...state,
        foods: state.foods.filter((food) => food.if !== action.payload),
      };
    },
    updateFood(state, action) {
      // not completed yet
      return {
        ...state,
        foods: state.foods.find((item) => {
          if (item.id === action.payload.id) {
            return { ...item };
          }
        }),
      };
    },
  },
});

export const foodsActions = foodsSlice.actions;
export default foodsSlice;
