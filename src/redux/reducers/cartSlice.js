import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  cartItems: [
    {
      id: 1,
      name: "پاستا سبزیجات",
      compounds: "برنج سبزی کوفته لپه آرد نخودچی، گردو و زرشک و آلو پیاز",
      discountPrice: "175,000",
      imgUrl:
        "https://firebasestorage.googleapis.com/v0/b/tarkhineh-9ade7.appspot.com/o/foods%2Fsf1.svg4152d9c8-1448-4c48-8f4a-01e88c2ba576?alt=media&token=f416012c-90aa-4a4c-b9f9-ba97856805c1",
      price: "200,000",
      isFavorite: "false",
      mainPrice: "215,000",
      numOfScore: 33,
      percentOfDiscount: 25,
      quintity: 2,
      rate: 3,
      tag: "so",
      type: "irani",
    },
  ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: INITIAL_STATE,
  reducers: {
    getCartItems(state, action) {
      state.cartItems = action.payload;
    },
    addItems(state, action) {
      return { ...state, cartItems: [...state.cartItems, action.payload.item] };
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
