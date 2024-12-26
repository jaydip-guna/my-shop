import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const getAllProducts = createAsyncThunk(
  "products/getAllProducts",
  (sortOrder) => {
    return fetch(`https://fakestoreapi.com/products?sort=${sortOrder}`).then(
      (response) => {
        return response.json();
      }
    );
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: {
    loading: false,
    products: null,
    error: "",
  },
  reducers: {
    getAllproducts:(state,action)=>{
      fetch(`https://fakestoreapi.com/products?sort=${action.payload}`).then((response)=>{
        return response.json();
      }).then((data)=>{
        data.products=data;
        state.error="";
      }).catch((error)=>{
        state.error=error.message;
        state.products=null
      })
    }
  },
  // extraReducers: (builder) => {
  //   builder.addCase(getAllproduct.pending, (state, action) => {
  //     state.loading = true;
  //     state.products = null;
  //     state.error = "";
  //   });
  //   builder.addCase(getAllproduct.fulfilled, (state, action) => {
  //     state.loading = false;
  //     state.products = action.payload;
  //     state.error = "";
  //   });
  //   builder.addCase(getAllproduct.rejected, (state, action) => {
  //     state.loading = false;
  //     state.products = null;
  //     state.error = action.payload.message;
  //   });
  // },
});
export const productsReducer = productsSlice.reducer;
