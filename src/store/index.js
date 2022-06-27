import { configureStore} from '@reduxjs/toolkit'
import toogleSlice from './Button'
import cartSlice from './cart-slice';
const store = configureStore({
  reducer: {
    toggleAction: toogleSlice.reducer,
    cart: cartSlice.reducer
  },
});
export default store