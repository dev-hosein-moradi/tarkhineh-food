import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: INITIAL_STATE,
  reducers: {
    addItems(state, action) {
      // filter catItems array to check if dublicate item, then increase quantity
      const existItem = state.cartItems.filter(
        (item) => item?.id === action.payload.id
      );
      // if item exist
      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.find((item) => {
            item.quantity = item.quantity++;
          }),
        };
      } else {
        // if not exist then add new item
        return { ...state, cartItems: [...state.cartItems, action.payload] };
      }
    },
    removeItem(state, action) {
      // if item exist in cart.
      const existItem = state.cartItems.filter(
        (item) => item?.id === action.payload.id
      );
      // if item exist
      if (existItem) {
        const itemQuantity = state.cartItems.filter(
          (item) => item.id === action.payload?.id && item.quantity
        );
        // if item exist and have quantity more than 1 should decrease quantity.
        if (itemQuantity > 1) {
          return {
            ...state,
            cartItems: state.cartItems.find((item) => {
              item.quantity = item.quantity--;
            }),
          };
        } else if (itemQuantity === 1) {
          // if item exist and have quantity with value of 1 should remove dirctly.
          return {
            ...state,
            cartItems: state.cartItems.filter(
              (item) => item.id !== action.payload?.id
            ),
          };
        }
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
