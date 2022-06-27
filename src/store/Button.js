/** @format */

import { createSlice } from "@reduxjs/toolkit";

const toogleSlice = createSlice({
  name: "btnToogle",
  initialState: { valueToogle: false, formVal: {} },
  reducers: {
    btnToogle(state, action) {
      state.valueToogle = true;
      state.formVal = action.payload;
    },
  },
});

export const dispatchAction = toogleSlice.actions;
export default toogleSlice;
