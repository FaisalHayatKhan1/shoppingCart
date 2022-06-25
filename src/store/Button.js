import { createSlice, configureStore } from "@reduxjs/toolkit";

const toogleSlice=createSlice({
    name:'btnToogle',
    initialState:{valueToogle:false, formVal:{}},
    reducers:{
        btnToogle(state, action){
            state.valueToogle=true;
            
            state.formVal=action.payload
        }
    }
})
const store=configureStore({
    reducer:{toogle: toogleSlice.reducer}
})
export const dispatchAction= toogleSlice.actions;
export default store