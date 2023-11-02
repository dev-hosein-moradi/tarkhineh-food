import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: INITIAL_STATE,
  reducers: {
    setCartItems(state, action) {
      state.cartItems = action.payload;
    },
    addItems(state, action) {
      return { ...state, cartItems: [...state.cartItems, action.payload.item] };
    },
    removeItem(state, action) {
      // if item exist in cart.
      const existItem = state?.cartItems?.filter(
        (item) => item?.id === action.payload.id
      );

      // if item exist
      if (existItem) {
        // const itemQuantity = state.cartItems.filter(
        //   (item) => item.id === action.payload?.id && item.quantity
        // );
        const targetItem = state.cartItems.find(
          (item) => item.id === action.payload?.id
        );
        // if item exist and have quantity more than 1 should decrease quantity.
        if (targetItem.quantity > 1) {
          return {
            ...state,
            cartItems: state.cartItems.map((item) =>
              item.id === action.payload?.id
                ? { ...item, quantity: item?.quantity - 1 }
                : item
            ),
          };
        } else if (targetItem.quantity === 1) {
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
