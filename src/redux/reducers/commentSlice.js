import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  comments: [],
};

const commentSlice = createSlice({
  name: "comment",
  initialState: INITIAL_STATE,
  reducers: {
    getComments(state, action) {
      return {
        ...state,
        comments: action.payload,
      };
    },
    addNewComment(state, action) {
      return {
        ...state,
        comments: [...state.comments, action.payload],
      };
    },
    updateComment(state, action) {},
    deleteComment(state, action) {
      return {
        ...state,
        comments: state.comments.filter(
          (comment) => comment.id !== action.payload
        ),
      };
    },
  },
});

export const commentActions = commentSlice.actions;
export default commentSlice;
