import { createSlice } from "@reduxjs/toolkit";
import stuffs from "../stuffs";

const cartSlice = createSlice({
  name: "post",
  initialState: {
    items: stuffs,
    totalAmount: 0,
    totalCount: 0,
  },

  reducers: {
    getCartTotal: (state) => {
      let { totalAmount, totalCount } = state.items.reduce(
        (cartTotal, cartItem) => {
          const { price, amount } = cartItem;
          const itemTotal = price * amount;

          cartTotal.totalAmount += itemTotal;
          cartTotal.totalCount += amount;
          return cartTotal;
        },
        {
          totalAmount: 0,
          totalCount: 0,
        }
      );
      state.totalAmount = parseInt(totalAmount.toFixed(2));
      state.totalCount = totalCount;
    },
    remove: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    increase: (state, action) => {
      state.items = state.items.map((item) => {
        if (item.id === action.payload) {
          return { ...item, amount: item.amount + 1 };
        }
        return item;
      });
    },
    decrease: (state, action) => {
      state.items = state.items
        .map((item) => {
          if (item.id === action.payload) {
            return { ...item, amount: item.amount - 1 };
          }
          return item;
        })
        .filter((item) => item.amount !== 0);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const {
  getCartTotal,
  remove,
  increase,
  decrease,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;