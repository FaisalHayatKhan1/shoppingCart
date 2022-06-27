/** @format */

import { createSlice } from "@reduxjs/toolkit";
import { original } from "immer";
const cartSlice = createSlice({
  name: "cart-data",
  initialState: {
    items: [],
    totalQuantity: 0,
    totalAmount:0
  },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id); 
      state.totalQuantity++;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          img: newItem.img
        });
      } else {
          existingItem.totalPrice = newItem.price+existingItem.price;
          existingItem.quantity++;
          console.log(existingItem.price + existingItem.price, "value");
      }
    },
  },
});
export const cartAction = cartSlice.actions;
export default cartSlice;
