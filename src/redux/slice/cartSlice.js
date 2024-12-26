import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cartList: [],
  total: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState:initialState,
  reducers: {
    addToCart: (state, action) => {
      const foundProduct = state.cartList.find((value) => {
        if (value.id === action.payload.id) {
          return true;
        }
        return false;
      });

      if (foundProduct) {
        const updatedCart = state.cartList.map((value) => {
          if (value.id === foundProduct.id) {
            return { ...value, qty: value.qty + 1 };
          }
          return value;
        });
        state.cartList = updatedCart;
      } else {
        state.cartList = [...state.cartList, action.payload];
      }
    },
    removeFromCart: (state, action) => {
      const updatedCart=state.cartList.filter((value)=>{
        if(value.id=== action.payload){
            return false
        }
        return  true;
    });
state.cartList=updatedCart;
    },
    increaseQty: (state, action) => {
      const updatedCart = state.cartList.map((value) => {
          if (value.id === action.payload) {
            return { ...value, qty: value.qty + 1 };
          }
          return value;
        });
       state.cartList=updatedCart;
    },
    decreaseQty: (state, action) => {
      const updatedCart = state.cartList.map((value) => {
          if (value.id === action.payload) {
            if (value.qty > 1) {
              return { ...value, qty: value.qty - 1 };
            }
            return value;
          }
          return value;
        });
        state.cartList=updatedCart;
       
    },
  },
});
export const { addToCart, removeFromCart, increaseQty, decreaseQty } =
  cartSlice.actions;

export const cartReducer = cartSlice.reducer;
