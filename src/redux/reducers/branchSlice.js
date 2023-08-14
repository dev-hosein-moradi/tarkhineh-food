import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  branchs: [],
};

const branchSlice = createSlice({
  name: "branch",
  initialState: INITIAL_STATE,
  reducers: {
    getBranchs(state, action) {
      return {
        ...state,
        branchs: action.payload,
      };
    },
    addNewBranch(state, action) {
      return {
        ...state,
        branchs: [...state.branchs, action.payload],
      };
    },
    updateBranch(state, action) {},
    deleteBranch(state, action) {
      return {
        ...state,
        branchs: state.branchs.filter(
          (branch) => branch.id !== action.payload
        ),
      };
    },
  },
});

export const branchActions = branchSlice.actions;
export default branchSlice;
