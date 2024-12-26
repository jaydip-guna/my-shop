import { configureStore } from '@reduxjs/toolkit'
import { cartReducer } from './slice/cartSlice'
import { productsReducer } from './slice/productSlice'

export const store = configureStore({
  reducer: {
    cart: cartReducer,   
    products: productsReducer,

  },
})