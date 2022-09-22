// import { createSlice } from "@reduxjs/toolkit"
// // import data from "../data"

// const cartSlice = createSlice({
//   name: "cart",
//   initialState: {
//     items: [],
//     totalPrice: 0,
//     totalCount: 0,
//   },

//   reducers: {

//     getCartTotal: (state) => {
//       let { totalPrice, totalCount } = state.items.reduce(
//         (cartTotal, cartItem) => {
//           const { price, qty } = cartItem
//           const itemTotal = price * qty

//           cartTotal.totalPrice += itemTotal
//           cartTotal.totalCount += qty
//           return cartTotal
//         },
//         {
//           totalPrice: 0,
//           totalCount: 0,
//         }
//       )
//       state.totalPrice = parseInt(totalPrice.toFixed(2))
//       state.totalCount = totalCount
//     },
//     addToCart: (state, action) => {
//       const itemInCart:any = state.items.find((item:any) => item.id === action.payload.id)
//       if (itemInCart) {
//         itemInCart.qty++
//       } else {
//         state.items.push({ ...action.payload, qty: 1 })
//       }
//     },
//     remove: (state, action) => {
//       state.items = state.items.filter((item:any) => item.id !== action.payload)
//     },
//     increase: (state, action) => {
//       const item = state.items.find((item:any) => item.id === action.payload)
//       item.qty++
//     },
//     decrease: (state, action) => {
//       const item = state.items.find((item:any) => item.id === action.payload)
//       if (item.qty === 1) {
//         item.qty = 1
//       } else {
//         item.qty--
//       }
//     },
//     clearCart: (state) => {
//       state.items = []
//     },

//   },
// })

// export const cartReducer = cartSlice.reducer
// export const {
//   getCartTotal,
//   remove,
//   increase,
//   decrease,
//   clearCart,
//   addToCart
// } = cartSlice.actions

import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.items.find(item => item.id === action.payload.id)
      if (itemInCart) {
        itemInCart.qty++
      } else {
        state.items.push({ ...action.payload, qty: 1 })
      }
    },
    increment: (state, action) => {
      const item = state.items.find(item => item.id === action.payload)
      item.qty++
    },
    decrement: (state, action) => {
      const item = state.items.find(item => item.id === action.payload)
      if (item.qty === 1) {
        item.qty = 1
      } else {
        item.qty--
      }
    },
    remove: (state, action) => {
      const removeItem = state.items.filter(item => item.id !== action.payload)
      state.items = removeItem
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
})

export const cartReducer = cartSlice.reducer
export const {
  addToCart,
  increment,
  decrement,
  remove,
  clearCart
} = cartSlice.actions